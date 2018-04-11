'use strict';

const Hapi = require('hapi');

const options = {
    port:9999,
    host:'localhost',
}

const server = new Hapi.server(options);

server.route({
    path:'/',
    method:'GET',
    options:{
        handler: async (request,h) => {
            return {greetings:'hello world'};
        }
    }
});

const start = async () => {
    try {
        await server.start();
        console.info(`endpoints listening on ${server.info.uri}`);
    } catch(err) {
        console.err(err);
    }
}


const hapi_endpoints = {
    start:start,
}

module.exports = hapi_endpoints;