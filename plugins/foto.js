let handler  = async (m, { conn, args }) => {
  let foto ='src/kuriyama.png'
  
  let mentionedJid = [who]
    conn.sendFile(m.chat, foto, 'kuriyama.png', '404 not found', m)
}
handler.help = ['foto']
handler.tags = ['foto']
handler.command = /^foto$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

