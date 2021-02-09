const { timeStamp } = require("console");
const Discord = require("discord.js");
const { link } = require("fs");
const { setTimeout } = require("timers");
const client = new Discord.Client();
const config = require("./config.json");
let prefix = "?"

client.login(process.env.TOKEN);
client.on("ready", async () => {
    console.log(client.user.username + " est en ligne !");
})
let points = []
let ID = []

function punch(p){
    switch(p){
        case 0:
            return "https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446"
        case 1:
            return "https://media1.tenor.com/images/65b4aa15d44cfeed0ad137048a3c2250/tenor.gif?itemid=17175633"
        case 2:
            return "https://media1.tenor.com/images/0d0afe2df6c9ff3499a81bf0dab1d27c/tenor.gif?itemid=15580060"
        case 3:
            return "https://media1.tenor.com/images/2487a7679b3d7d23cadcd51381635467/tenor.gif?itemid=11451829"
        case 4:
            return "https://media1.tenor.com/images/ee3f2a6939a68df9563a7374f131fd96/tenor.gif?itemid=14210784"
        case 5:
            return "https://media1.tenor.com/images/b111863f0714504a8ba22a0c68e78f32/tenor.gif?itemid=12373244"
        case 6:
            return "https://media1.tenor.com/images/1c986c555ed0b645670596d978c88f6e/tenor.gif?itemid=13142581"
        case 7:
            return "https://media1.tenor.com/images/92f4595d3f6ac39b6c175eb3d454fec2/tenor.gif?itemid=10460715"
        case 8:
            return "https://media1.tenor.com/images/812c384875e4b52dbd7c34d6d8480fb7/tenor.gif?itemid=17655777"
        case 9:
            return "https://media1.tenor.com/images/5511a8309a1719987a27aa7b1ee7da04/tenor.gif?itemid=12303482"
    }
}

function hug(p){
    switch(p){
        case 0:
            return "https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif?itemid=14246498"
        case 1:
            return "https://media1.tenor.com/images/4db088cfc73a5ee19968fda53be6b446/tenor.gif?itemid=14637016"
        case 2:
            return "https://media1.tenor.com/images/3c83525781dc1732171d414077114bc8/tenor.gif?itemid=7830142"
        case 3:
            return "https://media1.tenor.com/images/34a1d8c67e7b373de17bbfa5b8d35fc0/tenor.gif?itemid=8995974"
        case 4:
            return "https://media1.tenor.com/images/9dddcb8d880010200af468d781b4bbcd/tenor.gif?itemid=16831471"
        case 5:
            return "https://media1.tenor.com/images/e9d7da26f8b2adbb8aa99cfd48c58c3e/tenor.gif?itemid=14721541"
        case 6:
            return "https://media1.tenor.com/images/02b650608304676ff8ce486d4ba772c5/tenor.gif?itemid=14924015"
        case 7:
            return "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093"
        case 8:
            return "https://media1.tenor.com/images/c2156769899d169306d16b063a55d0b2/tenor.gif?itemid=14584871"
        case 9:
            return "https://media1.tenor.com/images/aeb42019b0409b98aed663f35b613828/tenor.gif?itemid=14108949"
    }
}
function slap(p){
    switch(p){
        case 0:
            return "https://media1.tenor.com/images/612e257ab87f30568a9449998d978a22/tenor.gif?itemid=16057834"
        case 1:
            return "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956"
        case 2:
            return "https://media1.tenor.com/images/fe39cfc3be04e3cbd7ffdcabb2e1837b/tenor.gif?itemid=15144612"
        case 3:
            return "https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720"
        case 4:
            return "https://media1.tenor.com/images/e8f880b13c17d61810ac381b2f6a93c3/tenor.gif?itemid=17897236"
        case 5:
            return "https://media1.tenor.com/images/47ac5507e827fa6a49a1aff6b070c3eb/tenor.gif?itemid=13278667"
        case 6:
            return "https://media1.tenor.com/images/c25d3286056d127b1eeeb1ff657b0580/tenor.gif?itemid=17314633"
        case 7:
            return "https://media1.tenor.com/images/53f7a45f41b45f46c9a6c4dc154e58c5/tenor.gif?itemid=16268549"
        case 8:
            return "https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394"
        case 9:
            return "https://media1.tenor.com/images/5ab22ca640af20cd3b479694bde9e25c/tenor.gif?itemid=4961067"
    }
}

