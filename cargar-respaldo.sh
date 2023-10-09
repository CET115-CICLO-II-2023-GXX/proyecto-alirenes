#! /bin/bash
set -o allexport
source .env
set +o allexport 
#current_time=$(date +'%Y-%d-%m-%H-%M-%S')
#backup_name=$(echo "respaldo_mysql_${MYSQL_WORDPRESS_DATABASE_NAME}_${current_time%?}.sql")
mkdir -p $MYSQL_BACKUP_DIR
printf "%sSelecciona uno de los siguientes archivos de respaldo para cargar a la base de datos:\n"
ls -1 $MYSQL_BACKUP_DIR
read -p "Respaldo de Datos:" BACKUP_FILE
FILE="${MYSQL_BACKUP_DIR}/${BACKUP_FILE}"
echo $FILE
if [ -f "$FILE" ]; then
    #docker exec db /usr/bin/mysqldump -u root --password=$MYSQL_ROOT_PASSWORD $MYSQL_WORDPRESS_DATABASE_NAME > $(echo "${MYSQL_BACKUP_DIR}/${backup_name}")
    # Comando para cargar el respaldo de datos
    docker exec -i db sh -c 'exec mysql -uroot -p"${MYSQL_ROOT_PASSWORD}"' < $FILE
    #cat $FILE | docker exec -i db /usr/bin/mysql -u root --password=$MYSQL_ROOT_PASSWORD $MYSQL_WORDPRESS_DATABASE_NAME
    printf "%s=> Se cargó el respaldo de datos.\nBase de datos: ${MYSQL_WORDPRESS_DATABASE_NAME}.\nRespaldo de base de datos: ${FILE}\n "
else 
    echo "El respaldo de datos $FILE no existe."
fi
