const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'Appl0tree.aternos.me', // Change this to your server IP
    port: 25565, // Default port for Java Edition
    username: 'JeffTheG'
});

// Make the bot respond to "hello"
bot.on('chat', (username, message) => {
    if (username === bot.username) return; // Prevent bot from responding to itself
    if (message === 'hello') {
        bot.chat(`Hello, ${username}!`);
    }
});

// Make the bot jump every 5 seconds
bot.on('spawn', () => {
    console.log('Bot has joined the server!');
    setInterval(() => {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500); // Jump for 0.5 seconds
    }, 5000);
});

// Error handling
bot.on('error', err => console.log(`Error: ${err}`));
bot.on('end', () => console.log('Bot disconnected.'));
