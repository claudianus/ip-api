const fastify = require("fastify")({
  trustProxy: true,
  logger: process.env.NODE_ENV !== "production",
});

fastify.get(
  "/",
  {
    schema: {
      response: {
        200: { type: "string" },
      },
    },
  },
  async (request) => {
    return request.ip;
  }
);

fastify.get(
  "/json",
  {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            ip: { type: "string" },
          },
        },
      },
    },
  },
  async (request) => {
    return { ip: request.ip };
  }
);

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3333, "0.0.0.0");
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
