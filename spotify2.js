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
    .setAssetsLargeImage("spotify:ab67706c0000da8428a9bb8c3ec261e9e540dbb6")
    .setAssetsLargeText("Looped By Infer")
    .setState("Po Po")
    .setDetails("Chit Phu Khk Thamya")
    .setStartTimestamp(Date.now())
    .setEndTimestamp(Date.now() + 2484e5)
    .setSongId("3RaCNko0YpkkFIcargKbu3")
    .setAlbumId("1mebAKedyDROPwmIvokw0a");
  client.user.setPresence({
    activities: [e]
  })
})), client.login(process.env.token);
