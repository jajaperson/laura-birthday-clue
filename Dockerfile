FROM mhart/alpine-node

# Set the default working directory
WORKDIR /public

COPY . .

RUN npm install
