let handler = async m => m.reply(`
Waalaikumsalam Wr. Wb. ${username}
`.trim()) // Tambah sendiri kalo mau
handler.help = ['salam']
handler.tags = ['salam']
handler.before = /^Assalamualaikum$/i

module.exports = handler
