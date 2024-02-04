const {
	Client: Client,
	RichPresence: RichPresence
} = require("discord.js-infer"), client = new Client;
let stars = 340;
client.on("ready", (async () => {
	console.log(`${client.user.username} is ready!`);
	const e = () => {
		stars += Math.floor(5 * Math.random()) + 1;
		const e = new RichPresence(client).setApplicationId("367827983903490050").setType("PLAYING").setName("Mobile Legends").setDetails(`Stars: ${stars}`).setStartTimestamp(Date.now()).addButton("Watch", "https://youtu.be/2yJgwwDcgV8");
		client.user.setPresence({
			activities: [e]
		})
	};
	e(), setInterval(e, Math.floor(48e4 * Math.random()) + 9e5)
})), client.login(process.env.token);
