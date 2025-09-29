// composables/usePeritajeSEO.js
export const usePeritajeSEO = () => {
  
  // Función para generar meta tags específicos para peritajes
  const generatePeritajeMeta = (tipo = 'general', ubicacion = null) => {
    const metaConfigs = {
      general: {
        title: 'Peritaje Vehicular Profesional en Chile | Autoventas360',
        description: 'Peritaje vehicular certificado con peritos profesionales. Evaluación completa, tasación oficial y documentación para seguros. ¡Solicita tu peritaje hoy!',
        keywords: 'peritaje vehicular chile, perito automotriz, tasación vehicular, peritaje seguros, evaluación auto, peritaje profesional'
      },
      solicitar: {
        title: 'Solicitar Peritaje Vehicular - Peritos Certificados | Autoventas360',
        description: 'Solicita tu peritaje vehicular con peritos certificados. Proceso rápido, informe detallado y validez oficial para seguros y trámites legales.',
        keywords: 'solicitar peritaje vehicular, perito certificado chile, peritaje auto seguro, tasación vehicular oficial'
      },
      precio: {
        title: 'Precio Peritaje Vehicular 2024 - Tarifas Oficiales | Autoventas360',
        description: 'Conoce los precios de peritaje vehicular 2024. Tarifas competitivas, peritos certificados y informes oficiales. Cotiza tu peritaje gratis.',
        keywords: 'precio peritaje vehicular 2024, tarifa peritaje auto, costo peritaje chile, peritaje vehicular barato'
      },
      seguros: {
        title: 'Peritaje Vehicular para Seguros - Informes Oficiales | Autoventas360',
        description: 'Peritaje vehicular oficial para seguros. Informes reconocidos por todas las compañías aseguradoras. Peritos certificados y proceso rápido.',
        keywords: 'peritaje vehicular seguros, peritaje auto seguro, informe peritaje oficial, peritaje siniestro'
      },
      compraventa: {
        title: 'Peritaje para Compra-Venta de Autos - Evaluación Completa | Autoventas360',
        description: 'Peritaje profesional para compra y venta de autos. Evaluación técnica completa, verificación de documentos y tasación de mercado.',
        keywords: 'peritaje compra auto usado, peritaje venta vehiculo, evaluación auto usado, peritaje tasación'
      }
    }

    const config = metaConfigs[tipo] || metaConfigs.general
    const locationSuffix = ubicacion ? ` en ${ubicacion}` : ' en Chile'
    
    return {
      title: config.title.replace(' en Chile', locationSuffix),
      meta: [
        { name: 'description', content: config.description },
        { name: 'keywords', content: config.keywords },
        { property: 'og:title', content: config.title },
        { property: 'og:description', content: config.description },
        { property: 'og:type', content: 'service' },
        { name: 'twitter:title', content: config.title },
        { name: 'twitter:description', content: config.description },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  }

  // Función para generar structured data para servicios de peritaje
  const generatePeritajeServiceSchema = (ubicacion = null) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Peritaje Vehicular Profesional",
    "name": "Peritaje Vehicular Autoventas360",
    "description": "Servicio profesional de peritaje vehicular con peritos certificados. Evaluación técnica completa, tasación oficial y documentación para seguros y trámites legales.",
    "provider": {
      "@type": "AutoDealer",
      "name": "Autoventas360",
      "url": "https://autoventas360.com",
      "telephone": "+56912345678",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": ubicacion || "Santiago",
        "addressRegion": "Región Metropolitana",
        "addressCountry": "CL"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://autoventas360.com/peritajes",
      "serviceName": "Solicitud Online de Peritaje"
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "$50.000 - $150.000",
      "priceCurrency": "CLP",
      "availability": "https://schema.org/InStock"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Peritaje",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Peritaje para Seguros",
            "description": "Evaluación técnica oficial para compañías de seguros"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Peritaje para Compra-Venta",
            "description": "Evaluación completa para transacciones de vehículos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tasación Vehicular",
            "description": "Determinación del valor comercial del vehículo"
          }
        }
      ]
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
          "name": "Cliente Satisfecho"
        },
        "datePublished": "2024-01-20",
        "reviewBody": "Excelente servicio de peritaje. Muy profesional, detallado y rápido. El informe fue aceptado sin problemas por mi seguro."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
      "bestRating": "5"
    }
  })

  // Función para generar FAQ específico para peritajes
  const generatePeritajeFAQSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es un peritaje vehicular?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un peritaje vehicular es una evaluación técnica profesional que determina el estado, condición y valor comercial de un vehículo. Es realizado por peritos certificados y genera un informe oficial."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta un peritaje vehicular en Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo varía entre $50.000 y $150.000 dependiendo del tipo de vehículo y complejidad del peritaje. Ofrecemos cotización gratuita previa evaluación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto demora un peritaje?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un peritaje completo toma entre 45-60 minutos. El informe detallado se entrega el mismo día o máximo 24 horas después de realizada la evaluación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es válido el peritaje para todas las aseguradoras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, nuestros peritajes son reconocidos por todas las compañías de seguros en Chile. Contamos con peritos certificados y acreditados oficialmente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué documentos necesito para el peritaje?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Necesitas permiso de circulación vigente, cédula de identidad del propietario, y en caso de seguros, el formulario de la aseguradora. Te asesoramos con todos los documentos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo solicitar peritaje a domicilio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos servicio de peritaje a domicilio en la Región Metropolitana y principales ciudades de Chile. Consulta disponibilidad en tu zona."
        }
      },
      {
        "@type": "Question",
        "name": "¿El peritaje incluye revisión mecánica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, incluye revisión mecánica completa: motor, transmisión, frenos, suspensión, sistemas eléctricos, estado de neumáticos y carrocería."
        }
      },
      {
        "@type": "Question",
        "name": "¿Sirve el peritaje para importación de vehículos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, realizamos peritajes específicos para importación y nacionalización de vehículos, cumpliendo con todos los requisitos legales de aduana y servicio de aduanas."
        }
      }
    ]
  })

  // Función para generar meta tags por ubicación específica
  const generatePeritajeLocationMeta = (ciudad, region) => {
    const title = `Peritaje Vehicular en ${ciudad} - Peritos Certificados | Autoventas360`
    const description = `Peritaje vehicular profesional en ${ciudad}, ${region}. Peritos certificados, servicio a domicilio disponible. Informes oficiales para seguros y trámites.`
    const keywords = `peritaje vehicular ${ciudad.toLowerCase()}, perito automotriz ${ciudad.toLowerCase()}, tasación auto ${ciudad.toLowerCase()}, peritaje ${region.toLowerCase()}`

    return {
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'service' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description }
      ]
    }
  }

  // Función para generar breadcrumbs específicos de peritajes
  const generatePeritajeBreadcrumbs = (pageType, params = {}) => {
    const breadcrumbs = [
      { name: 'Inicio', url: '/' },
      { name: 'Peritajes', url: '/peritajes' }
    ]

    switch (pageType) {
      case 'solicitar':
        breadcrumbs.push({ name: 'Solicitar Peritaje', url: '/peritajes/solicitar' })
        break
      case 'precios':
        breadcrumbs.push({ name: 'Precios', url: '/peritajes/precios' })
        break
      case 'ubicacion':
        if (params.ciudad) {
          breadcrumbs.push({ 
            name: `Peritajes en ${params.ciudad}`, 
            url: `/peritajes/${params.ciudad.toLowerCase().replace(/\s+/g, '-')}` 
          })
        }
        break
      case 'tipo':
        if (params.tipo) {
          breadcrumbs.push({ 
            name: `Peritaje ${params.tipo}`, 
            url: `/peritajes/${params.tipo.toLowerCase().replace(/\s+/g, '-')}` 
          })
        }
        break
    }

    return breadcrumbs
  }

  // Keywords específicas para peritajes por intención de búsqueda
  const getPeritajeKeywords = (intention = 'general') => {
    const keywordSets = {
      general: [
        'peritaje vehicular chile',
        'perito automotriz',
        'tasación vehicular',
        'evaluación auto',
        'peritaje profesional'
      ],
      precio: [
        'precio peritaje vehicular',
        'costo peritaje auto',
        'tarifa peritaje chile',
        'cuanto cuesta peritaje',
        'peritaje vehicular barato'
      ],
      seguros: [
        'peritaje vehicular seguros',
        'peritaje auto seguro',
        'informe peritaje siniestro',
        'peritaje compañía seguros',
        'evaluación daños vehicular'
      ],
      compraventa: [
        'peritaje compra auto',
        'peritaje venta vehiculo',
        'evaluación auto usado',
        'peritaje tasación mercado',
        'peritaje pre compra'
      ],
      legal: [
        'peritaje vehicular legal',
        'peritaje judicial',
        'peritaje pericial',
        'peritaje tribunal',
        'informe pericial auto'
      ]
    }

    return keywordSets[intention] || keywordSets.general
  }

  return {
    generatePeritajeMeta,
    generatePeritajeServiceSchema,
    generatePeritajeFAQSchema,
    generatePeritajeLocationMeta,
    generatePeritajeBreadcrumbs,
    getPeritajeKeywords
  }
}