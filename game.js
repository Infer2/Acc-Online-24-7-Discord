const { Client } = require('discord.js-infer');

const client = new Client();

client.on('ready', async () => {
  client.user.setSamsungActivity('com.ninjakiwi.bloonstd6', 'START');

  setTimeout(() => {
    client.user.setSamsungActivity('com.ninjakiwi.bloonstd6', 'UPDATE');
  }, 30_000);
});

client.login(process.env.token);
