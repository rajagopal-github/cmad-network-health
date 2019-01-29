FROM node:current-alpine
WORKDIR /opt/
COPY . .
EXPOSE 3000
RUN npm install
CMD cd /opt/nt-health1 && npm install && npm start
