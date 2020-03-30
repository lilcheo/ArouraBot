const { main } = require("./owner.json");
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "restart",
  description: "idk",
  run: async (client, message, args) => {

let owner = "275350295293198337";
 if(message.author.id !== owner){
message.channel.send("error: ${console.error}")
}else {
message.channel.send("Restarting...").then(() => process.exit())
}
  }
}
