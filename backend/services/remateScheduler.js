const { Remate } = require('../models');
const { Op } = require('sequelize');

class RemateScheduler {
  constructor() {
    this.intervalId = null;
  }

  /**
   * Iniciar el scheduler para verificar estados de remates cada minuto
   */
  start() {
    if (this.intervalId) {
      console.log('⏰ Scheduler de remates ya está ejecutándose');
      return;
    }

    console.log('⏰ Iniciando scheduler de remates...');
    
    // Ejecutar inmediatamente al iniciar
    this.checkRemateStates();
    
    // Luego ejecutar cada minuto
    this.intervalId = setInterval(() => {
      this.checkRemateStates();
    }, 60000); // 60 segundos
  }

  /**
   * Detener el scheduler
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('⏰ Scheduler de remates detenido');
    }
  }

  /**
   * Verificar y actualizar estados de remates según su horario programado
   */
  async checkRemateStates() {
    try {
      const now = new Date();
      
      // 1. Iniciar remates programados que ya deberían estar en vivo
      await this.startScheduledRemates(now);
      
      // 2. Finalizar remates en vivo que ya han terminado
      await this.finishLiveRemates(now);
      
      // 3. Calcular fechas de fin para remates que no las tienen
      await this.updateEndDates(now);
      
    } catch (error) {
      console.error('❌ Error en scheduler de remates:', error);
    }
  }

  /**
   * Iniciar remates que ya deberían estar en vivo
   */
  async startScheduledRemates(now) {
    try {
      const rematesParaIniciar = await Remate.findAll({
        where: {
          estado: 'programado',
          fechaHoraInicio: {
            [Op.lte]: now
          }
        }
      });

      for (const remate of rematesParaIniciar) {
        await remate.update({ 
          estado: 'en_vivo',
          fechaHoraFin: this.calculateEndDate(remate.fechaHoraInicio, remate.duracionMinutos)
        });
        
        console.log(`🟢 Remate #${remate.id} (${remate.titulo}) iniciado automáticamente`);
      }

      if (rematesParaIniciar.length > 0) {
        console.log(`⏰ ${rematesParaIniciar.length} remate(s) iniciado(s) automáticamente`);
      }
    } catch (error) {
      console.error('❌ Error iniciando remates programados:', error);
    }
  }

  /**
   * Finalizar remates en vivo que ya han terminado
   */
  async finishLiveRemates(now) {
    try {
      const rematesParaFinalizar = await Remate.findAll({
        where: {
          estado: 'en_vivo',
          fechaHoraFin: {
            [Op.lte]: now
          }
        }
      });

      for (const remate of rematesParaFinalizar) {
        // Establecer precio final como la puja actual o el precio base
        const precioFinal = remate.pujaActual || remate.precioBase;
        
        await remate.update({ 
          estado: 'finalizado',
          precioFinal: precioFinal
        });
        
        console.log(`🔴 Remate #${remate.id} (${remate.titulo}) finalizado automáticamente - Precio final: $${precioFinal}`);
      }

      if (rematesParaFinalizar.length > 0) {
        console.log(`⏰ ${rematesParaFinalizar.length} remate(s) finalizado(s) automáticamente`);
      }
    } catch (error) {
      console.error('❌ Error finalizando remates en vivo:', error);
    }
  }

  /**
   * Actualizar fechas de fin para remates que no las tienen calculadas
   */
  async updateEndDates(now) {
    try {
      const rematesSinFechaFin = await Remate.findAll({
        where: {
          fechaHoraFin: null,
          estado: {
            [Op.in]: ['programado', 'en_vivo']
          }
        }
      });

      for (const remate of rematesSinFechaFin) {
        const fechaFin = this.calculateEndDate(remate.fechaHoraInicio, remate.duracionMinutos);
        await remate.update({ fechaHoraFin: fechaFin });
      }

      if (rematesSinFechaFin.length > 0) {
        console.log(`⏰ Actualizada fecha de fin para ${rematesSinFechaFin.length} remate(s)`);
      }
    } catch (error) {
      console.error('❌ Error actualizando fechas de fin:', error);
    }
  }

  /**
   * Calcular fecha de fin basada en fecha de inicio y duración
   */
  calculateEndDate(fechaInicio, duracionMinutos) {
    const fechaFin = new Date(fechaInicio);
    fechaFin.setMinutes(fechaFin.getMinutes() + (duracionMinutos || 30));
    return fechaFin;
  }

  /**
   * Método manual para cambiar estado de un remate específico
   */
  async cambiarEstadoRemate(remateId, nuevoEstado) {
    try {
      const remate = await Remate.findByPk(remateId);
      if (!remate) {
        throw new Error('Remate no encontrado');
      }

      const updates = { estado: nuevoEstado };
      const now = new Date();

      // Lógica específica según el estado
      switch (nuevoEstado) {
        case 'en_vivo':
          updates.fechaHoraFin = this.calculateEndDate(now, remate.duracionMinutos);
          break;
        case 'finalizado':
          updates.precioFinal = remate.pujaActual || remate.precioBase;
          break;
      }

      await remate.update(updates);
      console.log(`✅ Remate #${remateId} cambiado a estado: ${nuevoEstado}`);
      
      return remate;
    } catch (error) {
      console.error(`❌ Error cambiando estado del remate #${remateId}:`, error);
      throw error;
    }
  }

  /**
   * Obtener estadísticas de remates
   */
  async getStats() {
    try {
      const stats = await Remate.findAll({
        attributes: [
          'estado',
          [require('sequelize').fn('COUNT', '*'), 'count']
        ],
        group: ['estado']
      });

      const result = {};
      stats.forEach(stat => {
        result[stat.estado] = parseInt(stat.get('count'));
      });

      return result;
    } catch (error) {
      console.error('❌ Error obteniendo estadísticas:', error);
      return {};
    }
  }
}

// Singleton instance
const remateScheduler = new RemateScheduler();

module.exports = remateScheduler;