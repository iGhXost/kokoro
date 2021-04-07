const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
    try {
      await m.reply('Searching...')
        let res = await fetch(global.API('xteam', '/kusonime?q=' + text , {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(status@broadcast, img, MessageType.image, {
            quoted: m, caption: '*© kokoro-bot*'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['kusonime <query>']
handler.tags = ['weebs']
handler.command = /^kusonime$/i
handler.premium = true
handler.register = true
handler.limit = true

module.exports = handler