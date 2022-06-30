/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['212636249972']
global.ownerName = 'Akashi'
global.packname = 'By Volvano'
global.author = 'Senpai'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sei'

//Message Nya Ubah Disini
global.mess = {
admin: '*انتا مش ادمن*',
botAdmin: '*انا مش ادمن ياااد هنفد لك طلبك ازاي يعني*',
botOwner: '*للمالك فقط*',
group: 'Only Group!',
private: 'Only Private Chat',
wait: '*استنا شوي حبيب*',
done: '*تم .اي خدمه ؟*'
}

//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
