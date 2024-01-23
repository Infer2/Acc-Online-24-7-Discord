const {
	Client,
	RichPresence
} = require('discord.js-infer');
const client = new Client();

client.on('ready', async () => {
	console.log(`${client.user.username} is ready!`);
	const getExtendURL = await RichPresence.getExternal(
		client,
		'857843402807967776',
		'https://media.discordapp.net/attachments/1033549666769449002/1107009612210765955/matches.png',
	);

	const status = new RichPresence()
		.setType(1)
		.setURL('https://www.youtube.com/watch?v=9SH_iSb3-HU')
		.setName('Korepi')
		.setStartTimestamp(Date.now())
    .setAssetsSmallText('What.')
		.setAssetsSmallImage(getExtendURL[0].external_asset_path);
	client.user.setPresence({
		activities: [status]
	});
});
client.login(process.env.token)
