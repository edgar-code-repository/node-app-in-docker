FROM node:alpine

RUN mkdir src

COPY ./src ./src
COPY ./package.json .
RUN npm install

CMD ["npm", "start"] 
EXPOSE 4444