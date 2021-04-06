const Discord = require("discord.js")     
const client = new Discord.Client();       
const settings = require("./settings.js")    
const fs = require("fs");                
require('./util/Loader.js')(client);     
client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  



fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.settings.name} komutu yüklendi.`);  
    client.commands.set(props.settings.name, props); 
    props.settings.aliases.forEach(alias => {          
      client.aliases.set(alias, props.settings.name);  
    });
  });
})

client.login(settings.token)
