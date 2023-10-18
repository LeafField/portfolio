FROM alpine:latest

WORKDIR /app
RUN apk update && apk add bash nodejs npm
