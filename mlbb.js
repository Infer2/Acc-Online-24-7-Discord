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
    let e = 381;
    const t = Date.now() - 72e5,
      s = new RichPresence(client)
      .setType("PLAYING")
      .setName("Mobile Legends")
      .setStartTimestamp(t)
      .setAssetsSmallImage(
        "https://media.discordapp.net/attachments/1158477807618379908/1203806027326165082/246x0w.webp"
        )
      .addButton("Watch", "https://youtu.be/2yJgwwDcgV8")
      .setAssetsSmallText("Mobile Legends");
    
    function n() {
      const t = Math.random();
      let n = 0;
      if (t < .7 || t < .77 ? n = 1 : t < .85 || (n = -1), 0 !== n) {
        e = Math.max(0, e + n);
        n > 0 ? Math.random() : Math.random();
        s.setDetails(`Stars: ${e}`)
      } else s.setDetails(`Stars: ${e}`);
      client.user.setPresence({
        activities: [s]
      })
    }
    client.user.setPresence({
      activities: [s]
    }), n(), setInterval((() => {
      n()
    }), Math.floor(60 * (10 * Math.random() + 20) * 1e3))
  })), client.login(process.env.token);
