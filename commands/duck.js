const Discord = require("discord.js");
const { get } = require("snekfetch");

exports.run = async (client, message, args) => {
    const { body } = await get("https://random-d.uk/api/v1/random?type=gif");

    const embed = new Discord.RichEmbed()
    embed.setImage(body.url);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};