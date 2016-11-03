cd /var/www/html/
export NODE_CONFIG_DIR=/var/www/html/config/prod
export NODE_ENV=prod
forever stop 0
npm install
forever start -l forever.log -o out.log -e err.log -a ./bin/www
