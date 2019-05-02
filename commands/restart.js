exports.run = async (client, message, args) => {
    if (message.author.id !== client.config.owner) return message.channel.send("You're missing the permissions to execute this command.");

    message.channel.send("The process is currently restarting, this may take up to 5 minutes to complete.").then(() => {
        require("child_process").exec("pm2 restart 0");
    });
};