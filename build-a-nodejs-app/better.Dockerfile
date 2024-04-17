FROM node:20

USER node

WORKDIR /home/node/code

COPY --chown=node:node index.js .

CMD ["node", "index.js"]