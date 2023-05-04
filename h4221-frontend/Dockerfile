FROM node:lts-alpine
RUN npm install -g @angular/cli@15.2.7
RUN npm install -g serve
WORKDIR /dockerfront
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run build
EXPOSE 4200
# CMD [ "serve", "-s" ,"/dockerfront/dist/h4221-frontend" ]
CMD [ "npm", "start" ]