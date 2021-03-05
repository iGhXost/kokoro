let handler = m => m

let text = /assalamualaikum|samlekom\/{8,15})/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let istext = text.exec(m.text)

  if (chat.text && istext) m.reply('Waalaikumsalam Wr. Wb.')

  return true
}

module.exports = handler
