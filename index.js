const Discord = require("discord.js");
const bot = new Discord.Client();

const token = '';

bot.on("ready", () => {
  console.log("Bulba, bulba!");
});

bot.on("message", msg => {
  if (msg.content.includes("Patryk")) {
    msg.reply("Bulba, bulba!");
  }
  else if (msg.content.includes("patryk")) {
    msg.reply("Bulbasaaaur!");
  }
  else if (msg.attachments.size > 0 ){
    msg.react('🥗');
  }
  else if (msg.content === "Przywitaj się!"){
    msg.reply('Bulba!');
  }
});
bot.login(token);
