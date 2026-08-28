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

client.login("MTU0Mjc1NjAzOTU1NDc2ODk1Ng.GIAuv1.ITuT0UCFdH7jjlTzQMK9WK86BzT0TPAONOwfSk");





