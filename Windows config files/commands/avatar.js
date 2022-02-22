const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction } = require('discord.js');
const { color , name , logall , aks , owner} = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Display your or somebody avatar')
		.addUserOption(option => option.setName('target').setDescription('Another user avatar')),
	async execute(interaction) {
		if(interaction.options.getUser('target')) {

		const user = interaction.options.getUser('target');

        const exampleEmbed1 = new MessageEmbed()

        .setColor(color)
		.setTitle(name)
        .setImage(`${user.displayAvatarURL({size:1024, dynamic: true })}`)
        .setTimestamp()
		.setFooter({ text: 'SEZAR TM | /INVITE'})

		return interaction.reply({ embeds: [exampleEmbed1] });
	}
	else {
		
		const exampleEmbed2 = new MessageEmbed()

        .setColor(color)
		.setTitle(name)
        .setImage(`${interaction.user.displayAvatarURL({size:1024, dynamic: true })}`)
        .setTimestamp()
		.setFooter({ text: 'SEZAR TM | /INVITE'})
        
        

        return interaction.reply({ embeds: [exampleEmbed2] });

		}
	},
};