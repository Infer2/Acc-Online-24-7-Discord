const { Client, RichPresence } = require('discord.js-infer');
const express = require('express');
const app = express();
const port = 8080;
const client = new Client();

app.get('/', (req, res) => {
  res.send(`
<!doctype html>
<html>
<head>
<title>Made By Infer</title>
</head>
<body>
<h1>uwu</h1>
</body>
</html>
  `);
});

app.listen(port, () => {});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  const status = new RichPresence(client)
    .setApplicationId('367827983903490050')
    .setType('PLAYING')
    .setName('MilkyWayIdle')
    .setAssetsSmallImage('https://cdn.discordapp.com/icons/891160051459436574/0b1be38668e45818b0a2a013b046a6ca.jpg?size=1024&format=webp&width=0&height=256') 
    .setPlatform('ps5')
    .addButton('Play', 'https://www.milkywayidle.com/?ref=109316');

  client.user.setPresence({ activities: [status] });
});

client.login(process.env.token);
