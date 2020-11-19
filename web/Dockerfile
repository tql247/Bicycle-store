FROM node:alpine as build


WORKDIR .
COPY . .


RUN yarn
RUN yarn add serve
CMD yarn product
