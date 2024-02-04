const http = require("http"),
  {
    Client: Client,
    RichPresence: RichPresence
  } = require("discord.js-infer"),
  client = new Client;
http.createServer((function(e, t) {
    t.write("I'm alive"), t.end()
  }))
  .listen(8080), client.on("ready", (async () => {
    console.log(`${client.user.username} is ready!`);
    let e = 336;
    const t = Date.now(),
      s = `Stars: ${e}`,
      n = new RichPresence(client)
      .setApplicationId("367827983903490050")
      .setType("PLAYING")
      .setName("Mobile Legends")
      .setDetails(s)
      .setStartTimestamp(t)
      .setAssetsSmallImage(
        "https://media.discordapp.net/attachments/1158477807618379908/1203806027326165082/246x0w.webp"
        )
      .addButton("Watch", "https://youtu.be/2yJgwwDcgV8")
      .setAssetsSmallText("Mobile Legends");
    client.user.setPresence({
      activities: [n]
    });
    n.setDetails(`Stars: ${e}`), client.user.setPresence({
      activities: [n]
    }), setInterval((() => {
        e += Math.floor(5 * Math.random()) + 1, n.setDetails(
          `Stars: ${e}`), client.user.setPresence({
          activities: [n]
        })
      }), Math.random() < .25 ? Math.floor(12e4 * Math.random()) + 3e5 :
      Math.floor(22e4 * Math.random()) + 3e5)
  })), client.login(process.env.token);
