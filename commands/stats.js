const Discord = require("discord.js");
const { version } = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    embed.addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
    embed.addField("Bot Version", `${client.instance.version}`);
    embed.addField("Bot API", `${client.api.version}`);
    embed.addField("Bot Library", `${version}`);
    embed.addField("Commands", `${client.commands.size}`);
    embed.addField("Voice Connections", `${client.voiceConnections.size}`);
    embed.addField("Guilds", `${client.guilds.size.toLocaleString()}`);
    embed.addField("Channels", `${client.channels.size.toLocaleString()}`);
    embed.addField("Users", `${client.users.size.toLocaleString()}`);
    embed.addField("Birthday", `${client.api.birthday}`);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};
