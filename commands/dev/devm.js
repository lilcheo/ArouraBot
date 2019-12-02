const Discord = require("discord.js");

module.exports = {
  name: "devm",
  aliases: ["DevM"],
  category: "dev",
  description: "Dev Mode enables",
  usage: "[Command ]",
  run: async (client, message, prefix) => {
const args = message.content.slice(prefix.length).split(' ');
    if (args[1] === "Enable"){
  const x = new Boolean(true)
  message.channel.send("Enabled DevMode")
};
    
    if (args[1] === "Disable"){
  const x = new Boolean(false)
  message.channel.send("Disabled DevMode")
};    
    
    console.log(args[1])
 const fs = require('fs');
 
fs.readFile('./txt/devm.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');
  
}
}