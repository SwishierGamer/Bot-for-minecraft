const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'your.minecraftserver.com', // Change this to your server IP
    port: 25565, // Default port for Java Edition
    username: 'YourBotUsername'
});

bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    if (message === 'hello') {
        bot.chat(`Hello, ${username}!`);
    }
});

bot.on('spawn', () => {
    console.log('Bot has joined the server!');
});

bot.on('error', err => console.log(`Error: ${err}`));
bot.on('end', () => console.log('Bot disconnected.'));
