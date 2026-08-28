const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login("MTU0Mjc1NjAzOTU1NDc2ODk1Ng.GVD_zG.U1-i0xRdsLvuSIWS4dP8HY3UN35pLqHfowtLfo");





