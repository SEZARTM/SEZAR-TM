const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction } = require('discord.js');
const { color , name , logall , aks , owner} = require('../config.json');
const { MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Display your ping'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);


		

		const exampleEmbed = new MessageEmbed()


		.setColor(color)
		.setTitle(name)
		.setThumbnail(aks)
        .setDescription(`PING : ${Date.now() - interaction.createdTimestamp}ms`)
		.setTimestamp()
		.setFooter({ text: 'SEZAR TM | /INVITE'});
	
		return interaction.reply({ embeds: [exampleEmbed] , components:[row] });
		
		
	}


	}
