const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client({
    disableEveryone: true,
    fetchAllMembers: true,
    sync: false
});

client.config = require("./config.js");
client.instance = require("./package.json");
client.api = require("./modules/api.js");
client.commands = new Enmap();

require("./modules/postStats.js");

fs.readdir("./events/", (err, files) => {
    if (err) return undefined;
    files.forEach(file => {
        const event = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        client.config(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return undefined;
    files.forEach(file => {
        if (!file.endsWith(".js")) return undefined;
        const props = require(`./commands/${file}`);
        const commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

client.login(client.config.token);