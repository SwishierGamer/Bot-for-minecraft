const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'Appl0tree.aternos.me', // Change this to your server IP
    port: 25565, // Default port for Java Edition
    username: 'JeffTheG'
});

bot.on('chat', (my name is jeff) => {
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
