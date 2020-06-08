FROM node:alpine

COPY ./src ./src
COPY ./package.json .
RUN npm install

CMD ["npm", "start"] 
EXPOSE 4444