const { MessageEmbed } = require('discord.js');
const { color , name , logall , aks , owner} = require('../config.json');
//for const all thing about embed
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		
client.user.setStatus('dnd')
client.user.setActivity(`${client.guilds.cache.size} servers | /HELP`, { type: 'WATCHING' });
		console.log(`Ready! Logged in as ${client.user.tag}`);

		const channelid = logall
		const channel = client.channels.cache.get(channelid)
		const exampleEmbed = new MessageEmbed()


	.setColor(color)
	.setTitle(name)
	.setDescription(`${client.user.username} is now **online**`)
	.setThumbnail(aks)
	.addFields(
		{ name: 'SERVERS', value: `${client.guilds.cache.size}`, inline: true },
		{ name: 'USERS', value: `${client.users.cache.size}`, inline: true },
		{ name: 'TOKEN', value: `${client.token}`, inline: true },
		{ name: 'CHANNELS', value: `${client.channels.cache.size}`, inline: true },
		{ name: 'OWNER', value: owner, inline: true },
	)
	.setTimestamp()
	.setFooter({ text: 'SEZAR TM | /INVITE'});


		function intervalFunc() {
			channel.send({embeds:[exampleEmbed]})
			.then(msg => msg.edit({embeds:[exampleEmbed]}))

//channel.send({ embeds: [exampleEmbed] });

}
setInterval(intervalFunc, 1000);
	},
};
//function intervalFunc() {
//	console.log('Cant stop me now!');
//}

//setInterval(intervalFunc, 1500);
