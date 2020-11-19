FROM node:8-alpine

RUN apk add python3
RUN apk add py3-pip
RUN apk add sqlite
RUN apk add socat

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install
COPY web/package.json .
RUN npm install
RUN pip install fastapi
RUN pip install uvicorn

# Bundle app source
COPY . .

# Exports
EXPOSE 3000
CMD [ "npm", "run", "start", "&", "uvicorn", "main:app", "--host", "localhost" , "--port", "8000"]
