let { MessageType } = require('@adiwajshing/baileys')
let num = /([0-9])$/i
let pajak = 4
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah XP Yang Akan Anda Slot'
    if (!num.test(text)) throw 'Hanya Angka'
    let xp = `${text}`
    let jackpot = Math.ceil(xp * pajak)
    let win = Math.ceil(xp / 2)
    if (xp < 5) throw 'Minimal 5'
    let users = global.DATABASE._data.users
    if (xp > users[m.sender].exp) throw 'XP Anda Tidak Cukup'
    let emojis = ["🍏", "🫐", "🪙", "🍇", "🍌", "🥒", "🍒"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = "_*YOU WIN*_";
        hasil = `Win With 3 Thing Common +Rp.${jackpot}`;
        gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`;
        global.DATABASE._data.users[m.sender].exp += jackpot
        await conn.fakeReply(m.chat, `*[🎰 VIRTUAL SLOT 🎰]*\n\n${gcha}\n`, '0@s.whatsapp.net', `${hasil}`, m)

    } else if (a == b || a == c || b == c) {
        end = "_*YOU WIN*_";
        hasil = `Win With 2 Things Common +Rp.${win}`;
        gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`;
        global.DATABASE._data.users[m.sender].exp += win
        await conn.fakeReply(m.chat, `*[🎰 VIRTUAL SLOT 🎰]*\n\n${gcha}\n`, '0@s.whatsapp.net', `${hasil}`, m.chat)
    } else {
        end = "_*YOU LOSE*_";
        hasil = `Hopefully You Are lucky Next -Rp.${xp}`;
        gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`;
        global.DATABASE._data.users[m.sender].exp -= xp
        await conn.fakeReply(m.chat, `*[🎰 VIRTUAL SLOT 🎰]*\n\n${gcha}\n`, '0@s.whatsapp.net', `${hasil}`, m.chat)
    }
}
handler.help = ['slot2']
handler.tags = ['game']
handler.command = /^(slot2)$/i
handler.group = true
handler.register = true

handler.exp = 10
handler.limit = true

module.exports = handler