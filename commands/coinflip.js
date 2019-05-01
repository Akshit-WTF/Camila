exports.run = async (client, message, args) => {
    message.channel.send(`You flipped a coin and it landed on ${Math.random() > 0.5 ? "heads" : "tails"}.`);
};