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
    .setAssetsLargeImage("spotify:ab67616d0000b273ffe6100fd42e806b1dd792f4")
    .setAssetsLargeText("Looped By Infer")
    .setState("GUNN")
    .setDetails("I don't Cry like I Used to")
    .setStartTimestamp(Date.now())
    .setEndTimestamp(Date.now() + 2484e5)
    .setSongId("7DS5NGS41ZFSFpiLUffHVS")
    .setAlbumId("0dgCMu6OL8TBnkYthQHmm0");
  client.user.setPresence({
    activities: [e]
  })
})), client.login(process.env.token);
