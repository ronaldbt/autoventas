// backend/middleware/verificarRol.js
const verificarRol = (...rolesPermitidos) => {
    return (req, res, next) => {
      const usuario = req.usuario;
      if (!usuario || !rolesPermitidos.includes(usuario.rol)) {
        return res.status(403).json({ error: 'Acceso denegado. Rol no autorizado.' });
      }
      next();
    };
  };
  
  module.exports = verificarRol;
  