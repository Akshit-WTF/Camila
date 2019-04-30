module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator} and on ${client.guilds.size} guilds.`);
    client.user.setPresence(`${client.users.size} Users`, {
        type: "WATCHING",
        status: "dnd"
    });
};