FROM node:13.12.0-alpine

WORKDIR .

# install app dependencies
COPY package.json .
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./
RUN npm run build

# start app
CMD ["npm", "run", "product"]
