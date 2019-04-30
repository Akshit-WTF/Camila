module.exports = async (client) => {
    console.log("You are being ratelimited, the session is being terminated.");
    client.destroy();
};