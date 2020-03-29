module.exports = {
  name: "ping",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    clet totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
    
    let clap = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    
 const msg = await message.channel.send(`Checking...`);

    msg.edit(`${clap}`);
  }
};
