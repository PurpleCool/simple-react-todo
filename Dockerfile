# build-stage
FROM node:17-alpine3.12 AS builder

# set working directory
WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package*.json ./
# RUN npm install \
# 	&& mkdir node_modules/.cache && chmod -R 777 node_modules/.cache \
# 	&& mkdir node_modules/.cache/.eslintcache && chmod -R 777 node_modules/.cache/.eslintcache

# # add app
# COPY . ./

COPY --chown=node:node package.json .
RUN npm install

COPY --chown=node:node . .
USER node

# start app
CMD ["npm", "run", "start"]    