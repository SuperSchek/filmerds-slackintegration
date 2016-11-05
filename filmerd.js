var Botkit = require('Botkit');

var controller = Botkit.slackbot();

controller.hears(["Hey, filmerd"],["direct_message", "mention"], function(bot, message) {
    console.log(message);
    bot.reply(message, "DIKKE FILMERD JONGEUH");
});

var bot = controller.spawn({
    token:require('./config').token
});

bot.startRTM(function(err, bot, payload) {
    if (err) {
        console.log(err);
        throw new Error('Sorry, I could not connect to Slack! Perhaps something is wrong with your code?');
    }
});