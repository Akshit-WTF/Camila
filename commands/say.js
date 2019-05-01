exports.run = async (client, message, args) => {
    message.delete();
    
    const dataMessage = args.join(" ");
    if (!dataMessage) return message.channel.send("Please supply text in which you'd like me to repeat.");

    message.channel.send(`${dataMessage}`);
};