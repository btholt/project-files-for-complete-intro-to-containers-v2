const fastify = require("fastify")({ logger: true });
const { MongoClient } = require("mongodb");
const url = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017";
const dbName = "dockerApp";
const collectionName = "count";

async function start() {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  fastify.get("/", async function handler(request, reply) {
    const count = await collection.countDocuments();
    return { success: true, count };
  });

  fastify.get("/add", async function handler(request, reply) {
    const res = await collection.insertOne({});
    return { acknowledged: res.acknowledged };
  });

  fastify.listen({ port: 8080, host: "0.0.0.0" }, (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
}

start().catch((err) => {
  console.log(err);
  process.exit(1);
});
