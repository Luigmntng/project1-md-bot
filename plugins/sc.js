let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Bot Aktif Selama ${uptime}`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://cdn.anisearch.com/images/character/cover/full/83/83046.webp')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }

   conn.sendBut(m.chat, `chat owner ngab`, `wa.me/6282146092695`, 'Owner', '.owner', ftrol)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
