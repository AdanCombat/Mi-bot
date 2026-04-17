const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Conectado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === "!agarraralagordadestarpmientrasmecomounabigmacuwu") {
        message.channel.send("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdThxbGZsaGtsM2Y5Y2Znemx4MDI5Yzd1NDRsOWJvZDVlY2l4MjdsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qmo9T5uI089dkyz3Bd/giphy.gif");
    }
});

client.login("MTQ5NDgxNTgwMTY0NjEyMTE0NA.G7Rpqv.OYposuzSNGszoGDcOjlpgX4sK-1jEZIJvXVwik");
