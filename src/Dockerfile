# docker build start

FROM node

RUN mkdir -p /var/app

WORKDIR /var/app

COPY package.json ./

RUN npm install

RUN npm install -g nodemon

EXPOSE 10000

# docker build end

# docker run start
CMD ["nodemon", "backend/index.js"]

# nodemon backend/index.js

# docker run end