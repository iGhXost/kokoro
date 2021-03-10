let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '0', 'WhatsApp', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.register = true

handler.command = /^(owner|creator)$/i

module.exports = handler
