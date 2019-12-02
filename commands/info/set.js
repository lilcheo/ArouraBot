const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
  name: "set",
  description: "Sets Server",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message
        .reply("You can't Set Servers!")
        .then(m => m.delete(5000));
    }
    
const word = args.join(" ");
if (word < 1)
      return message.channel.send("No Server Stated?");
    const embed = new Discord.RichEmbed().setDescription("New Server: " + word).setColor();
    message.channel.send({ embed });
  } 
}