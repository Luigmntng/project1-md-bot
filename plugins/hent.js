let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, command, usedPrefix }) => {

let info = './media/PicsArt_03-30-04.11.24.jpg'
		
	conn.sendButtonImg(m.chat, info, `Join neraka deck? `, `wm`, 'Iyah bg saya khilaf', `tch`, m)

}

handler.help = ['ass', 'bdsm', 'blowjob', 'boobjob', 'cum', 'creampie', 'cuckold', 'ero', 'elves', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'incest', 'masturbation', 'pantsu', 'orgy', 'tentacles', 'thighs', 'uniform', 'vagina', 'yuri' ]
handler.tags = ['hentai']
handler.command = /^(ass|bdsm|blowjob|boobjob|cum|creampie|cuckold|ero|elves|femdom|foot|gangbang|glasses|hentai|incest|masturbation|pantsu|orgy|tentacles|thighs|uniform|vagina|yuri)$/i

module.exports = handler
