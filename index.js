const Discord = require('discord.js');
const bot = new Discord.Client();
const YTDL = require('ytdl-core');

const prefix = 'Tom,';

let play = null;

bot.on('ready', () => {
    console.log('Boot Complete');

    function getRandomInt(strt,end) {
        return Math.floor(Math.random() * end) + strt;
    }

    function playVideoURL(voiceChannel, url) {
        voiceChannel.join()
            .then(conn => {
                isReady = false;
                play = conn.playStream(YTDL(url, {filter: 'audioonly'}));
                play.on('end', () => {
                    isReady = true;
                    voiceChannel.leave();
                });
            });
    }

    bot.on('message', message => {

        const messageInfo = message.content.toLowerCase().split(' ');
        const command = messageInfo[1];

        let prefix = 'Tom, ';
        let args = [];
        let isReady = true;

        for(i = 2; i <= messageInfo.length; i++) {
            args.push(messageInfo[i]);
        }

        let info = command + ' ' + args.join (' ');
        info = info.toLowerCase();console.log(info);

        if(message.content.startsWith(prefix) && !message.author.bot) {

            if(messageInfo[1] === 'examplecmd') {
                message.channel.send('it worked!');
            } else if(messageInfo[1].indexOf('cabine is not great') > -1) {
                message.channel.send('Tom, Cabine is not great');
            } else if(messageInfo[1] === 'clear') {
                if (message.member.hasPermission('MANAGE_MESSAGES')) {
                    try {
                        message.channel.bulkDelete(10);
                    } catch(e) {
                        message.channel.send('ERROR: ERROR CLEARING CHANNEL');
                        console.log(e);
                    }
                } else {
                    message.channel.send('You do not have permission to use this command');
                }
            } else if(info.indexOf('sing wernher von braun') > -1) {
                message.channel.send('A man whose allegiance is ruled by expediance, call him a Nazi, he wont even frown, Nazi Shmazi, says Wernher von Braun. Dont say that hes hypocritical, say rather that hes apolitical, once the rockets are up, who cares where they come down, thats not my department, says Wernher von Braun. Some have harsh words for this man or renown, but some think our attitude should be one of grattitude, like the widows and cripples in old London town, who owe their large pensions to Wernher von Braun. You too may be a bit hero, once you learn to count backwards to zero. In German and English, i know how to count down, and im learning Chinese, says Wernher von Braun.');
            }
            else if(info.indexOf('sing vatican rag') > -1) {
                message.channel.send('First you get down on your knees, fiddle with your rosaries, bow your head with great respect and, genuflect, genuflect, genuflect. Do whatever steps you want if you have cleared it with the Pontiff everybody say his own Kyrie eleison doing the vatican rag. get in line in that processional step into that small confessional there the guy whos got religion will tell you if your sin is original if it is try playing is safer, drink the wine and chew the wafer, 2, 4, 6, 8 time to try and substanciate, so get down upon your knees fiddle with your rosaries, bow your head with great respect and, genuflect genuflect, genuflect, make a cross on your abdomen, when in Rome do like a Roman, Ave Maria, gee its good to see ya, getting ecstatic and sorta dramatic and doing the vatican rag!');
            }
            else if(info.indexOf('say a great quote') > -1) {
                message.channel.send('I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.')
            }
            else if (info.indexOf('say another great quote') > -1) {
                message.channel.send('Life is not fair, GET USED TO IT!!!')
            }
            else if(info.indexOf('kill them all') > -1) {
                message.channel.send('No, I\'ll pass');
            }
            else if(info.indexOf('sing aristotle\'s elements') > -1) {
                message.channel.send('There\'s earth and air and fire and water');
            }
            else if(info.indexOf('what did you kill?') > -1) {
                message.channel.send('2 Game Wardens, 7 Hunters, and a cow!')
            }
            else if(info.indexOf('what is creativity?') > -1) {
                message.channel.send('Creativity is just connecting things.');
            }
            else if(info.indexOf('kill christian') > -1) {
                message.channel.send('I\'d prefer not do deal with that mess');
            }
            else if(info.indexOf('how are you doing?') > -1) {
                message.channel.send('good, i\'m glad someone asked, *chokes*');
            }
            else if(info.indexOf('what happened on january 12th?') > -1) {
                message.channel.send('<@136957601291173889> betrayed us?');
            }
            else if(info.indexOf('sing the best song ever') > -1) {
                message.channel.send('This is a song about waking up, open those eyes you slepy nub, time to make some money and go to work, get out of bed you lazy jerk, playing is for those who sleep to long playing is for those who love a great song, listen by yourself at 5 AM or smack your face with a frying pan! Who cares if you woke up at 7:30 cuz i woke up in FEBRUARY!!! EH EH EH EH EH EH EH EH EH EH EH EH EH EH EH EH EH EH EH EH! DO SOMETHING WITH YOUR LIFE!!!')
            } 
            else if(info.indexOf('summon them') > -1) {
                message.channel.send('@everyone, get on here');
            }
            else if(info.indexOf('what did nazh do?') > -1) {
                message.channel.send('@everyone, Nazh forgot a semicolon once!!!')
            }
            else if(info.indexOf('help') > -1) {
                let embed = new Discord.RichEmbed()
                    .addField ('Tom, sing the best song ever','Sings a great song')
                    .addField ('Tom, say sorry','Says the best sorry ever')
                    .addField ('Tom, what did you kill?','Lists his kill count')
                    .addField ('Tom, what did Nazh do?','Says the truth')
                    .addField ('Tom, summon them','Summons them')
                    .addField ('Tom, what happened of january 12th?','Tells what happened')
                    .addField ('Tom, i\'m sorry, what?','No comment')
                    .addField ('Tom, what is creativity?','Answers your question')
                    .addField ('Tom, what did you do?','Tells what he did')
                    .addField ('Tom, what can we do?','Says what you can do')
                    .addField ('Tom, sing Aristotle\'s elements','Tom sings a fine ditty')
                    .addField ('Tom, mention danger','Mentions danger')
                    .addField ('Tom, say a great quote','Says a great quote')
                    .addField ('Tom, coinflip','Flips a coin')
                    .addField ('Tom, say a good quote','Says 1 of 4 good quotes')
                    .addField ('Tom, say another great quote','Tom will do just that')
                    .addField ('Tom, sing Vatican Rag','Sings Vatican Rag')
                    .addField ('Tom, clear','Purges all!!!')
                    .addField ('Tom, dice','Dices')
                    .addField ('Tom, blue','Plays True Blue')
                    .addField ('Tom, pray','Plays Like a Prayer')
                    .addField ('Tom, vogue','Plays Vogue')
                    .addField ('Tom, goodnight','Plays Sweet Dreams')
                    .addField ('Tom, hail russia','Soviet March for 10 hours')
                    .addField ('Tom, names','Lists the group\'s current members')
                    .addField ('Tom, 8ball','bullies you into submission')
                    .addField ('Tom, sing Wernher von Braun','Sings about good o\'l Wernher');
                message.channel.send(embed);
            }
            else if(info.indexOf('names') > -1) {
                let embed = new Discord.RichEmbed()
                    .addField ('Brennan Riddell','Yoshieclipse')
                    .addField ('J.R. Sodano','Wernher Von Braun')
                    .addField ('Noah Robinson','Nazrilof')
                    .addField ('Zach Rice','Cabine')
                    .addField ('Christian Mackey ','Ati')
                    .addField ('Ethan Bennett','The Jolliest Skeleton')
                message.channel.sendEmbed(embed);
            }
            else if(info.indexOf('game of the year') > -1) {
                let embed = new Discord.RichEmbed()
                    .addField ('2015','Minecraft')
                    .addField ('2016','Minecraft')
                    .addField ('2017','Overwatch')
                    .addField ('2018','ARK: Survival Evolved')
                message.channel.sendEmbed(embed);
            }
            else if(info.indexOf('people') > -1) {
                let embed = new Discord.RichEmbed()
                    .addField ('Noah','2005-present')
                    .addField ('JR','2005-present')
                    .addField ('Alex','2013-2015,2017')
                    .addField ('Wyatt','2014-2017')
                    .addField ('Ethan','2014-present')
                    .addField ('Christian','2014-present')
                    .addField ('Zach/Cabine','2015-present')
                    .addField ('Brennan','2015-present')
                    .addField ('George','2017-present');
                message.channel.sendEmbed(embed);
            }
            else if(info.indexOf('say a good quote') > -1) {
                let abc = getRandomInt(1,4);
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
            else if(info.indexOf('say a fun fact') > -1) {
                let cab = getRandomInt(1,4);
                if(cab == 1) {
                    message.reply('Noah has over 3k hours of SimCity');
                } else if(cab == 2) {
                    message.reply('Mueller isn\'t the worst things that happened to Trump, the United States presidency was'); 
                } else if (cab == 3) {
                    message.reply('You can\'t be satirical and not be offensive to somebody');
                } else if (cab == 4) {
                    message.reply('Fortnite addiction is sending kids to rehab, it affects them like heroin would');
                }
            }
            else if(info.indexOf('coinflip') > -1) {
                let how = getRandomInt(1,5);
                if(how == 1) {
                    message.reply('Heads!');
                } else if(how == 2) {
                    message.reply('Tails!');
                }
            }
            else if(info.indexOf('dice') > -1) {
                let roll = getRandomInt(1,600000);
                message.reply('You rolled a... ' + roll);
            }
            else if(info.indexOf('vogue') > -1) {
                let voiceChannel = message.member.voiceChannel;
                if(voiceChannel.joinable && isReady) {
                    playVideoURL(voiceChannel, 'https://www.youtube.com/watch?v=lTaXtWWR16A');
                } else {
                    message.channel.send('No!');
                }
            }
            else if(info.indexOf('pray') > -1) {
                let voiceChannel = message.member.voiceChannel;
                if(voiceChannel.joinable && isReady) {
                    playVideoURL(voiceChannel, 'https://www.youtube.com/watch?v=79fzeNUqQbQ');
                } else {
                    message.channel.send('No!');
                }
            }
            else if(info.indexOf('blue') > -1) {
                let voiceChannel = message.member.voiceChannel;
                if(voiceChannel.joinable && isReady) {
                    playVideoURL(voiceChannel, 'https://www.youtube.com/watch?v=P51LunEV3Sk');
                } else {
                    message.channel.send('No!');
                }
            }
            else if(info.indexOf('goodnight') > -1) {
                let voiceChannel = message.member.voiceChannel;
                if(voiceChannel.joinable && isReady) {
                    playVideoURL(voiceChannel, 'https://www.youtube.com/watch?v=qeMFqkcPYcg');
                } else {
                    message.channel.send('No!');
                }
            }
            else if(info.indexOf('hail russia') > -1) {
                let voiceChannel = message.member.voiceChannel;
                if(voiceChannel.joinable && isReady) {
                    playVideoURL(voiceChannel, 'https://www.youtube.com/watch?v=d3bkJTJ6O9Y');
                } else {
                    message.channel.send('No!');
                }
            }
            else if(info.indexOf('8ball') > -1) {
                var you = getRandomInt(1,3);
                if(you == 1) {
                    message.reply('you can go die');
                } else if(you == 2) {
                    message.reply('I don\'t care what you have to say');
                } else if(you == 3) {
                    message.reply('yes, you should go die');
                }
            } else if(info.indexOf('madonna') > -1) {
                let voiceChannel = message.member.voiceChannel;
                if(voiceChannel.joinable && isReady) {
                    playVideoURL(voiceChannel, 'https://www.youtube.com/watch?v=v3mPcQ2jeEE');
                } else {
                    message.channel.send('No!');
                }
            } else if(messageInfo[1] === 'play') {
                if(messageInfo[2].startsWith('https://youtu')) {
                    let voiceChannel = message.member.voiceChannel;
                    if(voiceChannel.joinable && isReady) {
                        console.log(messageInfo[2]);
                        try {
                            playVideoURL(voiceChannel, message.content.split(' ')[2]);
                        } catch(err) {
                            isReady = true;
                            message.channel.send('NO!!! YOU HAVE DONE A GREAT WRONG AND SHALL NEVER BE FORGIVEN');
                        }
                    } else {
                        message.channel.send('No!');
                    }
                } else {
                    e.channel.send('You must specify a URL');
                }
            } else if(info.indexOf('stop') > -1) {
                play.end();
            } else if(messageInfo[1] === 'volume') {
                if(parseInt(messageInfo[2]) !== NaN) {
                    play.setVolume(messageInfo[2] / 100);
                }
            } else {
                message.channel.send('Sorry partner, can\'t do it consarnit');
            }

        }

    });

});

bot.login('Mzc3OTQ0OTA1MjczNzA0NDQ4.DvMC2g.Ff58wcJPnLA5OgkksX-tjhvoQLQ');