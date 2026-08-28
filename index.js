const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildsMessages] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content === 'مرحبا') {
    msg.reply('أهلاً بك!');
  }
});

client.login('MTU0Mjc1NjAzOTU1NDc2ODk1Ng.G9MPT7.wi2EJUCjY6w-lVsHBhD1f-a2qv6pPSy93tBioY');




