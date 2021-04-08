const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message) => {
  
  const Embed = new Discord.MessageEmbed()

  
  .setColor("RANDOM")
  .setTitle("Prince Müzik")
  .setDescription(`
 Müzik Bot v12 Yardım
Komutları Kullanmadan Önce Bir Sesli Kanala Giriş Yapmayı Unutma!
Genel Komutlar
<a:element:823589731291627520> **${config.prefix}play <müzikismi>**: İstenilen şarkıyı çalar.
<a:element:823589731291627520> **${config.prefix}pause**: Şarkıyı durdurur.
<a:element:823589731291627520> **${config.prefix}resume**: Durdurulan şarkıyı devam ettirir.
<a:element:823589731291627520> **${config.prefix}loop**: Şarkıyı tekrardan oynatır.
<a:element:823589731291627520> **${config.prefix}skip**: Varsa listedeki diğer şarkılara geçer.
<a:element:823589731291627520> **${config.prefix}stop**: Şarkıyı durdurur. 
<a:element:823589731291627520> **${config.prefix}np**: Çalan şarkıyı gösterir.
<a:element:823589731291627520> **${config.prefix}list**: Şarkıları gösterir.
<a:element:823589731291627520> **${config.prefix}mix**: Şarkıları karıştırır.
<a:element:823589731291627520> **${config.prefix}ping**: Botun gecikme süresini gösterir.
            

  **2020 © Prince | By FunsT**
» Prefixim: **${config.prefix}**
»[Botumuzu Ekleyin](https://discord.com/oauth2/authorize?client_id=789069072637231105&permissions=8&scope=bot)
»[Kod Sunucumuz](https://discord.gg/SQzAHHchgg)

`)
  
  .setImage("https://cdn.discordapp.com/attachments/813812028183019590/826001512563867648/standard_6.gif")
  .setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(Embed)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["invite", "davet", "help", "yardım"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'medya', 
    description: 'The Help Command',
    usage: 'yardım'
};