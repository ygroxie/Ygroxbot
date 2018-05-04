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

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'test');
    member.addRole(role)
})

bot.login(process.env.TOKEN)
