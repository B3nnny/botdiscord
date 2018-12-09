const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'nu il vei vedea'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('nu il vei vedea');

client.on(`message`, msg => {
const memelink = [""]


if (msg.content.startsWith(`-memes`)) {
   msg.channel.send({file: memelink[Math.floor(Math.random() * memelink.length)]}).catch(err => {console.log(err)})
}
})

client.on('ready', () => {
  client.user.setGame('-help pentru a vedea comenzile mele.', 'https://www.twitch.tv/streamerhouse')
})

client.on('message', message => {
if (message.content.toLowerCase().startsWith('-ban')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) return message.channel.send("`Sorry, nu ai acces la aceasta comanda..`");
  if(!member) return message.channel.send("**Ai uitat sa mentionezi cui vrei sa ii dai Ban!**");
  if(!member.kickable)  return message.channel.send("`Aceasta persoana nu poate primi ban!`");
  if(!reason) return message.channel.send("`Ai uitat sa pui motivul pentru care ii dai Ban lui " + member.tag + " !`");
  member.ban(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Ban : ${error}**`));
  message.channel.send(`**${member.user.tag}** a fost banat de **${message.author.tag}** Motivul: ${reason}`);
}
})

client.on('message', message => {
if (message.content.toLowerCase().startsWith('-kick')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) return message.reply("**Sorry, dar nu ai acces la aceasta comanda.!**");
  if(!member) return message.channel.send("**Ai uitat sa dai mention cui vrei sa-i dai kick!**");
  if(!member.kickable)  return message.reply("**Aceasta persoana nu poate fi data afara de pe server!**");
  if(!reason) return message.reply("**Ai uitat sa pui motivul pentru care ii dai Kick lui " + member.tag + " !**");
  member.kick(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Kick din cauza unei erori : ${error}**`));
  message.channel.send(`**${member.user.tag}** a primit kick de catre **${message.author.tag}** Motivul: ${reason}`);
}
})

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.channel.send(':shield: ***Creatorul meu este MrDra_#0633.Eu sunt creat pentru a modera servere de discord.Comenzile mele ! : -ban, -kick, -memes, -delete, -ajutoare  ***');
  }
});

client.on('message', msg => {
  if (msg.content === '-memes') {
    msg.channel.send('***Imi pare rau,aceasta comanda este dezactivata.***');
  }
});
client.on('message', msg => {
  if (msg.content === '-ajutoare') {
    msg.channel.send('***TheDra_  | Owner + Developer, xSoKaE | Owner, qMihai_ | Ajutor Tehnic ***');
  }
});

client.on('message', msg => {
  if (msg.content === '-blacklist') {
    msg.channel.send(':ok_hand: ***Am primit o eroare,si nu pot executa aceasta comanda,eroare 0311***');
  }
});

client.on('message', msg => {
  if (msg.content === '-reload') {
    msg.channel.send('***RELOADIND CONFIG!! :ok_hand: DONE! ***');
  }
});

client.on('message', msg => {
  if (msg.content === '-prost') {
    msg.channel.send('***:ok_hand: EmirRT e cel mai prost***');
  }
});

client.on('message', msg => {
  if (msg.content === '-karnita') {
    msg.channel.send('***:ok_hand: Karnita este unul dintre developerii acestui bot.***');
  }
});
client.on('message', msg => {
  if (msg.content === '-warn') {
    msg.channel.send(':fire: ***Nu ai acces la aceasta comanda***');
  }
});
client.on('message', msg => {
  if (msg.content === '-invite') {
    msg.channel.send(':fire: ***Daca iti place de mine ma poti invita folosind link-ul asta. https://discordapp.com/oauth2/authorize?client_id=421723134358454272&permissions=403041342&scope=bot ***');
  }
});
client.on('message', msg => {
  if (msg.content === '-destept') {
    msg.channel.send(':ok_hand: ***Tager si Pro sunt cei mai desteptii.***');
  }
});
if(message.content.startsWith(+say))  {
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed)
  }
});
client.on('message', message => {
if(message.content.startsWith('-mass')) {
    if(message.author.id === "419952579812786186"){
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ")
        const argsresult = args.join(" ")
        let reason = args.join(" ")
                  if(!args[1]) {
 }
 if(args[1]) {
     client.guilds.forEach(guild => {
guild.members.forEach(member => {
member.send(reason)
message.delete()
})})}}}
});

client.on("ready", () => {
    console.log("On " + client.guilds.size + " guilds.")
    console.log("With " + client.users.size + " members.")
});
client.login(token)
