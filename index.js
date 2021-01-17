const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos


client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on("message", msg => {
  if(msg.content === `<@!${client.user.id}>`)
  msg.channel.send("Oi, se você me mencionou provavelmente quer ajuda, então: Meu prefixo é ! não existe jeito de mudar ele! Se quiser ajuda personalizada digite !server e para ajuda automatica !ajuda . E eu sei uma coisa sobre você... você usa computador pelo menos esta usando agora...") // aqui é onde você vai colocar seu texto que irá aparecer APENAS para PC.
})

client.on("message", msg => {
  if(msg.content === `<@${client.user.id}>`)
  msg.channel.send("Oi, se você me mencionou provavelmente quer ajuda, então: Meu prefixo é ! não existe jeito de mudar ele! Se quiser ajuda personalizada digite !server e para ajuda automatica !help . E eu sei uma coisa sobre você... você usa celular pelo menos esta usando agora...") // aqui é onde você vai colocar seu texto que irá aparecer APENAS para mobile.
})

client.on('ready', async () => {
client.user.setStatus("online")
const activities_list = [
    `Utilize ${config.prefix}help para obter ajuda`,
    `${client.guilds.cache.size} servidores!`,
   `${client.channels.cache.size} canais!`,
   `DONO </𝐒𝐇𝐄𝐋𝐁𝐘>`,
	 `entre no meu server do discord em ${config.prefix}server`,
	  `Utilize ${config.prefix}help`
    ];

 const type_list = [
   "STREAMING",
   "STREAMING",
   "STREAMING",
   "STREAMING",
	 "WATCHING", 
	 "STREAMING"
];
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index], {type: type_list[index], url: "https://www.twitch.tv/hecrix"}); 
  }, 6000);
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token= 




console.log(`estou online verifique meus comando :) `)

///Flw man boa sorte com o bot, qualquer coisa chama eu V0ID não se preocupaaqui não interferre no bot e so um recado que você pode fazer com /// isso 
