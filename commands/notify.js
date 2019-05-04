
exports.run = async (client, message, args) => {
    if (message.author.id !== client.config.owner) return message.channel.send("You're missing the permissions to execute this command.");

    const dataMessage = args.join(" ");
    if (!dataMessage) return undefined;
    
    client.users.get("171373018285735936").send(dataMessage);
};
