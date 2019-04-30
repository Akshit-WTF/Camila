const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const status = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: "Offline/Invisible"
    };

    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    if (!member) return message.channel.send("Please provide a valid user of this server.");

    let bot;

    if (member.user.bot === true) {
        bot = "Yep"
    } else {
        bot = "Nope"
    }

    const options = {
        timeZone: "America/New_York",
        hour12: true
    }

    const embed = new Discord.RichEmbed()
    embed.setAuthor(member.user.username, member.user.avatarURL);
    embed.addField("Username", `${member.user.username}#${member.user.discriminator}`);
    embed.addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : "**None**"}`);
    embed.addField("Bot", `${bot}`);
    embed.addField("Status", `${status[member.user.presence.status]}`);
    embed.addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "**None**"}`);
    embed.addField("Joined Server", `${member.joinedAt.toLocaleString("en-US", options)}`);
    embed.addField("Created Account", `${member.user.createdAt.toLocaleString("en-US", options)}`);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};