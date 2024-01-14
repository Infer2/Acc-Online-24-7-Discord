var http = require("http");
http.createServer((function(e, o) {
	o.write("I'm alive"), o.end()
})).listen(8080);
const {
	Client: Client
} = require("discord.js-selfbot-v13"), replace = require("replace-in-file"), client = new Client({
	checkUpdate: !1
});
client.on("ready", (async () => {
	console.log("ready!");
	const e = {
		files: "./node_modules/discord.js-selfbot-v13/src/util/Options.js",
		from: [/os: 'Windows',/, /browser: 'Discord Client',/, /os_version: '10.0.19045',/, /client_version: '1.0.9023',/],
		to: ["os: 'iOS',", "browser: 'Discord iOS',", "os_version: '17.2',", "client_version: '211.0',"]
	};
	try {
		await replace(e), console.log("Options.js modified successfully")
	} catch (e) {
		console.error("Error modifying Options.js:", e)
	}
})), client.login(process.env.token);
