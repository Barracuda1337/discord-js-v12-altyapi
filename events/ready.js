const Discord = require("discord.js");
const config = require('../settingsjs');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "PLAYING", name: `Barracuda`}, status: 'dnd' })
};

// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// ONLİNE - çevrim içi
// IDLE - boşta
// DND - rahatsız etmeyin

