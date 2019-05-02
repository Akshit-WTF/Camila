exports.run = async (client, message, args) => {
    message.delete();

    const dataClap = args.join(" 👏 ");
    if (!dataClap) return message.channel.send("Please supply text in which you'd like me to clapify.");

    message.channel.send(`${dataClap}`);
};