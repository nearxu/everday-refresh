cd /usr/local/app/

ll

cd football-news/news

pm2 list

pm2 stop all

pm2 delete all

pm2 start scripts/start.js --name football-news

cd /etc/nginx/conf.d

ll

mv news.conf news.conf.bak

vi news.conf

sudo nginx -t

sudo nginx -s reload