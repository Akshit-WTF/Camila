const Discord = require("discord.js");

module.exports = async (client, guild) => {
    const embed = new Discord.RichEmbed()
    embed.setTitle("Guild Delete");
    embed.addField("Response", "I have been removed from a guild.");
    embed.addField("Guild Name", `${guild.name} (${guild.id})`);
    embed.setColor("RED");
    client.channels.get("571890862074626078").send({ embed: embed });
  
    client.user.setStatus("dnd");
    client.user.setActivity(`${client.users.size} Users`, {
        type: "WATCHING"
    });
};
