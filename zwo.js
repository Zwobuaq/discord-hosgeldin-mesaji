client.on("guildMemberAdd", member => { // Zwobuaq

    require("moment-duration-format") // Zwobuaq
      var zwoüsayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")// Zwobuaq

      var züs = zwoüsayısı.match(/([0-999])/g)// Zwobuaq

      zwoüsayısı = zwoüsayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()// Zwobuaq

      if(züs) {// Zwobuaq

        zwoüsayısı = zwoüsayısı.replace(/([0-9999])/g, d => {// Zwobuaq

          return {// Zwobuaq

            '0': `0`, // SAYI 0

            '1': `1`, // SAYI 1

            '2': `2`, // SAYI 2

            '3': `3`, // SAYI 3

            '4': `4`, // SAYI 4

            '5': `5`, // SAYI 5

            '6': `6`, // SAYI 6

            '7': `7`, // SAYI 7

            '8': `8`, // SAYI 8

            '9': `9`}[d];})} // SAYI 9

    Array.prototype.random = function() {// Zwobuaq

    return this[Math.floor(Math.random() * this.length)];
// Zwobuaq
    }  

    let seskanal = [// Zwobuaq

    `<#V.Confirmed kanal id 1>`, // <#ID Yİ BUNLARIN ARASINA AT>

    `<#V.onfirmed kanal id 2>`,

    `<#V.Confirmed kanal id 3>`

]; // Zwobuaq

  const zk = member.guild.channels.cache.find(r => r.id === `hgkanalid`); // Buraya Hoşgeldin (welcome) kanalının ID yi yaz

    let user = client.users.cache.get(member.id); // Zwobuaq

    require("moment-duration-format");// Zwobuaq

         const kurulu2 =  moment(member.user.createdTimestamp).fromNow()    // Zwobuaq

      const kurulus = new Date().getTime() - user.createdAt.getTime();  // Zwobuaq

     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 

    var kontrol;// Zwobuaq

  if (kurulus < 1296000000) kontrol = '<a:Red emoji>' // <a:Bunların arasına ID yaz>

  if (kurulus > 1296000000) kontrol = '<a:kabul emoji>'// Zwobuaq

    moment.locale("tr");// Zwobuaq

    kanal.send(`

 Zwo'a hoş geldin <@`+ member + `>🎉

  \`••❯\` Hesabın **`+ moment(member.user.createdTimestamp).format("LLL") +`** tarihinde (\``+kurulu2+`\`) `+kontrol+` 

  \`••❯\` Sunucu kurallarımız <#KURALLAR KANALININ İD> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza 

  işlemlerin kuralları okuduğunu varsayarak gerçekleştirilicek.

  \`••❯\` Sunucumuzun `+zwoüsayısı+`. üyesisin Tagımız (\`TAG BURAYA\`) alarak bizlere destek olaiblirsin. Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor yetkililerimiz seninle ilgilenecektir! İyi eğlenceler.

**>**`+ seskanal.random() +` **Kanalına girerek saniyeler içerisinde kayıt olabilirsiniz <**`)});
// Zwobuaq
