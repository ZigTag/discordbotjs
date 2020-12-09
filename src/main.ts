import * as Discord from 'discord.js';
import * as fs from 'fs';

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author !== client.user) {
        if (msg.content.includes('?')) {
            msg.channel.send(msg.content.replace('?', '.'));
        } else {
            msg.channel.send(`${msg.content}?`);
        }
    }
})

let tokenFile = fs.readFileSync('./secret.txt').toString().trim();

client.login(tokenFile);
