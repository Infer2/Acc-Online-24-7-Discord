const { Client } = require('discord.js-infer');

const client = new Client();

client.on('ready', async () => {
  client.user.setSamsungActivity('com.kurogame.wutheringwaves.global', 'START');

  setTimeout(() => {
    client.user.setSamsungActivity('com.kurogame.wutheringwaves.global', 'UPDATE');
  }, 30_000);
});

client.login(process.env.token);
