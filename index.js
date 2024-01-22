var http = require("http");
http.createServer((function(e, t) {
	t.write("I'm alive"), t.end()
})).listen(8080);
const {
	Client: Client
} = require("discord.js-infer"), client = new Client({
	checkUpdate: !1
});
client.on("ready", (() => {
	console.log(`Logged in as ${client.user.tag}`)
})), client.login(process.env.token);
