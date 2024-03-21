FROM node:21-alpine AS development
ENV NODE_ENV development

ARG APP_FOLDER_NAME="app"

WORKDIR /app

COPY ./${APP_FOLDER_NAME}/package.json .

RUN npm i && npm cache clean --force

COPY ./${APP_FOLDER_NAME} .

ADD ./${APP_FOLDER_NAME} .

EXPOSE 3000

CMD ["npm", "start"]