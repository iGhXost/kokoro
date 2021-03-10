let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[1]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/ig', {
    url: args[1]
  }, '0148bbad1a10b740'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.result) throw json
  let { name, username, likes, caption, data } = json.result
  let text = `
Username: ${name} *(@${username})*
${likes} Likes
Caption:
${caption}
`.trim()
  for (let { data: url, type } of data)
    conn.sendFile(m.chat, url, 'ig' + (type == 'video' ? '.mp4' : '.jpg'), text, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig(dl)?)$/i

module.exports = handler
