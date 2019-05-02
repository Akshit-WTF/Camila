const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const msg = await message.channel.send("Fetching the bot latency...");

    const embed = new Discord.RichEmbed()
    embed.addField("Message Latency", `${msg.createdTimestamp - message.createdTimestamp} milliseconds`);
    embed.addField("API Latency", `${Math.round(client.ping)} milliseconds`);
    embed.addField("Shard Latency", `${Math.round(client.ping)} milliseconds`);
    embed.setColor("BLACK");
    msg.channel.send({ embed: embed });
};
