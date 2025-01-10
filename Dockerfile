FROM node:22
WORKDIR /app

COPY . /app

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]