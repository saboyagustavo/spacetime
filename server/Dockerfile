FROM node

WORKDIR /usr/app

RUN npm init -y && \
    npm i typescript -D \
    npm i @types/node -D \
    npm i tsx -D \
    npm i fastify && \
    #npm i prisma typescript ts-node @types/node --save-dev && \
    #npm i @prisma/client

COPY package.json ./
#COPY .env ./

RUN npm install

COPY . .

#RUN npm run build
#WORKDIR ./dist

EXPOSE 3333

CMD ["npm", "run dev"]