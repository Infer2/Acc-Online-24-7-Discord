const { Client } = require('discord.js-infer');
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

client.on('ready', async () => {
  console.log(`${client.user.tag} is ready!`);
  // Check if the token is defined before logging in
  if (!process.env.TOKEN) {
    console.error('Token is not defined.');
    return;
  }
  client.login(process.env.TOKEN); // Assuming TOKEN is the correct env var name
});
