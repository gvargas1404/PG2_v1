const redis = require("redis");

const DB_URL = "192.168.1.92";
const PORT = "6379";

const client = redis.createClient({
  socket: {
    host: DB_URL,
    port: PORT,
  },
});

module.exports = async () => {
  console.log("ejecutando");
  client.on("error", (err) => {
    console.log("hubo un error");
  });
  
  await client.connect();
  await client.set("Prueba", "prueba pruebosa pruebadora prueba");
  console.log(await client.get("Prueba"));
  client.disconnect();
};
