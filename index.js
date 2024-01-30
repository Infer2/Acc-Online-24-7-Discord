var http = require("http");
http.createServer((function (e, t) {
    t.write("I'm alive"), t.end()
  }))
  .listen(8080);

const { Client } = require("discord.js-infer");
const client = new Client({
  checkUpdate: false
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});
