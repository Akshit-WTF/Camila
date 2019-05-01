const Discord = require("discord.js");
const { get } = require("snekfetch");

exports.run = async (client, message, args) => {
    const { body } = await get("https://anidiots.guide/panda");

    const embed = new Discord.RichEmbed()
    embed.setImage(body.link);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};