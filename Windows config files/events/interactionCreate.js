const { MessageEmbed } = require('discord.js');
const { color , name , logall , aks , owner} = require('../config.json');
//for const all thing about embed
module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		  
		  
		const channelid = logall
		const channel = interaction.client.channels.cache.get(channelid)
		const exampleEmbed = new MessageEmbed()


		.setColor(color)
		.setTitle(name)
		.setDescription(`COMMAND LOG`)
		.setThumbnail(aks)
		.addFields(
			{ name: 'USER', value: `${interaction.user.tag}`, inline: true },
			{ name: 'CHANNEL', value: `${interaction.channel.name}`, inline: true },
			{ name: 'GUILD', value: `${interaction.guild}`, inline: true },
			{ name: 'NAME', value: `${interaction.commandName}`, inline: true },

		)
		.setTimestamp()
		.setFooter({ text: 'SEZAR TM | /INVITE'});
	
	channel.send({ embeds: [exampleEmbed] });

	},
};