let p = 0
let role = ""

client.on("message", async (message) => {

    
    if (message.author.bot) return;
    if (message.channel.type === "dm"){
        message.channel.send("ne me parle pas en DM jte connais pas ! ( ≧Д≦)")
    }
    if (message.content == prefix + "help"){
        message.channel.send(new Discord.MessageEmbed()
        .setColor('00225F')
        .setTitle('**__Commandes bot__**')
        .setFooter("Une demande de "  + message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
        .addField("Utile :", "prefix\r" + prefix + "lien *<lien du jeu>*\r" + prefix + "setPrefix *<nouveau prefix>*\r", true)
        .addField("Fun :", prefix + "say *<message>*\r" + prefix + "ping\r" + prefix + "punch *<mention>*\r" + prefix + "hug *<mention>*\r" + prefix + "slap *<mention>*\r" + prefix + "8ball *question*\r", true) 
        .addField("Prefix :", prefix)
        .setTimestamp()
        .setImage("https://media1.tenor.com/images/e7ab03bac23eb9b3f5bd67ba27ca7b08/tenor.gif?itemid=18158245")
        .setThumbnail("https://i.pinimg.com/736x/36/bf/b0/36bfb07092a05e5fc652fe0760b8a859.jpg")
        )
        message.delete({timeout: 2000})
    }
    if(message.content == prefix + "cyril"){x
        message.channel.send("<@310398670405238784>")
        message.channel.send(new Discord.MessageEmbed()
        .setDescription("rappelle toi...")
        .setImage("https://media.discordapp.net/attachments/805549366214656000/805555006622269440/unknown-1.png")
        .setColor("5027F8")
        )
    }
    if(message.content == "prefix"){
        message.channel.send(new Discord.MessageEmbed()
        .setColor("6AFF36")
        .setTitle("Le prefix actuel est :")
        .setDescription("```" + prefix + "```\r***" + prefix + "setPrefix <nouveau prefix> pour le changer***")
        .setTimestamp()
        .setFooter("Une demande de " + message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
        )
    }
    if (message.content.startsWith(prefix + 'punch')){
        p = p + 1
        if(p == 10){
            p = 0
        }
        message.channel.send(new Discord.MessageEmbed()
        .setColor("#8B0000")
        .setDescription("**<@" + message.author.id + "> frappe violement" + message.content.slice(prefix.length + 5 , message.content.length) + " !**")
        .setImage(punch(p))
        )
        message.delete({timeout: 3000})
    }
    if (message.content.startsWith(prefix + 'hug')){
        p = p + 1
        if(p == 10){
            p = 0
        }
        if(message.content.slice(prefix.length + 3, message.content.length) == ""){
            message.channel.send(new Discord.MessageEmbed()
            .setTitle("Erreur")
            .setAuthor(message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
            .setDescription("*Vous ne pouvez pas faire un câlin au vide*")
            .setColor("FB3A3A")
            .setThumbnail("https://cdn.discordapp.com/emojis/730046196084637739.gif?v=1")
            )
            return
        }
        message.channel.send(new Discord.MessageEmbed()
        .setColor("FB3ACC")
        .setDescription("**<@" + message.author.id + "> fait un câlin à" + message.content.slice(prefix.length + 3 , message.content.length) + ".**")
        .setImage(hug(p))
        )
        message.delete({timeout: 3000})
    }
    if (message.content.startsWith(prefix + 'slap')){
        p = p + 1
        if(p == 10){
            p = 0
        }
        if(message.content.slice(prefix.length + 4, message.content.length) == ""){
            message.channel.send(new Discord.MessageEmbed()
            .setTitle("Erreur")
            .setAuthor(message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
            .setDescription("*Vous ne pouvez pas mettre une baffe au vide*")
            .setColor("FB3A3A")
            .setThumbnail("https://cdn.discordapp.com/emojis/730046196084637739.gif?v=1")
            )
            return
        }
        message.channel.send(new Discord.MessageEmbed()
        .setColor("005DFF")
        .setDescription("**<@" + message.author.id + "> met une baffe à " + message.content.slice(prefix.length + 4 , message.content.length) + ".**")
        .setImage(slap(p))
        )
        message.delete({timeout: 3000})
    }
    if (message.content.startsWith(prefix + "say")){
        message.channel.send(message.content.slice(prefix.length + 4, message.content.length))
        message.delete()
    }
    if (message.content == prefix + "ping"){
        message.reply(new Discord.MessageEmbed()
        .setColor('ACF1FD')
        .setImage('https://media1.tenor.com/images/82a2d494bead831b81c37180079665c1/tenor.gif?itemid=17406210')
        .setTitle('Pong !')
        .setTimestamp()
        .setFooter("Une demande de " + message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
        )
    }
    if(message.content == prefix + 'userInfo'){
        message.channel.send(new Discord.MessageEmbed()
        .setColor(FFFFFF)
        .setTitle("Infos sur l'utilisateur : " + message.author.username)
        .setThumbnail('https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
        .addField('Pseudo complet :', message.author.tag)
        .addField('Identifiant :', message.author.id)
        .addField('Création du compte : ', message.author.createdAt.toLocaleDateString())
        .setTimestamp()
        .setFooter("Une demande de " + message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
        )
    }
    if(message.content == prefix + "serverInfo"){
        message.channel.send(new Discord.MessageEmbed()
        .setColor("72B1FF")
        .setAuthor(message.guild.name, "https://cdn.discordapp.com/icons/" + message.guild.id + "/" + message.guild.icon)
        .setThumbnail("https://cdn.discordapp.com/icons/" + message.guild.id + "/" + message.guild.icon)
        .setTitle("Information sur le serveur :")
        .addField("Créateur :", "<@" + message.guild.owner.id + ">")
        .addField("Identifiant :", message.guild.id)
        .addField("Création du serveur :", message.guild.createdAt.toLocaleDateString(), true)
        .addField("Boost", message.guild.premiumSubscriptionCount, true)
        .setTimestamp()
        )
    }
    if(message.content.startsWith(prefix + "setPrefix")){
        let ancien = prefix
        let nouv = message.content.slice(prefix.length + 10, message.content.length)
        if(nouv == ""){
            message.channel.send(new Discord.MessageEmbed()
            .setTitle("Erreur")
            .setAuthor(message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
            .setDescription("*Vous n'avez pas entrez de prefix.*")
            .setColor("FB3A3A")
            .setThumbnail("https://cdn.discordapp.com/emojis/730046196084637739.gif?v=1")
            )
            return
        }
        if(nouv.indexOf(" ") !== -1){
            message.channel.send(new Discord.MessageEmbed()
            .setTitle("Erreur")
            .setAuthor(message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
            .setDescription("*Le prefix ne peut pas contenir d'espace.*")
            .setColor("FB3A3A")
            .setThumbnail("https://cdn.discordapp.com/emojis/730046196084637739.gif?v=1")
            )
            return
        }
        if(nouv.length > 3){
            message.channel.send(new Discord.MessageEmbed()
            .setTitle("Erreur")
            .setAuthor(message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
            .setDescription("*Le prefix est trop long*")
            .setColor("FB3A3A")
            .setThumbnail("https://cdn.discordapp.com/emojis/730046196084637739.gif?v=1")
            )
            return
        }
        prefix = message.content.slice(prefix.length + 10, message.content.length)
        message.channel.send(new Discord.MessageEmbed()
        .setColor("3AFB54")
        .setDescription("*" + message.author.username + " a modifié le prefix,* \r**Ancien prefix : " + ancien + "**\r**Nouveau prefix : " + nouv + "**")
        .setAuthor(message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
        )
    }
    if (message.content.startsWith(prefix + "8ball")){
        let replies = ["Oui", "non", "peut être", "evidemment", "bien sur que non", "bah oui", 'tu crois ?', "pas du tout", "bien au contraire...", "prends tes affaires et rentre chez toi je ne parle pas aux inconnus"]
        let reponse = Math.floor(Math.random() * replies.length)
        message.channel.send(new Discord.MessageEmbed()
        .setColor("FCFCFC")
        .setTitle("8Ball")
        .setThumbnail("https://i.pinimg.com/originals/45/fa/52/45fa523f06b6a3660d21352a4aa76753.png")
        .addField("Question :", message.content.slice(prefix.length + 6, message.content.length))
        .addField("Réponse :", replies[reponse])
        .setTimestamp()
        .setFooter("Une demande de " + message.author.username, 'https://cdn.discordapp.com/avatars/' + message.author.id + "/" + message.author.avatar)
        )
    }
    if(message.content == prefix + "clan"){
        let t = Math.floor(Math.random() * 12)
        switch(t){
            case 0:
                role = "Uchiha"
                break;
            case 1:
                role = "Uzumaki"
                break;
            case 2:
                role = "Hatake"
                break;
            case 3:
                role = "Hyūga"
                break;
            case 4:
                role = "Nara"
                break;
            case 5:
                role = "Ōtsutsuki"
                break;
            case 6:
                role = "Sarutobi"
                break;
            case 7:
                role = "Senju"
                break;
            case 8:
                role = "Yamanaka"
                break;
            case 9:
                role = "Haruno"
                break;
            case 10:
                role = "Inuzuka"
                break;
            case 11:
                role = "Akimichi"
                break;
            case 12:
                role = "Namikaze"
                break;
        }
        if(message.channel.id == "808794564928077906"){
            message.member.roles.add(message.guild.roles.cache.find(r => r.name == role))
            message.member.roles.add(message.guild.roles.cache.find(r => r.id == "808801898362437632"))
            message.member.roles.remove(message.guild.roles.cache.find(r => r.id == "808801794440036402"))
            message.author.createDM().then(channel => {
                channel.send('Ton clan est ' + role)
            })
        }
    }
    if(message.content == prefix + "village"){
        let t = Math.floor(Math.random() * 7)
        switch(t){
            case 0:
                role = "Konoha"
                break;
            case 1:
                role = "Kumo"
                break;
            case 2:
                role = "Iwa"
                break;
            case 3:
                role = "Ame"
                break;
            case 4:
                role = "Taki"
                break;
            case 5:
                role = "Suna"
                break;
            case 6:
                role = "Kiri"
                break;
            case 7:
                role = "Oto"
        }
        if(message.channel.id == "808801603016327238"){
            message.member.roles.add(message.guild.roles.cache.find(r => r.name == role))
            message.member.roles.add(message.guild.roles.cache.find(r => r.id == "808801794440036402"))
            message.author.createDM().then(channel => {
                channel.send('Ton village est ' + role)
            })
        }
    }
    if(message.content == prefix + "technique"){
        let t = Math.floor(Math.random() * 8)
        switch (t){
            case 0:
                role = "ninjutsu"
                break;
            case 1:
                role = "ninjutsu medical"
            case 2:
                role = "ninjutsu réincarnation"
                break;
            case 3:
                role = "genjutsu"
                break;
            case 4:
                role = "taijutsu"
                break;
            case 5:
                role = "dôjutsu"
                break;
            case 6:
                role = "shurikenjutsu"
                break;
            case 7:
                role = "hijutsu"
                break;
            case 8:
                role = "bunshijutsu"
                break;
        }
        if(message.channel.id == "808801676852723725"){
            message.member.roles.add(message.guild.roles.cache.find(r => r.name == role))
            message.member.roles.remove(message.guild.roles.cache.find(r => r.id == "808801898362437632"))
            message.member.roles.add(message.guild.roles.cache.find(r => r.id == "808793884606988351"))
            message.author.createDM().then(channel => {
                channel.send('Ta technique est le ' + role)
            })
        }
    }
    if(message.channel.id == "808801603016327238"){message.delete()}
    if(message.channel.id == "808794564928077906"){message.delete()}
    if(message.channel.id == "808801676852723725"){message.delete()}
})