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
      precios: {
        title: 'Cuánto Cuesta Peritaje Auto Chile 2024 - Precios Reales | Autoventas360',
        description: 'Descubre cuánto cuesta un peritaje auto en Chile 2024. Precios desde $65.000, calculadora gratuita y tarifas por tipo de inspección.',
        keywords: 'cuanto cuesta peritaje auto chile, precio revisión precompra, valor inspección auto usado, costo peritaje vehicular, tarifa revision mecanica'
      },
      'como-funciona': {
        title: 'Cómo Funciona un Peritaje Vehicular - Guía Completa | Autoventas360',
        description: 'Aprende cómo funciona un peritaje vehicular paso a paso. Proceso completo, documentos necesarios y qué esperar de la evaluación profesional.',
        keywords: 'como funciona peritaje vehicular, proceso peritaje auto, pasos peritaje chile, evaluación vehicular profesional'
      },
      tipos: {
        title: 'Tipos de Peritaje Vehicular - Guía Completa | Autoventas360',
        description: 'Conoce todos los tipos de peritaje vehicular disponibles. Seguros, compra-venta, judicial, tasación. Encuentra el peritaje que necesitas.',
        keywords: 'tipos peritaje vehicular, peritaje seguros, peritaje judicial, peritaje tasación, peritaje compraventa'
      },
      seguros: {
        title: 'Peritaje Vehicular para Seguros - Informes Oficiales | Autoventas360',
        description: 'Peritaje vehicular oficial para seguros. Informes reconocidos por todas las compañías aseguradoras. Peritos certificados y proceso rápido.',
        keywords: 'peritaje vehicular seguros, peritaje auto seguro, informe peritaje oficial, peritaje siniestro'
      },
      'compra-venta': {
        title: 'Peritaje para Compra-Venta de Autos - Evaluación Completa | Autoventas360',
        description: 'Peritaje profesional para compra y venta de autos. Evaluación técnica completa, verificación de documentos y tasación de mercado.',
        keywords: 'peritaje compra auto usado, peritaje venta vehiculo, evaluación auto usado, peritaje tasación'
      },
      judicial: {
        title: 'Peritaje Vehicular Judicial - Peritos Certificados | Autoventas360',
        description: 'Peritaje vehicular judicial con validez legal. Peritos certificados para tribunales, informes periciales y casos legales.',
        keywords: 'peritaje vehicular judicial, perito judicial auto, informe pericial vehicular, peritaje tribunal'
      },
      tasacion: {
        title: 'Tasación Vehicular Profesional - Valor Comercial Real | Autoventas360',
        description: 'Tasación vehicular profesional para determinar valor comercial real. Informes oficiales para bancos, seguros y transacciones.',
        keywords: 'tasación vehicular, valor comercial auto, avalúo vehicular, tasación auto usado'
      },
      'revision-precompra': {
        title: 'Revisión Precompra Auto - Inspección Antes de Comprar | Autoventas360',
        description: 'Revisión precompra auto profesional en Chile. Evita estafas y problemas ocultos. Inspección completa antes de comprar tu auto usado.',
        keywords: 'revisión precompra auto, inspección precompra vehículo, revisión auto antes de comprar, inspección mecánica auto usado'
      },
      'scanner-automotriz': {
        title: 'Scanner Automotriz a Domicilio - Diagnóstico Computarizado | Autoventas360',
        description: 'Scanner automotriz profesional a domicilio. Diagnóstico computarizado completo, detección de fallas y códigos de error.',
        keywords: 'scanner automotriz, scanner automotriz domicilio, diagnóstico computarizado, peritaje a domicilio'
      },
      'verificacion-kilometraje': {
        title: 'Verificación Kilometraje Real - Detectar Odómetro Adulterado | Autoventas360',
        description: 'Verificación profesional de kilometraje real. Detectamos odómetros adulterados y fraudes en la venta de autos usados.',
        keywords: 'verificación kilometraje real, detectar kilometraje adulterado, odómetro manipulado, fraude auto usado'
      },
      'detectar-auto-clonado': {
        title: 'Detectar Auto Clonado - Verificación VIN y Chasis | Autoventas360',
        description: 'Detecta si un auto está clonado con verificación profesional de VIN, chasis y documentos. Evita comprar vehículos robados.',
        keywords: 'detectar auto clonado, verificar VIN auto, auto robado clonado, verificación chasis vehicular'
      },
      'peritaje-auto-electrico': {
        title: 'Peritaje Auto Eléctrico - Inspección Batería y Sistemas EV | Autoventas360',
        description: 'Peritaje especializado en autos eléctricos. Inspección de batería, sistemas EV, autonomía real y tecnología de carga.',
        keywords: 'peritaje auto eléctrico, inspección vehículo híbrido, revisión batería auto eléctrico, diagnóstico EV chile'
      },
      'agendar-peritaje': {
        title: 'Agendar Peritaje Auto - Reserva Online 24/7 | Autoventas360',
        description: 'Agenda tu peritaje auto online las 24 horas. Proceso simple, confirmación inmediata y peritos certificados en toda Chile.',
        keywords: 'agendar peritaje auto, contratar inspección precompra, solicitar peritaje vehicular, reservar revisión auto'
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
        { property: 'og:url', content: `https://autoventas360.com/peritajes/${tipo === 'general' ? '' : tipo}` },
        { property: 'og:image', content: 'https://autoventas360.com/images/peritaje-og.jpg' },
        { name: 'twitter:title', content: config.title },
        { name: 'twitter:description', content: config.description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://autoventas360.com/images/peritaje-twitter.jpg' }
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
      "priceRange": "$59.990",
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

  // Schema para páginas de ciudad específica
  const generateCityPeritajeSchema = (ciudad, region) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://autoventas360.com/peritajes/${ciudad.toLowerCase()}`,
    "name": `Autoventas360 - Peritajes Vehiculares en ${ciudad}`,
    "description": `Servicio profesional de peritaje vehicular en ${ciudad}, ${region}. Peritos certificados, informes oficiales y atención personalizada.`,
    "url": `https://autoventas360.com/peritajes/${ciudad.toLowerCase()}`,
    "telephone": "+56912345678",
    "priceRange": "$50.000 - $200.000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": ciudad,
      "addressRegion": region,
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": getCityCoordinates(ciudad).lat,
      "longitude": getCityCoordinates(ciudad).lng
    },
    "areaServed": {
      "@type": "City",
      "name": ciudad,
      "containedInPlace": {
        "@type": "State",
        "name": region
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Servicios de Peritaje en ${ciudad}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Peritaje a Domicilio",
            "description": `Peritaje vehicular a domicilio en ${ciudad}`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "80000",
            "priceCurrency": "CLP"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Peritaje en Sucursal",
            "description": `Peritaje vehicular en sucursal ${ciudad}`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "65000",
            "priceCurrency": "CLP"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
      "bestRating": "5"
    }
  })

  // Schema para tipo específico de peritaje
  const generateTipoPeritajeSchema = (tipo) => {
    const tipoConfigs = {
      seguros: {
        name: "Peritaje Vehicular para Seguros",
        description: "Evaluación técnica oficial para compañías de seguros, siniestros y reclamos.",
        category: "Insurance Services"
      },
      'compra-venta': {
        name: "Peritaje para Compra-Venta",
        description: "Inspección pre-compra y evaluación para transacciones de vehículos.",
        category: "Automotive Services"
      },
      judicial: {
        name: "Peritaje Vehicular Judicial",
        description: "Peritaje con validez legal para tribunales y procesos judiciales.",
        category: "Legal Services"
      },
      tasacion: {
        name: "Tasación Vehicular",
        description: "Determinación del valor comercial real del vehículo.",
        category: "Appraisal Services"
      }
    }

    const config = tipoConfigs[tipo] || tipoConfigs.seguros

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": config.name,
      "description": config.description,
      "category": config.category,
      "provider": {
        "@type": "AutoDealer",
        "name": "Autoventas360",
        "url": "https://autoventas360.com",
        "logo": "https://autoventas360.com/logo.png"
      },
      "serviceOutput": {
        "@type": "Report",
        "name": "Informe de Peritaje Vehicular",
        "description": "Informe técnico detallado con evaluación completa del vehículo"
      },
      "offers": {
        "@type": "Offer",
        "priceRange": "$59.990",
        "priceCurrency": "CLP",
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString(),
        "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "847",
        "bestRating": "5"
      }
    }
  }

  // Schema para artículos de guía (HowTo)
  const generateGuiaHowToSchema = (title, steps) => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": `Guía paso a paso: ${title}`,
    "image": "https://autoventas360.com/images/guia-peritaje.jpg",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "CLP",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Documentos del vehículo"
      },
      {
        "@type": "HowToSupply", 
        "name": "Permiso de circulación"
      }
    ],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.description,
      "image": step.image || "https://autoventas360.com/images/step-default.jpg"
    }))
  })

  // Función para obtener coordenadas de ciudades principales
  const getCityCoordinates = (ciudad) => {
    const coordinates = {
      'santiago': { lat: -33.4489, lng: -70.6693 },
      'valparaiso': { lat: -33.0472, lng: -71.6127 },
      'concepcion': { lat: -36.8201, lng: -73.0444 },
      'la-serena': { lat: -29.9027, lng: -71.2519 },
      'antofagasta': { lat: -23.6509, lng: -70.3975 },
      'temuco': { lat: -38.7359, lng: -72.5904 },
      'rancagua': { lat: -34.1708, lng: -70.7394 },
      'talca': { lat: -35.4264, lng: -71.6554 },
      'arica': { lat: -18.4783, lng: -70.3126 },
      'puerto-montt': { lat: -41.4693, lng: -72.9424 }
    }
    return coordinates[ciudad] || coordinates.santiago
  }

  // Breadcrumbs Schema
  const generateBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })

  // Organization Schema completo
  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Autoventas360",
    "alternateName": "Autoventas 360",
    "description": "Líder en peritajes vehiculares, compra y venta de autos usados en Chile",
    "url": "https://autoventas360.com",
    "logo": "https://autoventas360.com/logo.png",
    "sameAs": [
      "https://facebook.com/autoventas360",
      "https://instagram.com/autoventas360",
      "https://linkedin.com/company/autoventas360"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+56912345678",
      "contactType": "Customer Service",
      "areaServed": "CL",
      "availableLanguage": "Spanish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "addressRegion": "Región Metropolitana",
      "postalCode": "8320000",
      "addressCountry": "CL"
    }
  })

  // Alias para generatePeritajeMeta para compatibilidad
  const generateKeywordMeta = (tipo = 'general', ubicacion = null) => {
    const config = generatePeritajeMeta(tipo, ubicacion)
    return {
      title: config.meta.find(m => m.property === 'og:title')?.content || config.title,
      description: config.meta.find(m => m.name === 'description')?.content || '',
      keywords: config.meta.find(m => m.name === 'keywords')?.content || ''
    }
  }

  return {
    generatePeritajeMeta,
    generateKeywordMeta,
    generatePeritajeServiceSchema,
    generatePeritajeFAQSchema,
    generatePeritajeLocationMeta,
    generatePeritajeBreadcrumbs,
    getPeritajeKeywords,
    generateCityPeritajeSchema,
    generateTipoPeritajeSchema,
    generateGuiaHowToSchema,
    generateBreadcrumbSchema,
    generateOrganizationSchema,
    getCityCoordinates
  }
}