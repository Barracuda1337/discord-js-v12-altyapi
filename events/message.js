const settings = require('../settings.js');

module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  };
  if (cmd) {
    if(!message.guild) {
      if(cmd.settings.guildOnly === true) {
        return;
      };
    };
    if (cmd.settings.permLevel) {
      if(cmd.settings.permLevel === "BOT_OWNER") {
   if(!settings.sahip.includes(message.author.id)) {
        message.channel.send(`Bu komutu kullanabilmek için \`${cmd.settings.permLevel}\` yetkisine sahip olmalısın.`).then(msg => msg.delete({timeout: 4000}));
        return;
   }
      }
        if(!message.member.hasPermission(cmd.settings.permLevel)) {
      message.channel.send(`Bu komutu kullanabilmek için \`${cmd.settings.permLevel}\` yetkisine sahip olmalısın.`).then(msg => msg.delete({timeout: 4000}));
     return;
      };
    };
    cmd.run(client, message, params);
};
};