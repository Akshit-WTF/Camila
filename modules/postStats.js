module.exports = async (client) => {
    const Boats = require("boats.js");
    const api = new Boats(client.config.boatsToken);

    api.postStats(client.guilds.size, client.user.id);
    setInterval(() => {
        api.postStats(client.guilds.size, client.user.id);
    }, 10000);
};