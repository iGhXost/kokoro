let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) m.reply('_*Jika bukan link group ini, mohon segera dihapus!!*_\nAtau kamu kena kick BOT?')
await conn.groupRemove(m.chat, [users])

  return true
}

module.exports = handler
