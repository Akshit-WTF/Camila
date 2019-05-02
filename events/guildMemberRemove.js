module.exports = async (client, member) => {
    client.user.setStatus("dnd");
    client.user.setActivity(`${client.users.size} Users`, {
        type: "WATCHING"
    });

    const channel = member.guild.channels.find(ch => ch.name === "meet-and-greet");
    if (!channel) return undefined;
    channel.send(`**${member.user.username}** has just left.`).catch(() => null);
};
