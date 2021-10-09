const Discord = require('discord.js');
const client = new Discord.Client();
const ne = require('./new.json');

var pre = ne.prefix;
var yep = ne.prefiix;

client.on('ready', () => {
	console.log(`Logged in as!`);
});

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'hi') {
    message.reply('hi');
  }
});

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === 'hello') {
    message.reply('hi');
  }
});

client.on('message', message => {
  if (message.content.toLocaleLowerCase() === yep + 'how are you') {
    message.channel.send("i'am robot but fine and you how are.");
  }
});

client.on('message', message => {
  if (message.content === '868246178138062858') {
    message.reply('what ?');
  }
});

client.on('message', message => {
  if (message.content === pre + 'avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});

client.on('message', message => {
  if (message.content === pre + 'Invitation') {
    message.reply('https://discord.com/oauth2/authorize?client_id=868246178138062858&permissions=7358470&scope=bot');
  }
});

client.on('message', message => {
  if (message.content === pre + 'Invitation') {
    message.author.send('https://discord.com/oauth2/authorize?client_id=868246178138062858&permissions=7358470&scope=bot');
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('>>kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('>>ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});
client.login("ODY4MjQ2MTc4MTM4MDYyODU4.YPs3RA.R-zaiubjFjQpLKBQUb1H06Ezr_4");
