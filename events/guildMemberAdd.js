module.exports = async (client, member) => {
    client.user.setStatus("dnd");
    client.user.setActivity(`${client.users.size.toLocaleString()} Users`, {
        type: "WATCHING"
    });

    const role = member.guild.roles.find(r => r.name === "Supporters");
    if (!role) return undefined;
    member.addRole(role).catch(() => null);

    const channel = member.guild.channels.find(ch => ch.name === "meet-and-greet");
    if (!channel) return undefined;
    channel.send(`**${member.user.username}** has just joined.`).catch(() => null);
};
