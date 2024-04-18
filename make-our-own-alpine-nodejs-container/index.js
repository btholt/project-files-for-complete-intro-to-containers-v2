// this is the sample app from fastify.dev

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/", function handler(request, reply) {
  reply.send({ hello: "world" });
});

// Run the server!
fastify.listen({ port: 8080, host: "0.0.0.0" }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
