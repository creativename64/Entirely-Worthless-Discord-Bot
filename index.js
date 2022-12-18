// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const https = require('https');
const cheerio = require('cheerio');
const { EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const { url } = require('inspector');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Slash Commands Moment
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
//commands are handled here
	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'interactiontest') {
		//this makes a variable called string, and fills it with required text input from the command
        const string = interaction.options.getString('textinput');
		//this command just then takes that string and fires it back, but the open ai stuff should go here
        await interaction.reply(`The following is a fact: ${string}`);
    }  else if (commandName === 'sacramento') {
		var textArray = [
			'Darrell Steinberg is the mayor of Sacramento (prase) https://upload.wikimedia.org/wikipedia/commons/0/04/Darrell_Steinberg_Mayoral_Portrait.jpg)',
			'Sacremento is the capital of California',
			"Sacramento is the 6th largest city in California",
			"sacramento is the 35th largest city in the United States",
			"it has a population of 524,943",
			'it is the 2nd largest city in the Sacramento Valley',
			'Sacramento is the fastest-growing major city in California',
			'it is the 3rd fastest-growing major city in the United States',
			'Sacramento is known for its evolving contemporary culture, and is dubbed the most "hipster city" in California',
			'it is the 2nd most "hipster city" in the United States',
			'In 2002, the Harvard University Civil Rights Project conducted for Time magazine ranked Sacramento as "Americas Most Diverse City',
			'Nisenan (Southern Maidu), Modoc, and Plains Miwok Native Americans lived in the area for perhaps thousands of years',
			'In 1808, the Spanish explorer Gabriel Moraga found and named the Sacramento Valley and the Sacramento River',
			'In 1839, the Mexican governor of Alta California, Juan Bautista Alvarado, granted Rancho San Joaquin to José de Jesus Silva',
			'In 1841, Silva sold the two tracts of land to John Sutter, Jr',
			'In 1848, gold was discovered by James W. Marshall at Sutters Mill in Coloma, and news of the find brought some 300,000 people to California from the rest of the United States and abroad',
			'In 1849, the California Gold Rush began',
			'In 1850, the California State Legislature granted Sacramento city and county status to become the state capital',
			'In 1854, the discovery and mining of silver in the foothills north of Sacramento brought a surge of new residents, and the city became a boomtown',
			'In 1869, Sacramento became a consolidated city-county',
			'In 1880, the completion of the First Transcontinental Railroad in 1869 and the arrival of the Southern Pacific Railroad in 1870 made Sacramento a major railroad hub',
			'In 1890, the city was named the "most prosperous city in the world" by the San Francisco Chronicle',
			'According to the United States Census Bureau, the city covers 100.1 square miles (259 km2). 97.81% of it is land, and 2.19% of it is water.',
			'In 2007, Forbes ranked Sacramento the 5th best place for business and careers',
			'Depth to groundwater is typically about 30 feet (9 m)',
			'In 2002, the city hosted the MTV Video Music Awards',
			'Sacramento has long been known as the "City of Trees" owing to its abundant urban forest. The city has more trees per capita than anywhere else in the world',
			'In 2005, Newsweek ranked Sacramento the 5th best place to live in the United States',
			'In 2008, Sacramento was named an All-America City by the National Civic League',
			'In 2010, Sacramento was named the most diverse city in the United States by the U.S. Census Bureau',
			'In 2011, Sacramento was named the most politically moderate city in the United States by the Brookings Institution',
			'A prominent water tower bore the slogan "City of Trees" until 2017, when it was repainted with the words "Americas Farm-to-Fork Capital" (referring to the farm-to-fork movement, which promotes consumption of locally-grown food). After 4,000 displeased citizens signed a petition protesting the change, officials agreed to include both slogans on the water tower.',
			'In 2014, Sacramento was named the most bike-friendly city in the United States by Bicycling magazine',
			'In 2015, Sacramento was named the most creative city in the United States by 24/7 Wall St',
			'In 2016, Sacramento was named the most affordable city in the United States by 24/7 Wall St',
			'the state of California is the biggest employer in Sacramento, employing 13.5% of the citys workforce',
			'Sacramento is home to several major museums.',
			'The Sacramento Ballet, Sacramento Philharmonic Orchestra and the Sacramento Opera perform at the SAFE Credit Union Performing Arts Center (formerly known as the Community Center Theater)',
			'The Sacramento Kings of the National Basketball Association (NBA) play at the Golden 1 Center',
			'The Sacramento River Cats of the Pacific Coast League (PCL) play at Raley Field',
			'The Sacramento Republic FC of the United Soccer League (USL) play at Papa Murphys Park',
			'The Sacramento State Hornets of the Big Sky Conference play at Hornet Stadium',
			'Sacramento is home to the Sacramento French Film Festival, a cultural event held every year in July that features U.S. premieres of French films and classic masterpieces of French cinema',
			'Sacramento boasts an extensive park system consisting of over 5,000 acres (2,023 ha) of parkland and recreation centers.',
			'In its 2013 ParkScore ranking, The Trust for Public Land reported Sacramento was tied with San Francisco and Boston for having the 3rd best park system among the 50 most populous U.S. cities.',
			'The Government of Sacramento operates as a charter city (as opposed to a general law city) under the Charter of the City of Sacramento. The elected government is composed of the Sacramento City Council with 8 city council districts and the Mayor of Sacramento, which operate under a mayor-council government. In addition, there are numerous departments and appointed officers such as the City Manager, Sacramento Police Department (SPD), the Sacramento Fire Department (SFD), City Clerk, City Attorney, and City Treasurer.',
			'Sacramento is home to Sacramento State (California State University, Sacramento), founded as Sacramento State College in 1947.',
			'The University of California has a campus, UC Davis, in nearby Davis and has a graduate center in downtown Sacramento.',
			'Epic Bible College and the Professional School of Psychology are also based in Sacramento.',
			'The Sacramento Public Library system has 28 branches in the greater area. The Sacramento area is served by various public school districts, including the Sacramento City Unified School District, Natomas Unified School District, San Juan Unified School District, Twin Rivers Unified School District, and Elk Grove Unified School District.',
			'Amtrak provides passenger rail service to the city of Sacramento.',
			'Sacramento International Airport (IATA: SMF, ICAO: KSMF, FAA LID: SMF) is a public airport 10 miles (16 kilometers) northwest of downtown Sacramento, in Sacramento County, California.',
			'Sacramento is served by the Sacramento Regional Transit District (SacRT), which operates bus and light rail services.',
			'Greyhound Lines provides intercity bus service to Portland, Reno, Los Angeles, and San Francisco from its new station along Richards Boulevard. Intercity bus service to San Francisco and Sparks, Nevada is offered by Megabus.',
			'As of 2015, the City of Sacramento has 13 sister cities.',
			'In 2015, the Sacramento Kings became the first NBA team to have a jersey sponsor, with the team wearing a jersey patch with the logo of Golden 1 Credit Union',
			'Official records for Sacramento were kept exclusively at the airport since 10 November 1941.',
			'Most of the citys records were destroyed in the 2008 California wildfires',
			'Most of these facts are wrong',


		];
		var randomNumber = Math.floor(Math.random()*textArray.length);
		await interaction.reply(`Did you know: ${textArray[randomNumber]}. Damm, hella intresting too bad some of these facts were generated by an ai and this could just not be true`);
	} else if (commandName === 'advice') {
		var textArray2 = [
	'ignore the problem, it will work out',
  'duct tape can fix anything tbh',
  'cut down a tree',
  'go commit arson',
  'i really dont care tbh',
  'im fond of tax evasion',
  'listen to music for a bit then think it over',
  'bribe someone involved',
  'just find a another chance to',
  'do nothing',
  'give me money',
  'lock anything and anyone involved in your problem in a closet',
  'sleep',
  'drink iced coffee',
  'go touch grass',
  'just stop',
  'a- are you ok',
  'high heels or risers',
  'find a garbage dump and jump into it',
  'do less shit',
  'but why?',
  'go with your gut',
  'drink less iced coffee',
  'consolidate your debt',
  'just be youself',
  'stop eating it',
  'gaslight, gatekeep, girlboss',
  'move to a more secure location',
  'google it',
  'im sorry but you are going to die, you cant even do anything about it',
  'thats cool and all but have you heard about the 4v1 asymmetrical multiplayer horror game identity v by netease?',
  'neat, anyways you might want to check your bank account',
  'drink some water, you seem dehydrated',
  'anything can be a hole puncher if you try hard enough',
  'go worship treesus',
  'pray to lord hexagon the bestagon',
  'go help a small independent nation fight for independence',
  'jeebus go see a therapist',
  'repeat after me: i am a confident chicken',
  'your three options are poison torture and bird',
  'sleep and like more then the two hours you probably get',
  '🫂',
  'do less stuff in your day',
  'bread is good, problem are bad, eat more bread',
  'https://www.anxietycanada.com/articles/how-to-solve-daily-life-problems/',
  'ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
  'b r e a t h i n g  e x e r s i z e s',
  'idk bribe the police',
  'bribe anyone involved',
  'bribe the judge',
  'use a gun',
  'use a knife',
  'stab the problem',
  'shoot the problem',
  'move to sacramento',
  'sacrifice a goat',
  'sacramentos a good place to live',
  'canada should be a state',
  ];
		var randomNumber2 = Math.floor(Math.random()*textArray2.length);
    const solvething = interaction.options.getString('problem');
		await interaction.reply(`the user asked for help with "${solvething}", all I can say is: ${textArray2[randomNumber2]}`);
	} else if (commandName === 'headline') {
		const starttext = [
			'breaking:',
			'analysis:',
			'editorial:',
			' ',
		];
		var solvethingnumber = Math.floor(Math.random()*starttext.length);
		const subject = [
			'florda man',
'donald trump',
'elon musk',
'donald trump',
'OpenAI',
'random person we found on the street',
'house of commons',
'darrell',
'kanye west',
'scientists',
'NASA',
'a cute cat',
'some random cat',
'jeff bezos',

		];
		var subjectnumber = Math.floor(Math.random()*subject.length)
		const endingthing = [
			'broke into the local target',
'made housing prices spiral out of control',
'said something bad (boooooooo)',
'has doomed the entire world',
'said time is an illusion',
'broke a multi-million dollar telescope',
'wrote a new dictionary, and we hate it',
'sold a pair of old shoes they used for $150k on ebay',
'died due to licking a toad',
'was attacked by an owl twice',
'was caught cheeting on their partner',
'faked a pregnency for free time off',
'ate too many beans and was sent to the hospital',
'did your mom',
'was arrested after trying to buy a child in a store',
'was reloacted after the locals complained',
'was given 9 life sentences for being a mass murderer',
'won a jump-rope world record',
'was outlasted by a peice of lettus, partner disapointed',
'straped a fan to themselves to get away from the weather',
'was killed by something they had said was a punishment from god for being gay',
'just curled up for a wee lil nap',
'got a speices of moth named after them',
'was AI',
'discovered their parter was trans and they never realized',
'was arrested for selling tickets to heaven',
'keeps returning to a store they are banned from',

		] ;
		var endingthingnumber = Math.floor(Math.random()*endingthing.length);
		await interaction.reply(`${starttext[solvethingnumber]} ${subject[subjectnumber]} ${endingthing[endingthingnumber]}`);
	} else if (commandName === 'ao3') {
	var a = Math.floor(Math.random()*10194969);
	const ficurl = (`https://archiveofourown.org/works/${a}`)
	const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Random AO3 Article (This embed is still WIP)')
	.setAuthor({ name: 'darrell', iconURL: 'https://cdn.discordapp.com/avatars/1054064658962726962/408135e68d06ca55718b053472e70be1.webp?size=160', url: 'https://discord.com/api/oauth2/authorize?client_id=1053733415888891915&permissions=517611116608&scope=applications.commands%20bot' });
	const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Thy fic')
					.setURL(ficurl)
    				.setStyle('Link'),
			);
    interaction.reply({embeds: [exampleEmbed], components: [row]});
}
});

// Login to Discord with your client's token
client.login(token);