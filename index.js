const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('Mzc3OTQ0OTA1MjczNzA0NDQ4.DOUmWQ.I6TizwlHP20ApNKWCL11UoS2M3g');

bot.on('message', message =>{

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }   

    if(message.content == 'Wernher Von Braun') {
        message.reply('A man whose allegiance is ruled by expediance, call him a Nazi, he wont even frown, Nazi Shmazi, says Wernher von Braun. Dont say that hes hypocritical, say rather that hes apolitical, once the rockets are up, who cares where they come down, thats not my department, says Wernher von Braun. Some have harsh words for this man or renown, but some think our attitude should be one of grattitude, like the widows and cripples in old London town, who owe their large pensions to Wernher von Braun. You too may be a bit hero, once you learn to count backwards to zero. In German and English, i know how to count down, and im learning Chinese, says Wernher von Braun.');
    }
    else if(message.content == 'Vatican Rag') {
        message.reply('First you get down on your knees, fiddle with your rosaries, bow your head with great respect and, genuflect, genuflect, genuflect. Do whatever steps you want if you have cleared it with the Pontiff everybody say his own Kyrie eleison doing the vatican rag. get in line in that processional step into that small confessional there the guy whos got religion will tell you if your sin is original if it is try playing is safer, drink the wine and chew the wafer, 2, 4, 6, 8 time to try and substanciate, so get down upon your knees fiddle with your rosaries, bow your head with great respect and, genuflect genuflect, genuflect, make a cross on your abdomen, when in Rome do like a Roman, Ave Maria, gee its good to see ya, getting ecstatic and sorta dramatic and doing the vatican rag!');
    }
    else if(message.content == 'A Great Quote') {
        message.reply('I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.')
    }
    else if (message.content == 'Truth') {
        message.reply('Life is not fair, GET USED TO IT!!!')
    }
    else if(message.content == 'Who Should Die?') {
        message.reply('Whenever there\'s danger in the world, you\'re the first to go and die')
    }
    else if(message.content == 'Aristotle Elements') {
        message.reply('There\'s earth and air and fire and water');
    }
    else if(message.content == 'Elon, What\'s your favorite idea?') {
        message.reply('Mine is being creative!')
    }
    else if(message.content == 'Amazing!') {
        message.reply('Wow how amazing, and interesting too, but in this digital world, what can we do?')
    }
    else if(message.content == 'Hunting') {
        message.reply('2 Game Wardens, 7 Hunters, and a cow!')
    }
    else if(message.content == 'German Truth') {
        message.reply('We tought them a lesson back in 1918, and they havent bothered us much since then');
    }
    else if(message.content == 'Creativity') {
        message.reply('Creativity is just connecting things.');
    }

    else if(message.content == 'Mrs. Lincoln') {
        message.reply('Apart from that Mrs. Lincoln, how did you enjoy the play?');
    }
    else if(message.content == 'Poor') {
        message.reply('If you are born poor it\'s not your mistake. If you die poor, it\'s your mistake.');
    }
    else if(message.content == 'Pollution') {
        message.reply('Rinse your mouth with industrial waste');
    }
    else if (message.content == 'Hi') {
        message.reply('Hello to you too!')
    }
    else if (message.content == 'Hello') {
        message.reply('Hello to you too!')
    }
    else if (message.content == 'Greetings') {
        message.reply('Hello to you too!')
    }
    else if(message.content == 'I Killed You') {
        message.reply('I\'m sorry now i killed you');
    }
    else if(message.content == 'Tom Lehrer Quote') {
        var abc = getRandomInt(1,4);
        if(abc == 1) {
            message.reply('Apart from that Mrs. Lincoln, how did you enjoy the play?');
        } else if(abc == 2) {
            message.reply('Bad weather always looks worse through a window.'); 
        } else if (abc == 3) {
            message.reply('You can\'t be satirical and not be offensive to somebody');

        } else if (abc == 4) {
            message.reply('I know there are people who do not love their fellow man, and i hate people like that!');
        }
    }
    else if(message.content == 'Hello, Elon') {
        var xyz = getRandomInt(1,2);
        if(xyz == 1) {
            message.reply('Heil!');
        } else if (xyz == 2) {
            message.reply('Greetings Human');
        }
    }
    else if(message.content.endsWith('?')) {
        var why = getRandomInt(1,2);
        if(why == 1) {
            message.reply('Enough with these silly questions!');
        } else if (why == 2) {
            message.reply('Nazh is always right.');
        }
    }
});