FROM node:alpine3.12 as builder

WORKDIR /work
COPY . .

RUN npm install
RUN cp ./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css ./src/css
RUN cp ./node_modules/@fortawesome/fontawesome-free/css/brands.min.css ./src/css
RUN cp ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-* ./src/webfonts

FROM alpine:3.12

WORKDIR /var/www
COPY --from=builder /work/src html

VOLUME /var/www/html

CMD tail -f /dev/null
