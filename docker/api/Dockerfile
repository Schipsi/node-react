FROM node:12.16.3

RUN userdel node

ARG UID=1000
RUN useradd --uid $UID --create-home app
USER app

WORKDIR /usr/src/project/api

ENV PATH="/usr/src/project/api/node_modules/.bin:${PATH}"

CMD ["nodemon", "--watch"]
