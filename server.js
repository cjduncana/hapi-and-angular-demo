var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.register(require('inert'), function(error) {
    if (error) {
        throw error;
    }

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    });
});

server.start(function(error) {
    if (error) {
        throw error;
    }
    console.log('Server running at: ' + server.info.uri);
});
