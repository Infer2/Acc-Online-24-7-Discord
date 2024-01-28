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
    .setAssetsLargeImage("spotify:ab67616d0000b273bfe215e877f862b83a73d43b")
    .setAssetsLargeText("Looped By Infer")
    .setState("Bunny Phyoe")
    .setDetails("Eain Mat yk Athet")
    .setStartTimestamp(Date.now())
    .setEndTimestamp(Date.now() + 2484e6)
    .setSongId("46D3Luru5sb8ubCysvP3t7")
    .setAlbumId("76VEzdifZ8jbjRRxbSMmUc");
  client.user.setPresence({
    activities: [e]
  })
})), client.login(process.env.token);
