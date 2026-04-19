const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('clientReady', () => {
    console.log(`Conectado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === "!agarroalagordadestarpmientrasmecomounabigmacuwu") {
        message.channel.send("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdThxbGZsaGtsM2Y5Y2Znemx4MDI5Yzd1NDRsOWJvZDVlY2l4MjdsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qmo9T5uI089dkyz3Bd/giphy.gif");
    }

    if (message.content === "!electronicamentevirginjijijija") {
        message.channel.send("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDBkZzc4eG02OWduY2lvYWpqYTdvbDZwMWhxdGFzMjY5OGQ3b2xidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yhp5Vqs7zxdfWGIpzG/giphy.gif");
    }

    if (message.content === "!sin.aseme...sina.tokiseme?..tawami??sinatoki??seme??PAKALA.SINAPAKALA.OIKEESINA") {
        message.channel.send("https://tenor.com/rWVR2e9pNtV.gif");
    }
});

// 🔐 TOKEN SEGURO (desde Railway)
client.login(process.env.TOKEN);
