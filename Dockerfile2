FROM node:12.16.1-alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY . .
RUN npm run build --prod
FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/bcs-tui/ /usr/share/nginx/html