// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const https = require('https');
const cheerio = require('cheerio');
const { EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const { url } = require('inspector');
const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity(`you can dm me | version 2.2`);
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
			'There is a large collection of tunnels under the foundation of Sacramento',
			'The Sacrmento Kings use a real lion as a mascot',
			'Mark Twain lived there once',
			'They spent $68 million renovating the state building once',
			'It was called sactown once',
			'IT IS THE BIG TOMATO',
			'They process 12 million pounds of nuts a day',
			'The statie library is haunted',
			'Sacramento has seven orchestras',
			'West Sacramento is in YOLO county while Sacramento is in Sacramento County',
			
			
			


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
  "Channel your inner MacGyver and build a solution out of random office supplies",
"Maybe the real problem was the friends we made along the way",
"Treat yourself to a reward for even attempting to deal with this!",
"Pro-tip: Problems shrink when you view them from the comfort of a hammock",
"Did someone say dance break? Distract yourself with some epic moves!",
"Bake a delicious cake and celebrate that you're at least acknowledging the problem",
"Marie Kondo your worries: Does this problem spark joy? If not, ditch it!",
"Challenge yourself to explain the problem to a rubber duck. Clarity might come quacking in",
"Netflix and chill... but with a problem-solving documentary thrown in for good measure",
"Fake it 'til you make it! Project confidence and the problem might just shrink away",
"Channel your inner superhero and conquer this obstacle with a flick of your metaphorical cape!",
"Maybe the problem needs a hug? Kindness can be surprisingly effective",
"Write a letter to your future self about this problem. Future you will laugh (or have solved it already)",
"Is there a karaoke bar nearby? Belting out your frustrations might be surprisingly therapeutic",
"Problem-solving power nap! Recharge and come back feeling refreshed and ready to tackle it",
"Make a list of things you're grateful for. Gratitude can shift your perspective and boost problem-solving skills",
"Flip the script! How can you turn this problem into an opportunity?",
"Break the problem down into tiny, manageable steps. You've got this!",
"Time for a brain dump! Write down everything about the problem, no matter how crazy it seems. Clarity might emerge",
"Maybe a walk in nature is the answer. Fresh air and sunshine can work wonders",
"Talk it out with a trusted friend or mentor. A listening ear can be surprisingly helpful",
"Visualize success! Imagine yourself overcoming the problem and feeling proud. Positive visualization is powerful",
"Delegate! Can you share some of the burden with someone else?",
"Learn from your mistakes. Every challenge is a chance to grow",
"Focus on what you can control. Let go of the rest and breathe easy",
"Channel your inner artist and create something inspired by the problem. Maybe the solution lies within the art form!",
"Declutter your physical space. A clean environment can lead to a clearer mind for problem-solving.",
"Blast some empowering music and get pumped up to tackle this challenge!",
"Fake a British accent and pretend you're a brilliant detective solving the case of... your problem!",
"Maybe laughter is the best medicine? Watch a funny movie and come back to it with a fresh perspective.",
"Do a quick online meditation session. A few minutes of mindfulness can work wonders for focus and clarity.",
"Organize a brainstorming session with friends or colleagues. Multiple minds are better than one!",
"Channel your inner negotiator and see if you can find a win-win solution for everyone involved.",
"Sometimes the best solution is simply waiting. Give yourself some time and space to let it simmer.",
"Light a scented candle and create a calming atmosphere to approach the problem with a cool head.",
"Do some jumping jacks! Get your blood pumping and see if some creative problem-solving ideas come to mind.",
"Write down your worries on a piece of paper, then crumple it up and throw it away. Symbolically letting go of the stress.",
"Challenge yourself to learn something new that might be related to the problem. Knowledge is power!",
"Maybe the answer lies in a good night's sleep. A well-rested brain is a problem-solving machine.",
"Practice gratitude for the small things in life. A positive mindset can help you approach challenges with a better outlook.",
"Do a quick online personality test. Maybe understanding yourself better offers clues to tackling the problem.",
"Organize your workspace. A cluttered desk can lead to a cluttered mind. Tidy up and see if inspiration strikes.",
"Maybe the solution involves helping someone else. Sometimes giving back can bring unexpected clarity.",
"Listen to a podcast on a related topic. You might learn a new approach or gain valuable insights.",
"Do some stretches or light yoga. A relaxed body can lead to a more relaxed mind for problem-solving.",
"Challenge yourself to explain the problem to a pet (even if they don't respond). Talking it out can bring clarity.",
"Maybe the answer lies in a good book. Dive into a non-fiction book related to the issue and see what you learn.",
"Practice positive affirmations. Repeating things like 'I am capable' or 'I can handle this' can boost confidence.",
"Reward yourself for small victories along the way. Celebrate your progress, no matter how small.",
"Sometimes a change of scenery is all you need. Take a walk in a new park or visit a different coffee shop.",
"Listen to calming nature sounds. The sounds of rain or waves can be surprisingly effective for stress reduction.",
"Do a quick digital detox. Disconnect from screens for an hour and see if your brain feels refreshed and ready to tackle the issue.",
"Maybe the solution involves saying no. Don't be afraid to set boundaries and prioritize your well-being.",
"Write down a list of your strengths and skills. Remind yourself of what you're capable of overcoming.",
"Break the problem down into a flow chart. Visualizing the steps can make it feel less overwhelming.",
"Do a quick online happiness quiz. Maybe boosting your mood can lead to a more creative approach to the problem.",
"Listen to a motivational speech. Hearing someone else's success story can inspire you to tackle your own challenges.",
"Maybe the answer lies in helping a stranger. Random acts of kindness can boost your mood and shift your perspective.",
"Organize a potluck with friends. Sharing a meal and conversation can be surprisingly helpful for problem-solving.",
"Do some online research. There's a good chance someone else has faced a similar problem and found a solution.",
"Maybe the answer lies in letting go. If it's something you can't control, accept it and focus on what you can.",
"Practice active listening with a friend or colleague. Sometimes simply being heard can lead to clarity and solutions.",
"Do a quick online brain training game. Sharpen your mental skills and see if it sparks some creative problem-solving ideas.",
"Challenge yourself to learn a new word every day. Expanding your vocabulary can lead to new ways of thinking about the problem.",
"Do some doodling or freehand drawing. Sometimes letting your subconscious mind express itself can lead to unexpected solutions.",
"Maybe the answer lies in saying sorry. If you've contributed to the problem, take responsibility and apologize.",
"Organize a game night with friends. Taking a break with some fun can lead to a refreshed perspective later.",
"Do some online research on famous historical problem-solvers. Maybe their stories can inspire you to tackle your own challenge.",
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
			' ',
			' ',
		];
		var solvethingnumber = Math.floor(Math.random()*starttext.length);
		const subject = [
			'florda man',
'donald trump',
'elon musk',
'donald trump',
'OpenAI',
'this random person we found on the street',
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
		interaction.reply('finding a link, this can take a weirdly long time')
		async function getUrl(interaction) {
			return new Promise((resolve, reject) => {
				let exit = false;
				let check = () => {
					if (!exit) {
						let a = Math.floor(Math.random() * 42000000) + 1;
						let x = "https://archiveofourown.org/works/" + a;
						https.get(x, (res) => {
							if (res.statusCode === 200) {
								resolve(x);
								exit = true;
							}
						});
						setTimeout(check, 1000);
					}
				}
				check();
			});
		}
		
		getUrl().then(url => interaction.editReply(url));
		
} else if (commandName === '8-ball') {
		const textArray3 = [
			'it is certain',
			'it is decidedly so',
			'without a doubt',
			'yes definitely',
			'you may rely on it',
			'as i see it, yes',
			'most likely',
			'outlook good',
			'yes',
			'signs point to yes',
			'reply hazy try again',
			'ask again later',
			'better not tell you now',
			'cannot predict now',
			'concentrate and ask again',
			'dont count on it',
			'my reply is no',
			'my sources say no',
			'outlook not so good',
			'very doubtful',
		];
		var randomNumber3 = Math.floor(Math.random()*textArray3.length);
		const solvething2 = interaction.options.getString('problem');
		await interaction.reply(`the user asked "${solvething2}", the spirits say: ${textArray3[randomNumber3]}`);
	} else if (commandName === 'sorry-darrell') {
		await interaction.reply('I would like to apologize on behalf of myself for selecting darrell as the subject of mockery via this bot, he is quite bassed and is working to ban guns in the states and stuff. Please dont use this bot as a political statement and the next time I pick a random cishet white male mayor to mock I will be sure to make sure they kinda suck.');
	}
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
