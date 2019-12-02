const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
  name: "say",
  aliases: ["bc", "broadcast"],
  description: "Says your input via the bot",
  usage: "<input>",
  run: (client, message, args) => {
    message.delete();
    const word = args.join(" ");
    if (word < 1)
      return message.channel.send("Didn't provide any text to embed");
    const embed = new Discord.RichEmbed().setDescription(word).setColor();
    message.channel.send({ embed });
  }
};
