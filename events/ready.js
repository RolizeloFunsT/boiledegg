const config = require("../config.json")
const log = message => {
  
    console.log(`${message}`)
}

module.exports = async client => {
  
client.user.setActivity(`.yardım | Prince`, {
type: "STREAMING",
url: "https://www.twitch.tv/theefunst"})
    log(`[BOT] Aktif, Komutlar Yüklendi.`)
  }
