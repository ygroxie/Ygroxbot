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

bot.on('guildMemberAdd', member => {
member.guild.channels.find("name", "général").send(`Bienvenue à toi ${member} sur le serveur de la communauté de GFX !`)
})

bot.on('guildMemberRemove', member => {
    member.guild.channels.find("name", "général").send(`Oh non ! ${member} vient de quitter le serveur !`)
})

bot.login(process.env.TOKEN)
