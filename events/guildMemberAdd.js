module.exports = async (client) => {
    client.user.setPresence(`${client.users.size} Users`, {
        type: "WATCHING",
        status: "dnd"
    });
};
