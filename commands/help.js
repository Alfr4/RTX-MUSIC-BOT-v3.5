const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Ottieni informazioni su bot e comandi.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'Trasmettere una canzone da un link o scritto.' },
          { name: '⏹️ Stop', value: 'Fa smettere al bot di riprodure la musica e lasciare la vocale.' },
          { name: '📊 Queue', value: 'Visualizza e gestisci la coda del brano di questo server.' },
          { name: '⏭️ Skip', value: 'Salta la canzone attuale' },
          { name: '⏸️ Pause', value: 'Mette in pausa la canzone attualmente riprodote.' },
          { name: '▶️ Resume', value: 'Riprende la canzone attuale in pausa.' },
          { name: '🔁 Loop', value: 'Attiva la modalità loop per coda e canzone attuale.' },
          { name: '🔄 Autoplay', value: 'Abilita o disabilita la riproduzione automatica [Riproduce canzoni casuali].' },
          { name: '⏩ Seek', value: 'Cerca un momento specifico nella canzone attuale.' },
          { name: '⏮️ Previous', value: 'Riproduce la canzone precedente in coda.' },
          { name: '🔀 Shuffle', value: 'Riproduce canzoni casuali.' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Comandi base**')
        .addFields(
          { name: '🏓 Ping', value: "Controlla la lentezza del bot." },
          { name: '🗑️ Clear', value: 'Cancella la coda di questo server.' },
          { name: '⏱️ Time', value: 'Visualizza il tempo di riproduzione della canzone attuale.' },
          { name: '🎧 Filter', value: 'Applica filtri per migliorare il suono come al proprio piacimento.' },
           { name: '🎵 Now Playing', value: 'Visualizza le informazioni sulle canzoni attualmente in riproduzione.' },
          { name: '🔊 Volume', value: 'Regolare il volume musicale [mettere ad alto volume è rischioso]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&')
      const button1 = new ButtonBuilder()
        .setLabel('Instagram')
        .setURL('https://www.instagram.com/alfra.og/')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://dsc.gg/purplehub2')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Donazione')
        .setURL('https://paypal.me/Fr42007')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};
