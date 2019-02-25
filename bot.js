var Discord = require('discord.js');
var client = new Discord.Client();
var auth = require('./auth.json');

client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag + '!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.login(auth.token);
