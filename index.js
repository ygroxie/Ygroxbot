const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TestBot, !help");
    console.log("Le bot a bien, était connecté !");
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
});

bot.login(process.env.TOKEN)
