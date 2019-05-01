const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    function checkBots(guild) {
        let botCount = 0;
        guild.members.forEach(member => {
            if (member.user.bot) botCount++;
        });

        return botCount;
    }

    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
            if (member.user.bot) memberCount++;
        });

        return memberCount;
    }

    const embed = new Discord.RichEmbed()
    embed.setTitle("Server Member Count");
    embed.addField("Total Members", `${message.guild.memberCount}`);
    embed.addField("Humans", `${checkMembers(message.guild)}`);
    embed.addField("Bots", `${checkBots(message.guild)}`);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};
