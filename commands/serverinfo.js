const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const ownerUsername = message.guild.members.get(message.guild.owner.id).user.username;
    const ownerDiscrim = message.guild.members.get(message.guild.owner.id).user.discriminator;

    const embed = new Discord.RichEmbed()
    embed.setTitle("Server Information");
    embed.setColor("BLACK");
    embed.setThumbnail(message.guild.iconURL);
    embed.addField("Server Owner", `${ownerUsername}#${ownerDiscrim}`);
    embed.addField("Created", `${message.guild.createdAt.toLocaleString("en-US")}`);
    embed.addField("Roles", `${message.guild.roles.size}`);
    embed.addField("Emojis", `${member.guild.emojis.size}`);
    embed.addField("Members", `${message.guild.memberCount}`);
    
    if (message.guild.verificationLevel === 0) {
        embed.addField("Verification Level", "None");
    }

    if (message.guild.verificationLevel === 1) {
        embed.addField("Verification Level", "Low");
    }

    if (message.guild.verificationLevel === 2) {
        embed.addField("Verification Level", "Medium");
    }

    if (message.guild.verificationLevel === 3) {
        embed.addField("Verification Level", "Medium-High");
    }

    if (message.guild.verificationLevel === 4) {
        embed.addField("Verification Level", "High");
    }

    message.channel.send({ embed: embed });
};