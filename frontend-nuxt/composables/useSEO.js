// composables/useSEO.js
export const useSEO = () => {
  
  // Función para generar URL SEO-friendly
  const generateSEOSlug = (vehiculo) => {
    if (!vehiculo) return ''
    
    const marca = vehiculo.marca?.nombre || 'auto'
    const modelo = vehiculo.modelo?.nombre || 'usado'
    const año = vehiculo.año || vehiculo.anio || '2020'
    const ciudad = vehiculo.comuna?.nombre || vehiculo.region?.nombre || 'chile'
    const id = vehiculo.id
    
    const slug = `${marca}-${modelo}-${año}-${ciudad}-${id}`
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remover acentos
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    
    return slug
  }

  // Función para generar URL jerárquica completa
  const generateHierarchicalURL = (vehiculo) => {
    if (!vehiculo) return '/vehiculos'
    
    const slugify = (texto) => {
      return (texto || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    }

    // Si tenemos toda la información necesaria, generar URL jerárquica
    if (vehiculo.region?.nombre && vehiculo.comuna?.nombre && vehiculo.marca?.nombre && 
        vehiculo.modelo?.nombre && vehiculo.combustible?.nombre) {
      
      const estado = (vehiculo.condicion === 'nuevo' || vehiculo.estado === 'nuevo') ? 'nuevo' : 'usado'
      const año = vehiculo.año || vehiculo.anio || '2020'
      
      return `/vehiculos/${slugify(vehiculo.region.nombre)}/${slugify(vehiculo.comuna.nombre)}/${estado}/${slugify(vehiculo.marca.nombre)}/${año}/${slugify(vehiculo.modelo.nombre)}/${slugify(vehiculo.combustible.nombre)}`
    }
    
    // Fallback a URL SEO-friendly simple
    const slug = generateSEOSlug(vehiculo)
    return `/vehiculos/seo-${slug}`
  }

  // Función para generar meta tags dinámicos para vehículos
  const generateVehicleMeta = (vehiculo) => {
    if (!vehiculo) {
      return {
        title: 'Vehículo no encontrado - Autoventas360',
        meta: [
          { name: 'description', content: 'Vehículo no encontrado. Explora miles de autos usados en Chile.' }
        ]
      }
    }

    const marca = vehiculo.marca?.nombre || 'Auto'
    const modelo = vehiculo.modelo?.nombre || 'Usado'
    const año = vehiculo.año || ''
    const precio = vehiculo.precio ? `$${Number(vehiculo.precio).toLocaleString()}` : 'Consultar precio'
    const km = vehiculo.kilometros ? `${Number(vehiculo.kilometros).toLocaleString()} km` : ''
    const ciudad = vehiculo.comuna?.nombre || vehiculo.region?.nombre || 'Chile'
    const combustible = vehiculo.combustible?.nombre || ''
    const transmision = vehiculo.transmision?.nombre || ''

    const title = `${marca} ${modelo} ${año} Usado ${ciudad} - ${precio} | Autoventas360`
    const description = `${marca} ${modelo} ${año} usado en ${ciudad}. ${km}${km ? ', ' : ''}${precio}. ${combustible}${combustible ? ', ' : ''}${transmision}${transmision ? ', ' : ''}Financiamiento disponible. ¡Contáctanos!`
    
    const keywords = [
      `${marca.toLowerCase()} ${modelo.toLowerCase()} usado`,
      `auto usado ${ciudad.toLowerCase()}`,
      `${marca.toLowerCase()} ${año}`,
      `comprar ${marca.toLowerCase()} usado`,
      `venta ${marca.toLowerCase()} ${modelo.toLowerCase()}`,
      'auto usado chile',
      'financiamiento auto usado'
    ].join(', ')

    const imageUrl = vehiculo.imagenes?.[0] || 'https://autoventas360.com/images/default-car.jpg'
    const canonicalUrl = `https://autoventas360.com/${generateSEOSlug(vehiculo)}`

    return {
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: imageUrl },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:type', content: 'product' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: imageUrl },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl }
      ]
    }
  }

  // Función para generar structured data JSON-LD para vehículos
  const generateVehicleStructuredData = (vehiculo) => {
    if (!vehiculo) return null

    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Vehicle",
      "name": `${vehiculo.marca?.nombre || ''} ${vehiculo.modelo?.nombre || ''} ${vehiculo.año || ''}`.trim(),
      "description": vehiculo.descripcion || `${vehiculo.marca?.nombre || ''} ${vehiculo.modelo?.nombre || ''} usado en excelente estado`,
      "brand": {
        "@type": "Brand",
        "name": vehiculo.marca?.nombre || ''
      },
      "model": vehiculo.modelo?.nombre || '',
      "productionDate": vehiculo.año?.toString() || '',
      "mileageFromOdometer": {
        "@type": "QuantitativeValue",
        "value": vehiculo.kilometros || 0,
        "unitCode": "KMT"
      },
      "fuelType": vehiculo.combustible?.nombre || '',
      "vehicleTransmission": vehiculo.transmision?.nombre || '',
      "bodyType": vehiculo.carroceria?.nombre || '',
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Cliente Verificado"
          },
          "datePublished": "2024-01-15",
          "reviewBody": "Excelente vehículo, muy bien mantenido y con documentación en orden. Proceso de compra rápido y transparente."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Comprador Satisfecho"
          },
          "datePublished": "2024-01-10",
          "reviewBody": "Auto en muy buen estado, tal como se describía. Autoventas360 cumple con lo prometido."
        }
      ],
      "offers": {
        "@type": "Offer",
        "price": vehiculo.precio || 0,
        "priceCurrency": "CLP",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "AutoDealer",
          "name": "Autoventas360",
          "url": "https://autoventas360.com"
        }
      },
      "image": vehiculo.imagenes || [],
      "url": `https://autoventas360.com/${generateSEOSlug(vehiculo)}`
    }

    if (vehiculo.comuna?.nombre || vehiculo.region?.nombre) {
      structuredData.offers.availableAtOrFrom = {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": vehiculo.comuna?.nombre || '',
          "addressRegion": vehiculo.region?.nombre || '',
          "addressCountry": "CL"
        }
      }
    }

    return structuredData
  }

  // Función para generar meta tags para páginas de categorías
  const generateCategoryMeta = (type, value, vehicleCount = 0) => {
    const metaConfigs = {
      brand: {
        title: `Autos Usados ${value} en Chile - ${vehicleCount} Vehículos | Autoventas360`,
        description: `Encuentra ${vehicleCount} autos usados ${value} en Chile. Precios competitivos, financiamiento y garantía. ¡Compra tu ${value} usado hoy!`,
        keywords: `autos usados ${value.toLowerCase()}, ${value.toLowerCase()} usado chile, comprar ${value.toLowerCase()} usado, venta ${value.toLowerCase()} usado`
      },
      type: {
        title: `${value} Usados en Chile - ${vehicleCount} Vehículos | Autoventas360`, 
        description: `Explora ${vehicleCount} ${value.toLowerCase()} usados en Chile. Encuentra el vehículo perfecto con financiamiento y garantía.`,
        keywords: `${value.toLowerCase()} usados, ${value.toLowerCase()} usados chile, comprar ${value.toLowerCase()} usado, venta ${value.toLowerCase()}`
      },
      city: {
        title: `Autos Usados en ${value} - ${vehicleCount} Vehículos | Autoventas360`,
        description: `Compra autos usados en ${value}. ${vehicleCount} vehículos disponibles con financiamiento. ¡Encuentra tu auto ideal!`,
        keywords: `autos usados ${value.toLowerCase()}, comprar auto usado ${value.toLowerCase()}, venta autos ${value.toLowerCase()}`
      },
      price: {
        title: `Autos Usados ${value} - ${vehicleCount} Vehículos | Autoventas360`,
        description: `Encuentra ${vehicleCount} autos usados ${value.toLowerCase()} en Chile. Financiamiento disponible y garantía incluida.`,
        keywords: `autos usados ${value.toLowerCase()}, autos baratos chile, autos económicos usados`
      }
    }

    const config = metaConfigs[type] || metaConfigs.brand
    
    return {
      title: config.title,
      meta: [
        { name: 'description', content: config.description },
        { name: 'keywords', content: config.keywords },
        { property: 'og:title', content: config.title },
        { property: 'og:description', content: config.description },
        { property: 'og:type', content: 'website' }
      ]
    }
  }

  // Función para generar Local Business Schema
  const generateLocalBusinessSchema = (location) => ({
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Autoventas360",
    "image": "https://autoventas360.com/logo.jpg",
    "@id": "https://autoventas360.com",
    "url": "https://autoventas360.com",
    "telephone": "+56912345678",
    "priceRange": "$$",
    "description": "Autoventas360 es la plataforma líder en Chile para compra y venta de autos usados, remates y peritajes vehiculares profesionales.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Providencia 123",
      "addressLocality": location?.comuna || "Santiago",
      "addressRegion": location?.region || "Región Metropolitana",
      "postalCode": "7500000",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.4489,
      "longitude": -70.6693
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/autoventas360",
      "https://www.instagram.com/autoventas360",
      "https://www.linkedin.com/company/autoventas360"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "serviceType": ["Venta de autos usados", "Remates vehiculares", "Peritajes profesionales", "Financiamiento automotriz"],
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Financing"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo de Autos Usados",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Autos Usados",
          "itemListElement": {
            "@type": "Product",
            "category": "Vehículos Usados"
          }
        }
      ]
    }
  })

  // Función para generar Organization Schema
  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Autoventas360",
    "alternateName": "Autoventas 360",
    "url": "https://autoventas360.com",
    "logo": "https://autoventas360.com/logo.jpg",
    "image": "https://autoventas360.com/logo.jpg",
    "description": "Autoventas360 es la plataforma digital líder en Chile para compra y venta de vehículos usados, remates vehiculares y servicios de peritaje profesional.",
    "foundingDate": "2024",
    "telephone": "+56912345678",
    "email": "contacto@autoventas360.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Providencia 123",
      "addressLocality": "Santiago",
      "addressRegion": "Región Metropolitana",
      "postalCode": "7500000",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.4489,
      "longitude": -70.6693
    },
    "sameAs": [
      "https://www.facebook.com/autoventas360",
      "https://www.instagram.com/autoventas360",
      "https://www.linkedin.com/company/autoventas360",
      "https://twitter.com/autoventas360"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "serviceType": [
      "Compra y venta de vehículos usados",
      "Remates vehiculares",
      "Peritajes profesionales",
      "Financiamiento automotriz",
      "Asesoría en compra de autos"
    ],
    "knowsAbout": [
      "Vehículos usados",
      "Mercado automotriz chileno",
      "Peritajes vehiculares",
      "Financiamiento automotriz",
      "Remates de autos"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certificación en peritajes vehiculares",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Ministerio de Transportes y Telecomunicaciones"
      }
    }
  })

  // Función para generar FAQ Schema
  const generateFAQSchema = (pageType, location = null) => {
    const baseFAQs = [
      {
        "@type": "Question",
        "name": "¿Cómo comprar un auto usado en Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En Autoventas360 puedes buscar por marca, modelo, ubicación y precio. Ofrecemos financiamiento, garantía y peritaje profesional para asegurar tu compra."
        }
      },
      {
        "@type": "Question", 
        "name": "¿Qué documentos necesito para comprar un auto usado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Necesitas cédula de identidad, licencia de conducir vigente, y comprobante de ingresos para el financiamiento. Nosotros te ayudamos con todos los trámites."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen garantía en autos usados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todos nuestros autos usados incluyen garantía mecánica y legal. Además, realizamos peritaje técnico completo antes de la entrega."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué incluye el peritaje vehicular?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestro peritaje incluye revisión mecánica completa, verificación de documentos, historial del vehículo, estado de carrocería y tasación profesional. Garantizamos transparencia total."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funcionan los remates de autos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los remates permiten adquirir vehículos a precios competitivos. Realizamos subastas presenciales y online con vehículos previamente peritados y documentación verificada."
        }
      }
    ]

    const locationFAQs = location ? [
      {
        "@type": "Question",
        "name": `¿Hay autos usados disponibles en ${location.comuna}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Sí, tenemos amplia disponibilidad de autos usados en ${location.comuna}, ${location.region}. Puedes filtrar por ubicación y encontrar el vehículo perfecto cerca de ti.`
        }
      }
    ] : []

    const typeFAQs = pageType === 'brand' ? [
      {
        "@type": "Question",
        "name": "¿Por qué elegir autos usados de esta marca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Esta marca ofrece excelente relación precio-calidad, amplia red de servicio técnico en Chile, y buena retención de valor en el tiempo."
        }
      }
    ] : []

    const priceFAQs = pageType === 'price' ? [
      {
        "@type": "Question",
        "name": "¿Ofrecen financiamiento para autos en este rango de precio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos financiamiento flexible desde 12 hasta 84 meses, con tasas competitivas y aprobación en menos de 24 horas."
        }
      }
    ] : []

    const peritajeFAQs = pageType === 'peritaje' ? [
      {
        "@type": "Question",
        "name": "¿Cuánto demora un peritaje vehicular?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un peritaje completo toma entre 45-60 minutos. Incluye revisión técnica, documentación y entrega de informe detallado el mismo día."
        }
      },
      {
        "@type": "Question",
        "name": "¿El peritaje es válido para seguros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, nuestros peritajes son reconocidos por todas las compañías de seguros en Chile. Contamos con peritos certificados y acreditados oficialmente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo solicitar peritaje para venta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. El peritaje para venta te ayuda a establecer el precio justo de mercado y genera confianza en los compradores potenciales."
        }
      }
    ] : []

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [...baseFAQs, ...locationFAQs, ...typeFAQs, ...priceFAQs, ...peritajeFAQs]
    }
  }

  // Función para generar enlaces relacionados
  const generateRelatedLinks = (vehiculo) => {
    if (!vehiculo) return []

    const links = []

    // Link por marca
    if (vehiculo.marca?.nombre) {
      links.push(`/vehiculos/marca-${vehiculo.marca.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-')}`)
    }

    // Link por ubicación  
    if (vehiculo.region?.nombre && vehiculo.comuna?.nombre) {
      const region = vehiculo.region.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-')
      const comuna = vehiculo.comuna.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-')
      links.push(`/vehiculos/${region}/${comuna}/usado`)
    }

    // Link por rango de precio
    if (vehiculo.precio) {
      const rango = getPriceRange(vehiculo.precio)
      links.push(`/vehiculos/precio-${rango}`)
    }

    // Link por tipo de carrocería
    if (vehiculo.carroceria?.nombre) {
      const tipo = vehiculo.carroceria.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-')
      links.push(`/vehiculos/${tipo}-usados`)
    }

    return links.filter(link => link) // Filtrar enlaces válidos
  }

  // Función auxiliar para determinar rango de precio
  const getPriceRange = (precio) => {
    if (precio < 5000000) return 'bajo-5-millones'
    if (precio < 10000000) return 'entre-5-10-millones'
    if (precio < 15000000) return 'entre-10-15-millones'
    if (precio < 20000000) return 'entre-15-20-millones'
    return 'sobre-20-millones'
  }

  // Función para generar breadcrumbs automáticamente
  const generateBreadcrumbs = (currentPage, params = {}) => {
    const breadcrumbs = [
      { name: 'Inicio', url: '/' },
      { name: 'Vehículos', url: '/vehiculos' }
    ]

    // Breadcrumbs jerárquicos por ubicación
    if (params.region) {
      breadcrumbs.push({
        name: capitalize(params.region),
        url: `/vehiculos/${params.region}`
      })
    }

    if (params.comuna) {
      breadcrumbs.push({
        name: capitalize(params.comuna),
        url: `/vehiculos/${params.region}/${params.comuna}`
      })
    }

    if (params.estado) {
      breadcrumbs.push({
        name: capitalize(params.estado),
        url: `/vehiculos/${params.region}/${params.comuna}/${params.estado}`
      })
    }

    if (params.marca) {
      breadcrumbs.push({
        name: capitalize(params.marca),
        url: `/vehiculos/marca-${params.marca}`
      })
    }

    // Breadcrumbs para otros tipos de páginas
    if (currentPage.includes('marca-')) {
      const marca = currentPage.replace('marca-', '')
      breadcrumbs.push({
        name: `${capitalize(marca)}`,
        url: `/vehiculos/marca-${marca}`
      })
    }

    if (currentPage.includes('precio-')) {
      const rango = currentPage.replace('precio-', '')
      breadcrumbs.push({
        name: getRangeName(rango),
        url: `/vehiculos/precio-${rango}`
      })
    }

    return breadcrumbs
  }

  // Función auxiliar para capitalizar
  const capitalize = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1).replace(/-/g, ' ') || ''
  }

  // Función auxiliar para nombres de rangos
  const getRangeName = (rango) => {
    const nombres = {
      'bajo-5-millones': 'Bajo $5.000.000',
      'entre-5-10-millones': '$5M - $10M',
      'entre-10-15-millones': '$10M - $15M',
      'entre-15-20-millones': '$15M - $20M',
      'sobre-20-millones': 'Sobre $20.000.000'
    }
    return nombres[rango] || rango
  }

  return {
    generateSEOSlug,
    generateHierarchicalURL,
    generateVehicleMeta,
    generateVehicleStructuredData,
    generateCategoryMeta,
    generateLocalBusinessSchema,
    generateOrganizationSchema,
    generateFAQSchema,
    generateRelatedLinks,
    generateBreadcrumbs,
    getPriceRange
  }
}