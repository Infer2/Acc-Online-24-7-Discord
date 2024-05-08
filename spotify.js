var http = require("http");
http.createServer((function (e, t) {
    t.write("I'm alive"), t.end()
  }))
  .listen(8080);
const {
  Client: Client
  , SpotifyRPC: SpotifyRPC
} = require("discord.js-infer"), client = new Client;
client.on("ready", (async () => {
  console.log(`${client.user.username} is ready!`);
  const e = new SpotifyRPC(client)
    .setAssetsLargeImage("spotify:ab67616d0000b2735c3a80c9de3666c9e9966c92")
    .setAssetsLargeText("Looped By Infer")
    .setState("The Kiffness")
    .setDetails("I go Meow")
    .setStartTimestamp(Date.now())
    .setEndTimestamp(Date.now() + 2484e5)
    .setSongId("0ewurUrBfHTTWGlBurGUNo")
    .setAlbumId("0hASQvKpWjWLjpsKU7igfR");
  client.user.setPresence({
    activities: [e]
  })
})), client.login(process.env.token);
