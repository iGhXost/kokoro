let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async (m, { conn }) => {

if (quotedMessage) {
				message.message = quotedMessage;
			}

			if (!message.message.imageMessage || message.message.imageMessage.mimetype != "image/jpeg") {
				conn.sendMessage(senderNumber, "Tidak ada gambar :)", MessageType.text, { quoted: message, detectLinks: false });
				break;
			}

			const image = await conn.downloadMediaMessage(message);
			const imageBase64 = image.toString("base64");

			const response = await axios.post("https://trace.moe/api/search", { "image":imageBase64 });
			const result = response.data.docs[0];

			const text = `Nama Anime : _${result.title_romaji}_\nSeason : _${result.season}_\nEpisode : _${result.episode}_\nAkurasi : _${result.similarity}_`
			conn.sendMessage(senderNumber, text, MessageType.text, { quoted: message });
			break;
			
}
handler.help = ['wait']
handler.tags = ['weebs']
handler.command = /^(wait)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler