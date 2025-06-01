export const menusPorRol = {
    CLIENTE: [
      { label: 'Inicio', icon: '🏠', route: '/cliente/dashboard' },
      {
        label: 'Vehículos',
        icon: '🚗',
        children: [
          { label: 'Listado', route: '/vehiculos' },
          { label: 'Agregar', route: '/vehiculos/agregar' }
        ]
      },
      {
        label: 'Informes',
        icon: '📄',
        children: [
          { label: 'Resumen', route: '/cliente/informes/resumen' },
          { label: 'Historial', route: '/cliente/informes/historial' }
        ]
      },
      { label: 'Mi perfil', icon: '👤', route: '/cliente/perfil' }
    ],
  
    CONCESIONARIO: [
      { label: 'Inicio', icon: '🏠', route: '/concesionario/dashboard' },
      {
        label: 'Vehículos',
        icon: '🚗',
        children: [
          { label: 'Listado', route: '/vehiculos' },
          { label: 'Agregar', route: '/vehiculos/agregar' }
        ]
      },
      {
        label: 'Informes',
        icon: '📄',
        children: [
          { label: 'Ventas', route: '/concesionario/informes/ventas' },
          { label: 'Estadísticas', route: '/concesionario/informes/stats' }
        ]
      },
      { label: 'Leads', icon: '👥', route: '/concesionario/leads' },
      { label: 'Vendedores', icon: '🧑‍💼', route: '/concesionario/vendedores' },
      { label: 'Mi perfil', icon: '👤', route: '/concesionario/perfil' }
    ],
    AUTOMOTORA: [
      { label: 'Inicio', icon: '🏠', route: '/automotora/dashboard' },
      { label: 'Mi automotora', icon: '🏢', route: '/automotora/mi-automotora' },
      { label: 'Perfil', icon: '👤', route: '/automotora/perfil' },
      { label: 'Ventas', icon: '💰', route: '/automotora/ventas' }
    ],
    PERITO: [
      { label: 'Dashboard', icon: '📋', route: '/perito/index' },
      { label: 'Peritajes', icon: '🧾', route: '/perito/peritajes' },
      { label: 'Nuevo Peritaje', icon: '➕', route: '/perito/nuevo' },
      { label: 'Mi perfil', icon: '👤', route: '/perito/perfil' } // futura vista
    ],
  
    PUBLICISTA: [
      { label: 'Inicio', icon: '📊', route: '/publicista/dashboard' },
      { label: 'Campañas', icon: '📢', route: '/publicista/campanias' },
      { label: 'Estadísticas', icon: '📈', route: '/publicista/stats' },
      { label: 'Mi perfil', icon: '👤', route: '/publicista/perfil' }
    ],
  
    ADMIN: [
      { label: 'Panel', icon: '🛠️', route: '/admin' },
      { label: 'Usuarios', icon: '👥', route: '/admin/usuarios' },
      { label: 'Reportes', icon: '📊', route: '/admin/reportes' },
      { label: 'Configuración', icon: '⚙️', route: '/admin/configuracion' }
    ]
  }
  