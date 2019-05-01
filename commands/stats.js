const Discord = require("discord.js");
const { version } = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    embed.addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
    embed.addField("Bot Version", `${client.instance.version}`);
    embed.addField("Bot API", `${client.api.settings.version}`);
    embed.addField("Bot Library", `${version}`);
    embed.addField("Guilds", `${client.guilds.size.toLocaleString()}`);
    embed.addField("Channels", `${client.channels.size.toLocaleString()}`);
    embed.addField("Users", `${client.users.size.toLocaleString()}`);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};
