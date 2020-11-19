FROM node:8-alpine

RUN apk add python3
RUN apk add py3-pip
RUN apk add sqlite
RUN apk add socat
RUN apk update && apk add bash

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install
RUN mkdir web
COPY web/package.json ./web/
RUN cd web && npm install

RUN npm install react-scripts@3.4.1 -g --silent


RUN pip3 install fastapi
RUN pip3 install uvicorn

# Bundle app source
COPY . .

# Exports
EXPOSE 3000
EXPOSE 9000
RUN ["chmod", "777", "/usr/src/app/run.sh"]
ENTRYPOINT ["sh", "/usr/src/app/run.sh"]


