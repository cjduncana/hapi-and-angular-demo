var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        return reply('Test Server');
    }
});

server.start(function(error) {
    if (error) {
        throw error;
    }
    console.log('Server running at: ' + server.info.uri);
});
