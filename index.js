const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);  
});

client.on('ready', () => {
  client.user.setGame('$help pentru a vedea comenzile mele.')
})

//HELP
client.on("message", msg => {
  if (msg.content === '$help') {
   msg.channel.send('**:white_check_mark: Dm send!**')
    msg.author.send('hey salut asteas comenzile mele :wink: :$invite,$avatar,$say,$ping,$botinfo,$kick,$ban,$pool')
  }
});

//PING
client.on('message', msg => {
  if (msg.content === '$invite') {
    msg.channel.send('invite link; https://discordapp.com/oauth2/authorize?client_id=434761925155487755&scope=bot&permissions=0');
  }
});

//PING
client.on('message', msg => {
  if (msg.content === '$test') {
    msg.channel.send('este bine ma ');
  }
});

//PING
client.on('message', msg => {
  if (msg.content === 'Andrei') {
    msg.channel.send('este bine ma ');
  }
});

//AVATAR
client.on('message', message => {
  if (message.content === '$avatar') {
         message.channel.send(message.author.avatarURL);	 
 
     }
 
});

//SAY
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith("$say"))  {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("âœ° | No Permissions!");	  
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed);
 
     }
 
});

//PING
client.on('message', msg => {
  if (msg.content === '$ping') {
   msg.channel.send(':ping_pong:Your ping is '+ client.ping + 'ms')
  }
});

//BOTINFO
client.on('message', msg => {
  if (msg.content === '$botinfo') {
  msg.channel.send('**Botinfo**\n\ \n\**Fire is in a few discord guilds!**\n\ \n\:tools: Bot created and scripted by ***Andrei#9391*** :black_small_square:\n\ \n\ ');
  msg.channel.send(`**${client.users.size}** users.`);
  msg.channel.send(`**${client.channels.size}** channels.`);
  msg.channel.send(`**${client.guilds.size}** servers.`);
  }
});

//KICK
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('$kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {

        member.kick('Optional reason that will display in the audit logs').then(() => {
          reason: 'They were bad!',
          message.channel.send('**Successfully kicked** ${user.tag}');
        }).catch(err => {
          message.channel.send('**I was unable to kick the member**');
          console.error(err);
        });
      } else {
        message.channel.send('**hat user isn\'t in this guild!**');
      }
    } else {
      message.channel.send('**You didn\'t mention the user to kick!**');
    }
  }
});

//BAN
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('$ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.channel.send('**Successfully banned** ${user.tag}');
        }).catch(err => {
          message.channel.send('**I was unable to ban the member**');
          console.error(err);
        });
      } else {
        message.channel.send('**That user isn\'t in this guild!**');
      }
    } else {
      message.channel.send('**You didn\'t mention the user to ban!**');
    }
  }
});

//RESTART
client.on('message', message => {
    if (message.author.id == '434744215608492032' , '389449007656861696') {
    if (message.content.startsWith('$restart')) {
            resetBot(message.channel);
    }
  }
});

function resetBot(channel) {
    channel.send('**Restarting...**')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

//POOL
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith("$pool"))  {
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)		 		 
    message.channel.sendEmbed(embed);
		 message.react("ðŸ‘")
		 message.react("ðŸ‘Ž")	
 
     }
 
});

//Bot join message
client.on("guildCreate", guild => {
  console.log(`Joined in: ${guild.name} , Owner: ${guild.owner.user.tag}`);
});


client.login('NDM0NzYxOTI1MTU1NDg3NzU1.DyyZCA.guVoTY3BbuckITxIsouwgBBUBy4');
