const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "autoplay",
  description: "Toggle the autoplay of the queue.",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    try {
      const queue = client?.player?.getQueue(interaction?.guild?.id);
      if (!queue || !queue?.playing) {
        return interaction?.reply({ content: '⚠️ Nessuna canzone in riproduzione!!', ephemeral: true });
      }
      
      queue?.toggleAutoplay();
      
      const embed = new EmbedBuilder()
        .setColor('#8100ff')
        .setTitle('Canzone tua, chiamata tua!!')
        .setDescription(queue?.autoplay ? '**✅ Autoplay ON**' : '**❌ Autoplay OFF**')
        
      
      interaction?.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
