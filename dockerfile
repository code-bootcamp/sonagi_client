FROM node:14

WORKDIR /F7B3_TEAM02_CLIENT/
COPY . /F7B3_TEAM02_CLIENT/

RUN yarn install
RUN yarn build:ssr
CMD yarn start 
