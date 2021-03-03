let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:

Ketik di *[TERMUX]*
1) pkg update && pkg upgrade
2) pkg install git -y
3) pkg install ffmpeg -y
4) pkg install imagemagick -y
5) pkg install nodejs -y

Setelah semuanya terinstall...
6) git clone https://github.com/Kokoronationz/kokoro
7) ls
8) cd kokoro

yang *terakhir*...
Penginstalannya :)
9) npm i
10) node index.js

Tinggal Scan QR code nya

_*#Enjoy...*_
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

