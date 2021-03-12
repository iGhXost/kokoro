const { MessageType } = require('@adiwajshing/baileys')
const { sticker, sticker2 } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    if (/image|video/.test(q.mimetype || '')) {
      let img = await q.download()
      if (!img) throw img
      stiker = await sticker2(img)
    if (isGroupMsg && isAutoStickerOn && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await bocchi.sendImageAsSticker(from, imageBase64, { author: '@Kokoronationz', pack: 'ココロナシ', keepScale: false })
            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
    } else if (args[0]) stiker = await sticker2(false, args[0])
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}
handler.help = ['sticker (reply media)', 'sticker <url>']
handler.tags = ['sticker']
handler.command = /^s|s(tiker|ticker)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

