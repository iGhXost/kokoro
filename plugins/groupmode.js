let handler  = async (m, { conn, args }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ GROUP MODE ]*\n\non or off !`, m)
	} else if(args[0] == 'on') {
    global.DATABASE._data.groupMode = true
		conn.reply(m.chat, `*[ GROUP MODE ]*\n\nBot berhasil diubah ke Grup saja.\nPerintah bot tidak dapat digunakan dalam obrolan pribadi bot`, m)
	} else if(args[0] == 'off') {
    global.DATABASE._data.groupMode = false
		conn.reply(m.chat, `*[ GROUP MODE ]*\n\nMode khusus Grup telah berhasil dinonaktifkan.\nAnda dapat menggunakan bot dalam obrolan pribadi`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*[ GROUP MODE ]*\n\non or off !`, m)
	} 
}
handler.help = ['groupmode *on/off*']
handler.tags = ['owner']
handler.command = /^(groupmode)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 0
module.exports = handler
