const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    if (!member) return message.channel.send("Please provide a valid user of this server.");

    const embed = new Discord.RichEmbed()
    embed.setTitle("Avatar URL");
    embed.setURL(`${member.user.avatarURL}`);
    embed.setImage(`${member.user.avatarURL}`);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};