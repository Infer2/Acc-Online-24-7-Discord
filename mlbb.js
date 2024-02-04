const http = require("http");
const {
  Client: Client,
  RichPresence: RichPresence
} = require("discord.js-infer");

const client = new Client;
let stars = 341;

http.createServer((function(e, t) {
    t.write("I'm alive"), t.end()
  }))
  .listen(8080);

client.on("ready", (async () => {
  console.log(`${client.user.username} is ready!`);
  
  let stars = 336;

  const initialTimestamp = Date.now();

  const detailsText = `Stars: ${stars}`;

  const e = new RichPresence(client)
    .setApplicationId("367827983903490050")
    .setType("PLAYING")
    .setName("Mobile Legends")
    .setDetails(detailsText)
    .setStartTimestamp(initialTimestamp)  // Set the initial startTimestamp
    .setAssetsSmallImage("https://media.discordapp.net/attachments/1158477807618379908/1203806027326165082/246x0w.webp")
    .addButton('Watch', 'https://youtu.be/2yJgwwDcgV8')
    .setAssetsSmallText("Mobile Legends");

  client.user.setPresence({
    activities: [e]
  });

  const t = () => {
    stars += Math.floor(5 * Math.random()) + 1;
    e.setDetails(`Stars: ${stars}`);
    client.user.setPresence({
      activities: [e]
    });
  };

  e.setDetails(`Stars: ${stars}`);
  client.user.setPresence({
    activities: [e]
  });

  setInterval(t, (Math.random() < 0.25 ? Math.floor(12e4 * Math.random()) + 3e5 : Math.floor(22e4 * Math.random()) + 3e5));
})), client.login(process.env.token);
