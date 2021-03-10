let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/simsimi', { kata: text }, '7af5141d99649c4d'))
  let json = await res.json()
  if (json.status) m.reply(json.jawaban)
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i
handler.register = true

module.exports = handler

