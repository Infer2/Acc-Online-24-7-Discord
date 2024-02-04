const {
  Client: Client,
  RichPresence: RichPresence
} = require("discord.js-infer"), client = new Client;
let stars = 340;
client.on("ready", (async () => {
  console.log(`${client.user.username} is ready!`);
  const e = await RichPresence.getExternal(client, "367827983903490050",
      "https://play-lh.googleusercontent.com/uWB-6_gXKU86gW8xsaDuuKL8fFPF3KqsRbsTMRnOzvsbd2YJM6dDtqL5XOHhr9AFgDw=s48"
      ),
    t = () => {
      stars += Math.floor(5 * Math.random()) + 1;
      const t = new RichPresence(client)
        .setApplicationId("367827983903490050")
        .setType("PLAYING")
        .setURL("https://www.youtube.com/watch?v=5icFcPkVzMg")
        .setName("Mobile Legends")
        .setDetails(`Stars: ${stars}`)
        .setStartTimestamp(Date.now())
        .setAssetsSmallImage(e[0].external_asset_path)
        .setAssetsSmallText("Mobile Legends: Bang Bang");
      client.user.setPresence({
        activities: [t]
      })
    };
  t(), setInterval(t, Math.floor(48e4 * Math.random()) + 9e5)
})), client.login(process.env.token);
