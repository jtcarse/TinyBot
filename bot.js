var Discord = require('discord.js');
var client = new Discord.Client();
var auth = require('./auth.json');

client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag + '.');
});

client.on('message', message => {
    if (message.isMentioned(client.user)) {
        var msgList = message.content.split(' ').slice(1,);
        var command = msgList[0];
        var args = msgList.slice(1,);
        console.log(command + ':');
        console.log(args);
    }
});

client.login(auth.token);
