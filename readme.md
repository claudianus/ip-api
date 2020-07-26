# Download repo on the server

    $ git clone https://github.com/claudianus/ip-api.git
    $ cd ip-api

# Use Docker to run the dockerized app

    $ docker built -t ip-api .
    $ docker run -d -p 80:3333 ip-api

# or Use PM2 to run the app as a clusterd background service

    $ NODE_ENV=production pm2 start -i max src/app.js --name ip-api -- --PORT 3333

# or Use Caprover on your local machine for deployment to your caprover installed server

    $ caprover deploy
