let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
  Waalaikumsalam Wr. Wb.
`.trim(), m)
}
handler.help = ['salam']
handler.tags = ['salam']
handler.customPrefix = /(\A$)/
handler.command = /^ssalamualaikum$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
