#!/bin/bash

# Database backup script

BACKUP_DIR="./backup"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="autoventas_${TIMESTAMP}.sql"

echo "📦 Creating database backup..."

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Create backup
docker exec autoventas-postgres-prod pg_dump -U autoventas_user -d autoventas360 > $BACKUP_DIR/$BACKUP_FILE

if [ $? -eq 0 ]; then
    echo "✅ Backup created successfully: $BACKUP_FILE"
    
    # Compress backup
    gzip $BACKUP_DIR/$BACKUP_FILE
    echo "🗜️ Backup compressed: ${BACKUP_FILE}.gz"
    
    # Clean old backups (keep last 7 days)
    find $BACKUP_DIR -name "autoventas_*.sql.gz" -mtime +7 -delete
    echo "🧹 Old backups cleaned"
    
else
    echo "❌ Backup failed"
    exit 1
fi