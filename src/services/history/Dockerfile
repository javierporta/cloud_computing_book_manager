# docker build start

FROM node

RUN mkdir -p /var/app

RUN mkdir -p /var/app/src

WORKDIR /var/app

COPY package.json ./

RUN npm install

RUN npm install -g nodemon

EXPOSE 10000

# docker build end

# docker run start
CMD ["nodemon", "src/index.js"]

# nodemon backend/index.js

# docker run end