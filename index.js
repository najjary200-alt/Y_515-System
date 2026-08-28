
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

client.login("MTU0Mjc1NjAzOTU1NDc2ODk1Ng.Gk_UwM.Rye88kc7pLbkl6B0ibSjrqPLAltSxP09hH3At4");





