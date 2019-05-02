exports.run = async (client, message, args) => {
    if (message.author.id !== client.config.owner) return message.channel.send("You're missing the permissions to execute this command.");

    if (!args || args.size < 1) return message.channel.send("You must provide a command name to reload.");

    const commandName = args[0];
    if (!client.commands.has(commandName)) {
        return message.channel.send("That command does not exist, try again.");
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];
    client.commands.delete(commandName);

    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.channel.send(`The command ${commandName} has been reloaded.`);
};