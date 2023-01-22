const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');
//this part of the code makes the commands visible on the guild server, a bit of code editing should make it go globle, but it can have a delay of up to one hour
const commands = [
    new SlashCommandBuilder().setName('sacramento').setDescription('Replies with a fact about Sacramento (source Wikipedia, AI) (it might not be true tho)'),
    new SlashCommandBuilder().setName('advice').setDescription('Replies with wonderful advice').addStringOption(option => option.setName('problem') .setDescription('the problem you need solving') .setRequired(true)),
	new SlashCommandBuilder().setName('headline').setDescription('random headline'),
	new SlashCommandBuilder().setName('8-ball').setDescription('random 8-ball response'),
	new SlashCommandBuilder().setName('sorry-darrell').setDescription('prints out an apology to darrell'),
	new SlashCommandBuilder().setName('ao3').setDescription('random ao3 fic'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);