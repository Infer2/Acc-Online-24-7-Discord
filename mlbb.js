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
    
    const detailsText = `Stars: ${stars}`;

    const e = new RichPresence(client)
      .setApplicationId("367827983903490050")
      .setType("PLAYING")
      .setURL("https://www.youtube.com/watch?v=5icFcPkVzMg")
      .setName("Mobile Legends")
      .setDetails(detailsText)  // Update details here
      .setStartTimestamp(Date.now())
      .setAssetsSmallImage("https://media.discordapp.net/attachments/1158477807618379908/1203806027326165082/246x0w.webp")
      .addButton('Watch', 'https://youtu.be/2yJgwwDcgV8')
      .setAssetsSmallText("Mobile Legends");

    client.user.setPresence({
      activities: [e]
    })
  }, t(), setInterval(t, Math.floor(48e4 * Math.random()) + 9e5)
})), client.login(process.env.token);
