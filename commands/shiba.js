const Discord = require("discord.js");
const { get } = require("snekfetch");

exports.run = async (client, message, args) => {
    const { body } = await get("http://shibe.online/api/shibes");

    const embed = new Discord.RichEmbed()
    embed.setImage(body[0]);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};