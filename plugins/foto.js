let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async (m, { conn, args }) => {
  let inputPath ='src/kuriyama.png'
  
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
    conn.sendFile(m.chat, inputPath, 'kuriyama.png', '404 not found', m)
  })
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

