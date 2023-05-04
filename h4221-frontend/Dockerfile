FROM node:alpine
WORKDIR /dockerfront
COPY . .
RUN npm install && npm install -g @angular/cli@15.2.7
RUN npm run build
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
# CMD [ "npm", "start" ]