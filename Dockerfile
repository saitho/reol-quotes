FROM node:alpine3.12 as builder

WORKDIR /src
COPY src .

RUN npm install
COPY "node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css" ./css/fontawesome.min.css
COPY "node_modules/@fortawesome/fontawesome-free/css/brands.min.css" ./css/brands.min.css
COPY "node_modules/@fortawesome/fontawesome-free/webfonts" ./

FROM alpine:3.12

WORKDIR /var/www
VOLUME /var/www
COPY --from=builder /src .

CMD tail -f /dev/null
