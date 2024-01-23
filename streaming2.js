var http = require("http");
http.createServer((function(e, t) {
	t.write("I'm alive"), t.end()
})).listen(8080);
const {
	Client: Client,
	RichPresence: RichPresence
} = require("discord.js-infer"), client = new Client;
client.on("ready", (async () => {
	console.log(`${client.user.username} is ready!`);
	const e = await RichPresence.getExternal(client, "857843402807967776", "https://media.discordapp.net/attachments/1033549666769449002/1107009612210765955/matches.png"),
		t = (new RichPresence).setType(1).setURL("https://www.youtube.com/watch?v=9SH_iSb3-HU").setDetails("Korepi").setName("Miss u :)").setStartTimestamp(Date.now()).setAssetsSmallText("What.").setAssetsSmallImage(e[0].external_asset_path);
	client.user.setPresence({
		activities: [t]
	})
})), client.login(process.env.token);
