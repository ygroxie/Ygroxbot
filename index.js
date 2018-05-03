const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TestBot, !help");
    console.log("Le bot a bien, était connecté !");
});

bot.on('message', function (message) {
    if (message.content === '!ping') {
        message.channel.send('pong !')
    }
});

bot.on('message', function (message) {
    if (message.content === '!birthday') {
        message.channel.send('pong !')
        .mentions('user'.id)
    }
});

bot.login(process.env.TOKEN)
