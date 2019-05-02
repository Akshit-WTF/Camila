exports.run = async (client, message, args) => {
    if (message.author.id !== client.config.owner) {
        require("child_process").exec("pm2 restart 0");
    } else {
        return message.channel.send("You're missing the permissions to execute this command.");
    }
};