# Use the base image for Next.js applications
FROM fleek/next-js:latest

# Remove any existing Node.js and npm binaries
RUN rm -rf /usr/local/bin/node\
           /usr/local/bin/nodejs\
           /usr/local/bin/npm

# Define the Node.js version to be installed
ENV NODE_VERSION=20.13.1

# Download and extract Node.js
RUN wget https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz &&\
    tar -xJf node-v$NODE_VERSION-linux-x64.tar.xz &&\
    mv node-v$NODE_VERSION-linux-x64/bin/* /usr/local/bin/ &&\
    rm -rf node-v$NODE_VERSION-linux-x64 node-v$NODE_VERSION-linux-x64.tar.xz

# Verify the Node.js installation
RUN node -v

# Set the entrypoint script
ENTRYPOINT ["docker-entrypoint.sh"]

# Default command to run Node.js
CMD ["node"]