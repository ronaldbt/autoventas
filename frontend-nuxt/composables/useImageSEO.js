// composables/useImageSEO.js
export const useImageSEO = () => {
  
  // Función para generar alt text optimizado para SEO
  const generateAltText = (vehiculo, index = 0) => {
    if (!vehiculo) return 'Vehículo usado en Autoventas360'
    
    const marca = vehiculo.marca?.nombre || 'Auto'
    const modelo = vehiculo.modelo?.nombre || 'usado'
    const año = vehiculo.año || vehiculo.anio || ''
    const ciudad = vehiculo.comuna?.nombre || vehiculo.region?.nombre || 'Chile'
    const precio = vehiculo.precio ? `$${Number(vehiculo.precio).toLocaleString()}` : ''
    
    // Alt text específico por índice de imagen
    const imageTypes = [
      'exterior frontal',
      'interior',
      'lateral',
      'posterior', 
      'motor',
      'tablero',
      'asientos',
      'maletero'
    ]
    
    const imageType = imageTypes[index] || `imagen ${index + 1}`
    
    return `${marca} ${modelo} ${año} usado en ${ciudad} - ${imageType}${precio ? ` - ${precio}` : ''}`
  }

  // Función para generar nombre de archivo SEO-friendly
  const generateImageFileName = (vehiculo, index = 0) => {
    if (!vehiculo) return `auto-usado-${index + 1}.jpg`
    
    const marca = vehiculo.marca?.nombre || 'auto'
    const modelo = vehiculo.modelo?.nombre || 'usado'
    const año = vehiculo.año || vehiculo.anio || '2020'
    const ciudad = vehiculo.comuna?.nombre || vehiculo.region?.nombre || 'chile'
    const id = vehiculo.id || 'sin-id'
    
    return `${marca}-${modelo}-${año}-usado-${ciudad}-${id}-${index + 1}.jpg`
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remover acentos
      .replace(/[^a-z0-9.-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }

  // Función para generar título de imagen
  const generateImageTitle = (vehiculo, index = 0) => {
    if (!vehiculo) return 'Vehículo usado - Autoventas360'
    
    const marca = vehiculo.marca?.nombre || 'Auto'
    const modelo = vehiculo.modelo?.nombre || 'usado'
    const año = vehiculo.año || vehiculo.anio || ''
    
    const imageTitles = [
      `${marca} ${modelo} ${año} - Vista frontal`,
      `${marca} ${modelo} ${año} - Interior`,
      `${marca} ${modelo} ${año} - Vista lateral`,
      `${marca} ${modelo} ${año} - Vista posterior`,
      `${marca} ${modelo} ${año} - Compartimiento motor`,
      `${marca} ${modelo} ${año} - Tablero e instrumentos`,
      `${marca} ${modelo} ${año} - Asientos`,
      `${marca} ${modelo} ${año} - Maletero`
    ]
    
    return imageTitles[index] || `${marca} ${modelo} ${año} - Imagen ${index + 1}`
  }

  // Función para optimizar imagen con parámetros SEO
  const optimizeImageForSEO = (imageSrc, vehiculo, index = 0) => {
    if (!imageSrc) return null
    
    // Si es una URL completa, retornarla tal como está
    if (imageSrc.startsWith('http')) {
      return {
        src: imageSrc,
        alt: generateAltText(vehiculo, index),
        title: generateImageTitle(vehiculo, index),
        loading: index === 0 ? 'eager' : 'lazy', // Primera imagen eager, resto lazy
        fetchpriority: index === 0 ? 'high' : 'auto'
      }
    }
    
    // Para imágenes locales, generar URL optimizada
    const optimizedSrc = imageSrc.includes('?') 
      ? `${imageSrc}&f=auto&q=85&w=800` 
      : `${imageSrc}?f=auto&q=85&w=800`
    
    return {
      src: optimizedSrc,
      alt: generateAltText(vehiculo, index),
      title: generateImageTitle(vehiculo, index),
      loading: index === 0 ? 'eager' : 'lazy',
      fetchpriority: index === 0 ? 'high' : 'auto'
    }
  }

  // Función para generar structured data para imágenes
  const generateImageStructuredData = (vehiculo, images = []) => {
    if (!vehiculo || !images.length) return null

    return {
      "@context": "https://schema.org",
      "@type": "ImageGallery", 
      "name": `Galería de fotos - ${vehiculo.marca?.nombre} ${vehiculo.modelo?.nombre} ${vehiculo.año}`,
      "description": `Fotos del ${vehiculo.marca?.nombre} ${vehiculo.modelo?.nombre} ${vehiculo.año} usado disponible en ${vehiculo.comuna?.nombre || 'Chile'}`,
      "image": images.map((img, index) => ({
        "@type": "ImageObject",
        "contentUrl": img.src || img,
        "name": generateImageTitle(vehiculo, index),
        "description": generateAltText(vehiculo, index),
        "width": "800",
        "height": "600",
        "encodingFormat": "image/jpeg"
      }))
    }
  }

  // Función para generar meta tags Open Graph para imágenes
  const generateImageMetaTags = (vehiculo, primaryImage) => {
    if (!primaryImage || !vehiculo) return []

    const imageSrc = primaryImage.src || primaryImage
    const imageAlt = generateAltText(vehiculo, 0)
    
    return [
      { property: 'og:image', content: imageSrc },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:image:width', content: '800' },
      { property: 'og:image:height', content: '600' },
      { property: 'og:image:type', content: 'image/jpeg' },
      { name: 'twitter:image', content: imageSrc },
      { name: 'twitter:image:alt', content: imageAlt }
    ]
  }

  // Función para generar srcset responsivo
  const generateResponsiveSrcset = (baseSrc) => {
    if (!baseSrc || baseSrc.startsWith('data:')) return ''
    
    const baseUrl = baseSrc.split('?')[0]
    const params = baseSrc.includes('?') ? '&' : '?'
    
    return [
      `${baseUrl}${params}w=400&q=80 400w`,
      `${baseUrl}${params}w=600&q=85 600w`, 
      `${baseUrl}${params}w=800&q=85 800w`,
      `${baseUrl}${params}w=1200&q=90 1200w`
    ].join(', ')
  }

  // Función para generar sizes attribute
  const generateSizesAttribute = (imageType = 'default') => {
    const sizeConfigs = {
      hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw',
      gallery: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
      thumbnail: '(max-width: 768px) 25vw, 20vw',
      default: '(max-width: 768px) 100vw, 80vw'
    }
    
    return sizeConfigs[imageType] || sizeConfigs.default
  }

  // Función para validar y limpiar URLs de imágenes
  const validateImageUrl = (url) => {
    if (!url) return null
    
    // Verificar que sea una URL válida
    try {
      if (url.startsWith('http')) {
        new URL(url)
        return url
      }
      
      // Para rutas relativas, asegurar que empiecen con /
      return url.startsWith('/') ? url : `/${url}`
    } catch (error) {
      console.warn('URL de imagen inválida:', url)
      return null
    }
  }

  // Función para generar imagen placeholder
  const generatePlaceholderImage = (vehiculo, width = 800, height = 600) => {
    const marca = vehiculo?.marca?.nombre || 'Auto'
    const modelo = vehiculo?.modelo?.nombre || 'Usado'
    const text = `${marca} ${modelo}`.substring(0, 20)
    
    // Generar URL de placeholder con texto
    return `https://via.placeholder.com/${width}x${height}/f3f4f6/64748b?text=${encodeURIComponent(text)}`
  }

  return {
    generateAltText,
    generateImageFileName,
    generateImageTitle,
    optimizeImageForSEO,
    generateImageStructuredData,
    generateImageMetaTags,
    generateResponsiveSrcset,
    generateSizesAttribute,
    validateImageUrl,
    generatePlaceholderImage
  }
}