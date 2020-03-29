const { main } = require("./owner.json");
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "eval",
  description: "idk",
  run: async (client, message, args) => {
  let owner = "275350295293198337";
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


  

    if(message.author.id !== owner) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
  }
