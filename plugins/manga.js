let handler = async m => m.reply(`
┏━「 Manga」
┣ ❖ https://mangatx.com
┣ ❖ https://komikcast.com
┣ ❖ https://komiku.id
┣ ❖ https://mangaku.pro
┣ ❖ https://mangakita.net
┣ ❖ https://bacakomik.co
┣ ❖ https://kiryuu.co
┣ ❖ https://komikid.com
┣ ❖ https://komikfox.web.id
┣ ❖ https://westmanga.info
┣ ❖ https://mangaindo.web.id
┣ ❖ https://komikindo.co
┣ ❖ https://matakomik.com
┣ ❖ https://mangaid.click
┣ ❖ https://klikmanga.com
┣ ❖ https://komikmama.net
┣ ❖ https://maid.my.id
┣ ❖ https://komikav.com
┣ ❖ https://mangadex.org
┣ ❖ https://ngomik.net
┣ ❖ https://mangaku.pro
┣ ❖ https://boosei.com
┣ ❖ https://mgkomik.my.id
┗━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['manga']
handler.tags = ['weebs']
handler.command = /^ma(nga|nhwa)$/i

module.exports = handler