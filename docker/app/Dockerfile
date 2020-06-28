FROM node:12.16.3

RUN userdel node

ARG UID=1000
RUN useradd --uid $UID --create-home app
USER app

WORKDIR /usr/src/project/app

ENV PATH="/usr/src/project/app/node_modules/.bin:${PATH}"

CMD ["npm", "start"]
