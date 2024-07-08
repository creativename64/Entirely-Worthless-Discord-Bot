const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const dotenv = require('dotenv');
dotenv.config()
const token = process.env.TOKEN;
const cid = process.env.CID;
const gid = process.env.GID;
//this part of the code makes the commands visible on the guild server, a bit of code editing should make it go globle, but it can have a delay of up to one hour
const commands = [
    new SlashCommandBuilder().setName('interactiontest').setDescription('A test for string passthough (beta)').addStringOption(option => option.setName('textinput').setDescription('with any luck it will return what you type here back at you').setRequired(true)),
    new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong! (beta)'),
	new SlashCommandBuilder().setName('spotify').setDescription('random spotify song (beta)'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(cid, gid), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);