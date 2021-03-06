let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupDemoteAdmin(m.chat, users)
}
handler.help = ['demote','member','v'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(demote|member|v)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler
