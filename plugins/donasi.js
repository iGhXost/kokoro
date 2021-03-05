let handler = async m => m.reply(`
┏━━━━「 Donasi 」
┣ ❖ by.U [085156381082]
┣ ❖ Tri    [0895361677059]
┣ ❖ Dana|GoPay|OVO 
┣ ❖ [0895361677059]
┗━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
