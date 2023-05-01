"use strict";

const fastify = require("fastify");
const { isMutant } = require("./handlers/mutantsHandler");
const { getStats } = require("./handlers/statsHandler");
function build(opts = {}) {
  const app = fastify(opts);
  app.get("/", (req, res) => {
    res.sendfile("views/index.html");
  });
  app.post("/mutants/", (request, reply) => {
    reply.code(isMutant(request.body.dna) ? 200 : 403).send();
  });
  app.get("/stats", (request, reply) => {
    return getStats();
  });
  app.get("/redis", async (request, reply) => {
    const redis = require("./services/redis");
    await redis();
    return "works";
  });
  return app;
}

module.exports = build;
