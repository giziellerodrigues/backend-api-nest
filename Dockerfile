FROM node:12.13-alpine As development

EXPOSE 3000

RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

ENV TYPEORM_CONNECTION=sqlite
ENV TYPEORM_DATABASE=categoria.db
ENV TYPEORM_ENTITIES=src/**/*.entity.ts
ENV TYPEORM_ENTITIES_DIR=src/models
ENV TYPEORM_MIGRATIONS=src/migrations/**/*.ts
ENV TYPEORM_MIGRATIONS_DIR=src/migrations

COPY . .

RUN npm run build

RUN npm run typeorm migration:run

CMD ["node", "dist/main"]