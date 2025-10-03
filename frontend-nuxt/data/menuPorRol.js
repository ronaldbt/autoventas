export const menusPorRol = {
    CLIENTE: [
      { label: 'Inicio', icon: 'fas fa-home', route: '/cliente/dashboard' },
      {
        label: 'Vehículos',
        icon: 'fas fa-car',
        children: [
          { label: 'Listado', route: '/vehiculos' },
          { label: 'Mis Autos', route: '/cliente/mis-autos' },
          { label: 'Agregar', route: '/vehiculos/agregar' }
        ]
      },
      {
        label: 'Peritajes',
        icon: 'fas fa-search',
        children: [
          { label: 'Mis Peritajes', route: '/cliente/peritajes' },
          { label: 'Solicitar Nuevo', route: '/cliente/peritajes/solicitar' }
        ]
      },
      {
        label: 'Informes',
        icon: 'fas fa-file-alt',
        children: [
          { label: 'Resumen', route: '/cliente/informes/resumen' },
          { label: 'Historial', route: '/cliente/informes/historial' }
        ]
      },
      { label: 'Mi perfil', icon: 'fas fa-user', route: '/cliente/perfil' }
    ],
  
    CONCESIONARIO: [
      { label: 'Inicio', icon: 'fas fa-home', route: '/concesionario/dashboard' },
      {
        label: 'Vehículos',
        icon: 'fas fa-car',
        children: [
          { label: 'Listado', route: '/vehiculos' },
          { label: 'Agregar', route: '/vehiculos/agregar' }
        ]
      },
      {
        label: 'Informes',
        icon: 'fas fa-file-alt',
        children: [
          { label: 'Ventas', route: '/concesionario/informes/ventas' },
          { label: 'Estadísticas', route: '/concesionario/informes/stats' }
        ]
      },
      { label: 'Leads', icon: 'fas fa-users', route: '/concesionario/leads' },
      { label: 'Vendedores', icon: 'fas fa-user-tie', route: '/concesionario/vendedores' },
      { label: 'Mi perfil', icon: 'fas fa-user', route: '/concesionario/perfil' }
    ],
    AUTOMOTORA: [
      { label: 'Inicio', icon: 'fas fa-home', route: '/automotora/dashboard' },
      { label: 'Mi automotora', icon: 'fas fa-building', route: '/automotora/mi-automotora' },
      {
        label: 'Vehículos',
        icon: 'fas fa-car',
        children: [
          { label: 'Listado', route: '/vehiculos' },
          { label: 'Agregar', route: '/vehiculos/agregar' }
        ]
      },
      {
        label: 'Informes',
        icon: 'fas fa-file-alt',
        children: [
          { label: 'Ventas', route: '/concesionario/informes/ventas' },
          { label: 'Estadísticas', route: '/concesionario/informes/stats' }
        ]
      },
      { label: 'Leads', icon: 'fas fa-users', route: '/concesionario/leads' },
      { label: 'Vendedores', icon: 'fas fa-user-tie', route: '/concesionario/vendedores' },
      { label: 'Perfil', icon: 'fas fa-user', route: '/automotora/perfil' },
      { label: 'Ventas', icon: 'fas fa-dollar-sign', route: '/automotora/ventas' }
    ],
    PERITO: [
      { label: 'Dashboard', icon: 'fas fa-tachometer-alt', route: '/perito/dashboard' },
      { label: 'Solicitudes', icon: 'fas fa-clipboard-list', route: '/perito/solicitudes' },
      { label: 'Peritajes', icon: 'fas fa-file-invoice', route: '/perito/peritajes' },
      { label: 'Nuevo Peritaje', icon: 'fas fa-plus', route: '/perito/nuevo' },
      { label: 'Mi perfil', icon: 'fas fa-user', route: '/perito/perfil' }
    ],
  
    PUBLICISTA: [
      { label: 'Inicio', icon: 'fas fa-chart-bar', route: '/publicista/dashboard' },
      { label: 'Campañas', icon: 'fas fa-bullhorn', route: '/publicista/campanias' },
      { label: 'Estadísticas', icon: 'fas fa-chart-line', route: '/publicista/stats' },
      { label: 'Mi perfil', icon: 'fas fa-user', route: '/publicista/perfil' }
    ],
  
    ADMIN: [
      { label: 'Panel', icon: 'fas fa-tools', route: '/admin/dashboard' },
      { label: 'Usuarios', icon: 'fas fa-users', route: '/admin/usuarios' },
      { label: 'Reportes', icon: 'fas fa-chart-bar', route: '/admin/reportes' },
      { label: 'Remates', icon: 'fas fa-gavel', route: '/admin/remates' },
      { label: 'Configuración', icon: 'fas fa-cog', route: '/admin/configuracion' }
    ]
  }
  