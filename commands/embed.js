const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.delete();
    
    const dataEmbed = args.join(" ");
    if (!dataEmbed) return message.channel.send("Please supply text in which you'd like me to embed.");

    const embed = new Discord.RichEmbed()
    embed.setDescription(`${dataEmbed}`);
    embed.setColor("RANDOM");
    message.channel.send({ embed: embed });
};