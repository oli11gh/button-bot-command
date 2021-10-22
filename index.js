const Discord = require('discord.js'); //Requiring Discord.js module.
const client = new Discord.Client(); //Creating and assigning the Discord.js Client constructor.
client.interaction = {}; //Creating interaction object
const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.
const ButtonPages = require('discord-button-pages'); //Requiring Discord-Button-Pages module.
DiscordButtons(client);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('clickButton', (button) => {
  ButtonPages.buttonInteractions(button, client.interaction);
});

client.on('message', msg => {
  if (msg.content === '.help') {
    const embed1 = new Discord.MessageEmbed()
        .setTitle('Uzyskaj pomoc klikając poniżej:\n\n💰- Ekonomia\n\n🖼️- Obrazowe\n\n🚔- Moderacja\n\n📝- informacje\n\n📂-Inne\n\n🔊- Muzyczne\n\n🛠️-Administracyjne\n\n **Strona Główna**')        
        .setColor('WHITE');
        
    const embed2 = new Discord.MessageEmbed()
        .setTitle('💰- Ekonomia\n\npraca | slut | with | dep | daily | bal | lb\n\nStrona 1/7')
        .setColor('YELLOW');
        
    const embed3 = new Discord.MessageEmbed()
        .setTitle('🖼️- Obrazkowe\n\nusun @nick`|`jail`|`captcha`|`wideavatar`|`toilet`|`minecraft`|`wspanialy`|`fliptext`|`szerokitext`|`catsay`|`cowsay`|`rip`|`clyde`|`blur`|`avatar\n\nStrona 2/7')
        .setColor('BLUE');

    const embed4 = new Discord.MessageEmbed()
        .setTitle('🚔- Moderacyjne\n\n`Ban`|`Kick`|`voicekick`|`Unban`|`Mute`|`Purge`\n\nStrona 3/7')
        .setColor('GREEN');

  
    const embed5 = new Discord.MessageEmbed()
        .setTitle('📝- Informacyjne\n\n`channelinfo`|`userinfo`|`membercount`|`ping`|`rank`|`youtubesearch`|`profile`|`stats`|`wiki`\n\nStrona 4/7')
        .setColor('BLUE');

    const embed6 = new Discord.MessageEmbed()
        .setTitle('📂- Inne\n\n`snake`|`fasttype`|`snakev2`|`.qr (url)`|`przytul`|`oblicz (obliczenie np 5+5)`|`anime`\n\nStrona 5/7')
        .setColor('BLUE');
    
    const embed7 = new Discord.MessageEmbed()
        .setTitle('🔊- Muzyczne\n\nplay | stop | resume | pause | skip | volume\n\nStrona 6/7')
        .setColor('RED');

    const embed8 = new Discord.MessageEmbed()
        .setTitle('🛠️- Administracyjne\n\nsetup-autoembed | setup-antilink | setup-ticket | setup-suggestion | setup-aichat | setup-anticaps | setup-antidiscord | setup-rank | setup-youtube | setup-tiktok\n\nStrona 7/7')
        .setColor('BLACK');

    const embedPages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8];
    ButtonPages.createPages(client.interaction, msg, embedPages, 65 * 1040, "green", "➡️", "⬅️", "❌");
  }
});
client.login(token bota);
require('http').createServer((req, res) => res.end('Bot ruszył!')).listen(3000)
