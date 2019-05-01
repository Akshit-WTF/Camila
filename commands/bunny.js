const Discord = require("discord.js");
const { get } = require("snekfetch");

exports.run = async (client, message, args) => {
    const { body } = await get("https://api.bunnies.io/v2/loop/random/?media/gif,png");

    const embed = new Discord.RichEmbed()
    embed.setImage(body.media.gif);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};