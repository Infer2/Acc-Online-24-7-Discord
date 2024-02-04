var http = require("http");
http.createServer((function(e, t) {
    t.write("I'm alive"), t.end()
  }))
  .listen(8080);
const {
  Client: Client,
  RichPresence: RichPresence
} = require("discord.js-infer"), client = new Client;
let stars = 340;
client.on("ready", (async () => {
  console.log(`${client.user.username} is ready!`), t = () => {
    stars += Math.floor(5 * Math.random()) + 1;
    const e = new RichPresence(client)
      .setApplicationId("367827983903490050")
      .setType("PLAYING")
      .setURL("https://www.youtube.com/watch?v=5icFcPkVzMg")
      .setName("Mobile Legends")
      .setDetails(`Stars: ${stars}`)
      .setStartTimestamp(Date.now())
      .setAssetsSmallImage(
        "https://media.discordapp.net/attachments/1158477807618379908/1203804045806927903/unnamed.png?ex=65d26ce2&is=65bff7e2&hm=82ec0e0cdd4dd8b6d52ea902384cad4caf020abfcde4febd2c8df26a79217aed&=&format=webp&quality=lossless&width=54&height=54"
        )
      .setAssetsSmallText("Mobile Legends: Bang Bang");
    client.user.setPresence({
      activities: [e]
    })
  }, t(), setInterval(t, Math.floor(48e4 * Math.random()) + 9e5)
})), client.login(process.env.token);
