# 🐳 Autoventas360 - Docker Setup

## Configuración Completa con Docker

Este proyecto está completamente dockerizado con PostgreSQL, Backend (Node.js), Frontend (Nuxt 3) y Traefik como reverse proxy.

## 📋 Requisitos Previos

1. **Instalar Docker Desktop**: https://www.docker.com/products/docker-desktop
2. **Verificar instalación**:
   ```bash
   docker --version
   docker compose --version
   ```

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Ejecutar script de setup automático
./scripts/setup.sh dev

# O manualmente:
docker compose up -d
```

### Producción

```bash
# 1. Configurar variables de entorno
cp .env.production .env.prod
# Editar .env.prod con tus valores

# 2. Ejecutar setup de producción
./scripts/setup.sh prod

# O manualmente:
docker compose -f docker-compose.prod.yml up -d --build
```

## 🌐 URLs de Acceso

### Desarrollo
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Traefik Dashboard**: http://localhost:8080
- **PostgreSQL**: localhost:5432

### Producción
- **Frontend**: https://autoventas360.com
- **Backend API**: https://api.autoventas360.com
- **Traefik Dashboard**: https://traefik.autoventas360.com

## 🗄️ Base de Datos

### Acceso directo a PostgreSQL

```bash
# Desarrollo
docker exec -it autoventas-postgres psql -U autoventas_user -d autoventas360

# Producción
docker exec -it autoventas-postgres-prod psql -U autoventas_user -d autoventas360
```

### Migraciones y Seeders

```bash
# Ejecutar migraciones
docker exec autoventas-backend npx sequelize-cli db:migrate

# Ejecutar seeders
docker exec autoventas-backend npx sequelize-cli db:seed:all
```

## 📦 Comandos Útiles

```bash
# Ver logs de todos los servicios
docker compose logs -f

# Ver logs de un servicio específico
docker compose logs -f backend

# Reiniciar un servicio
docker compose restart backend

# Detener todos los servicios
docker compose down

# Detener y eliminar volúmenes (⚠️ BORRA LA BD)
docker compose down -v

# Construir imágenes sin cache
docker compose build --no-cache

# Ver estado de contenedores
docker compose ps
```

## 🔒 Seguridad en Producción

### SSL/TLS
- Traefik maneja automáticamente los certificados SSL con Let's Encrypt
- Redirección automática HTTP → HTTPS

### Variables de Entorno
Configurar en `.env.prod`:

```bash
# Generar contraseña segura para BD
DB_PASSWORD=tu_contraseña_super_segura

# Generar JWT secret
JWT_SECRET=tu_jwt_secret_ultra_seguro

# Configurar dominio
DOMAIN=tu-dominio.com

# Autenticación Traefik Dashboard
TRAEFIK_AUTH=admin:$2y$10$hash_bcrypt_aqui
```

### Generar hash para Traefik:
```bash
echo $(htpasswd -nb admin tu_password) | sed -e s/\\$/\\$\\$/g
```

## 💾 Backups

### Backup Automático
```bash
# Ejecutar backup manual
./scripts/backup.sh

# Los backups se guardan en ./backup/
# Se eliminan automáticamente después de 7 días
```

### Restaurar Backup
```bash
# Desarrollo
gunzip -c backup/autoventas_YYYYMMDD_HHMMSS.sql.gz | docker exec -i autoventas-postgres psql -U autoventas_user -d autoventas360

# Producción
gunzip -c backup/autoventas_YYYYMMDD_HHMMSS.sql.gz | docker exec -i autoventas-postgres-prod psql -U autoventas_user -d autoventas360
```

## 🔧 Personalización

### Variables de Entorno Disponibles

| Variable | Descripción | Desarrollo | Producción |
|----------|-------------|------------|------------|
| `DB_HOST` | Host de BD | postgres | postgres |
| `DB_PORT` | Puerto de BD | 5432 | 5432 |
| `DB_NAME` | Nombre de BD | autoventas360 | autoventas360 |
| `DB_USER` | Usuario de BD | autoventas_user | autoventas_user |
| `DB_PASSWORD` | Contraseña de BD | parol123 | ⚠️ Cambiar |
| `JWT_SECRET` | Secret para JWT | claveultrasecreta | ⚠️ Cambiar |
| `DOMAIN` | Dominio principal | localhost | tu-dominio.com |
| `ACME_EMAIL` | Email para SSL | - | admin@tu-dominio.com |

## 🐛 Solución de Problemas

### Error: "role autoventas_user does not exist"
```bash
# Recrear usuario y BD
docker exec -it autoventas-postgres psql -U postgres -c "CREATE USER autoventas_user WITH PASSWORD 'parol123';"
docker exec -it autoventas-postgres psql -U postgres -c "CREATE DATABASE autoventas360 OWNER autoventas_user;"
```

### Error: Puerto ocupado
```bash
# Cambiar puertos en docker-compose.yml
ports:
  - "3002:3001"  # Backend
  - "3001:3000"  # Frontend
```

### Limpiar completamente Docker
```bash
# ⚠️ ESTO BORRA TODO
docker system prune -a --volumes
```

## 📁 Estructura de Archivos

```
├── docker-compose.yml          # Desarrollo
├── docker-compose.prod.yml     # Producción
├── .env.production             # Template de producción
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── healthcheck.js
├── frontend-nuxt/
│   ├── Dockerfile
│   └── .dockerignore
├── traefik/
│   └── traefik.yml
└── scripts/
    ├── setup.sh               # Setup automático
    └── backup.sh              # Backup de BD
```

## 📞 Soporte

Si tienes problemas con Docker:
1. Verifica que Docker Desktop esté ejecutándose
2. Revisa los logs: `docker compose logs`
3. Reinicia los contenedores: `docker compose restart`
4. En último caso: `docker compose down && docker compose up -d`