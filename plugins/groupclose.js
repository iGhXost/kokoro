const { GroupSettingChange } = require('@adiwajshing/baileys')
/*
made with love, by ariffb
http://wa.me/6283128734012
*/
let handler = async (m, { conn, args, usedPrefix }) => {
    if (args[0] === 'open') {
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
        conn.fakeReply(m.chat, `*Grup berhasil dibuka!*`, '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, m.chat)
    } else if (args[0] === 'close') {
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
        conn.fakeReply(m.chat, `*Grup berhasil ditutup!*`, '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, m.chat)
    } else if (args[0] === 'buka') {
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
        conn.fakeReply(m.chat, `*Grup berhasil dibuka!*`, '0@s.whatsapp.net', `*${conn.user.name} Verified Bot*`, m.chat)
    } else if (args[0] === 'tutup') {
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
        conn.fakeReply(m.chat, `*Grup berhasil ditutup!*`, '0@s.whatsapp.net', `*${conn.user.name} Verified Bot*`, m.chat)
    } else {
        conn.fakeReply(m.chat, `*Contoh : ${usedPrefix}grup tutup*`, '0@s.whatsapp.net', `*${conn.user.name} Verified Bot*`, m)
    }
}

handler.help = ['group <open/losee>']
handler.tags = ['group']
handler.command = /^(group|grup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler