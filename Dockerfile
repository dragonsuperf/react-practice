FROM node:15.3-alpine
USER root
VOLUME /deploy/react-practice
RUN yarn install
COPY ./build-frontend.sh /usr/local/bin
RUN ln -s /usr/local/bin/build-frontend.sh /build-frontend.sh
CMD ["build-frontend.sh"]