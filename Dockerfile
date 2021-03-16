FROM node:current-slim
USER node
WORKDIR /usr/src/app
ENV NPM_CONFIG_PREFIX /home/node/.npm-global
ENV PATH $PATH:/home/node/.npm-global/bin
RUN npm install -g auspice@1.37.5
COPY ncov.json /usr/src/app
EXPOSE 4000
ENTRYPOINT ["auspice", "view", "--datasetDir", "/usr/src/app"]

