// backend/services/bunnyUploader.js
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

/**
 * Sube un archivo a BunnyCDN en una estructura organizada por marca, año y vehiculoId
 * @param {string} filePath - Ruta local del archivo
 * @param {string} fileName - Nombre del archivo (ej. 1716259.jpg)
 * @param {Object} options - Opciones: { marca, anio, vehiculoId }
 * @returns {Promise<{ success: boolean, url?: string, error?: string }>}
 */
async function subirArchivoBunny(filePath, fileName, options = {}) {
  const { marca = 'OTROS', anio = 'DESCONOCIDO', vehiculoId = 'desconocido' } = options;

  const folderPath = path.posix.join(
    sanitize(marca.toUpperCase()),
    sanitize(anio.toString()),
    `vehiculo_${vehiculoId}`
  );

  const fullStoragePath = `${folderPath}/${fileName}`;
  const url = `${process.env.BUNNY_STORAGE_HOST}/${process.env.BUNNY_STORAGE_ZONE}/${fullStoragePath}`;

  try {
    const fileStream = fs.createReadStream(filePath);

    await axios.put(url, fileStream, {
      headers: {
        AccessKey: process.env.BUNNY_STORAGE_PASSWORD,
        'Content-Type': 'application/octet-stream'
      }
    });

    const publicUrl = `${process.env.BUNNY_CDN_URL}/${fullStoragePath}`;
    return { success: true, url: publicUrl };
  } catch (error) {
    console.error('❌ Error subiendo a Bunny:', error.message);
    return { success: false, error: error.message };
  }
}

function sanitize(text) {
  return text.trim().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\-]/g, '');
}

module.exports = subirArchivoBunny;
