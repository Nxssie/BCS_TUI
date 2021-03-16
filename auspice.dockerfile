FROM node:12
USER node
WORKDIR /usr/src/app
ENV NPM_CONFIG_PREFIX /home/node/.npm-global
ENV PATH $PATH:/home/node/.npm-global/bin
RUN npm install -g auspice
COPY src/assets/seq-data/set1/ncov.json /usr/src/app/
EXPOSE 4000
ENTRYPOINT ["auspice", "view", "--datasetDir", "/usr/src/app"]