#!/bin/bash

# Script de deployment para Autoventas360
echo "🚀 Iniciando deployment de Autoventas360..."

# Cargar variables de entorno
set -a
source .env.prod
set +a

# Detener contenedores existentes si existen
echo "🛑 Deteniendo contenedores existentes..."
docker compose -f docker-compose.prod.yml down --remove-orphans

# Limpiar imágenes no utilizadas
echo "🧹 Limpiando imágenes no utilizadas..."
docker system prune -f

# Construir e iniciar servicios
echo "🔨 Construyendo e iniciando servicios..."
docker compose -f docker-compose.prod.yml up -d --build

# Esperar a que los servicios estén listos
echo "⏳ Esperando a que los servicios estén listos..."
sleep 30

# Verificar que los contenedores estén corriendo
echo "🔍 Verificando estado de los contenedores..."
docker compose -f docker-compose.prod.yml ps

# Mostrar logs
echo "📋 Mostrando logs recientes..."
docker compose -f docker-compose.prod.yml logs --tail=50

echo "✅ Deployment completado!"
echo "🌐 Frontend: https://autoventas360.com"
echo "🔧 Backend API: https://api.autoventas360.com"
echo "📊 Traefik Dashboard: https://traefik.autoventas360.com"
