#! /bin/bash
set -o allexport
source .env
set +o allexport 
# Credenciales de Nginx
read -p "Es versión inicial?(y/n)" IS_INIT
if [ "$IS_INIT" = "y" ]; then
envsubst < nginx.conf.init.template > ./nginx-conf/nginx.conf
else
envsubst < nginx.conf.template > ./nginx-conf/nginx.conf
fi
#docker-compose up -d
#docker-compose exec webserver ls -la /etc/letsencrypt/live
#docker-compose up --force-recreate --no-deps certbot

#crontab -e 
