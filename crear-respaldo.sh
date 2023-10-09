#! /bin/bash
set -o allexport
source .env
set +o allexport 
current_time=$(date +'%Y-%d-%m-%H-%M-%S')
backup_name=$(echo "respaldo_mysql_${MYSQL_WORDPRESS_DATABASE_NAME}_${current_time%?}.sql")
mkdir -p $MYSQL_BACKUP_DIR

docker exec db sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > $(echo "${MYSQL_BACKUP_DIR}/${backup_name}")
#docker exec db /usr/bin/mysqldump -u root --password=$MYSQL_ROOT_PASSWORD $MYSQL_WORDPRESS_DATABASE_NAME > $(echo "${MYSQL_BACKUP_DIR}/${backup_name}")
printf "%s=> Se realizó respaldo de datos de ${MYSQL_WORDPRESS_DATABASE_NAME}. \n=> Archivo de Respaldo: ${MYSQL_BACKUP_DIR}/${backup_name}.\n"

