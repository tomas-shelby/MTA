const {MessageEmbed, Discord} = require('discord.js');

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()

  .setTitle('Ajuda')
  .setTimestamp()
 moduleexports = async (client,msg) ={
 const message = msg.reply(`spawns`);

 message.react('📋')
  .then(()= message.react('📑'))
  .then(()= message.react('📝'))

 const filther = (reaction, user) ={
  return [ , ,].includes(reaction.emoji.name) && user.id == msm.author.id;
 }

 message.awaitReactions(filter, { max: 1, time: 100000, errors: ['time]})
  .then(collected ={
    const reaction = collected.first();
	
	switch(reaction.emoji.name){
	 case '📋':
	  msm.reply(" [Em Preparo] ");

	   case '📑':
	  msm.reply(" [Em Preparo]");

	   case '📝';
      msm.reply(" [Em Preparo]");
	}
	
	message.delete();
	})
	.catch(collected ={
	message.delete();
	})


  .setColor('#000000,')


 message.channel.send(embed)
)