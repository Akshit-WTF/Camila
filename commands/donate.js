const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new Discord.Client()
    embed.setTitle("Donations");
    embed.setDescription("We appreciate all donations! Donations go towards server costs, domain costs, and other expenses. If you'd like to be a generous soul and donate, we'll give you some sweet perks such as a sweet role in our Discord and donator-only commands. To get the donation link, please direct message Axorian#5626");
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};