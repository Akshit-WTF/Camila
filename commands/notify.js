
exports.run = async (client, message, args) => {
    if (message.author.id !== client.config.owner) return message.channel.send("You're missing the permissions to execute this command.");

    const dataMessage = args.join(" ");
    if (!dataMessage) return undefined;
    
    client.users.get("563881718113763329").send(dataMessage);
};
