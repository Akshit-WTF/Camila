module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator} and on ${client.guilds.size} guilds.`);
    client.user.setStatus("dnd");
    client.user.setActivity(`${client.users.size.toLocaleString()} Users`, {
        type: "WATCHING"
    });
};
