FROM alpine:3.12

WORKDIR /data
VOLUME /data
COPY src .
COPY "node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css" ./css/fontawesome.min.css
COPY "node_modules/@fortawesome/fontawesome-free/css/brands.min.css" ./css/brands.min.css
COPY "node_modules/@fortawesome/fontawesome-free/webfonts" ./

CMD tail -f /dev/null
