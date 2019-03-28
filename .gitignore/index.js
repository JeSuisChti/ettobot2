const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (",")
var nomserv = (Discord.Name)


bot.on('ready', function () {
    bot.user.setActivity('se programmer |' + prefix + 'help')
    console.log("Statut : Connecté")
    console.log("Activité : Ok")
    //bot.user.setAvatar('./Avatar.jpg')
    //console.log("Avatar : Ok")
})

bot.on('message', message=> {
    if(message.content === "Salut"){
    message.reply("Bonjour ! :nerd:");
    console.log("Commande exécuté : Salut");
    }
    if(message.content === prefix + "help"){
        console.log("Commande exécuté : help")
        var help = new Discord.RichEmbed()
            .setTitle("Voici une liste de toutes les commandes possibles")
            .setDescription("Toutes ces commandes vont vous permettre d'intéragir avec e-TToBot. Le préfixe actuel est `" + prefix + "`")
            .addField("Fun", " " + prefix + "bowling\n" + prefix + "pbowling\n" + prefix + "tbillard\n" + prefix + "billard (Hors-service)\n" + " ", true)
            .addField("Autres plateformes/serveur" , " " + prefix + "yt\n" + prefix + "autreserv\n" + " ", true)
            .setThumbnail('https://cdn.discordapp.com/attachments/511579258641186837/558766204328607781/Logo_deltaria.png')
            .setColor("0x0040FF")
            .setFooter("Bonne continuation !")
        message.channel.send(help)

    }
    if(message.content === prefix + "yt"){
        console.log("Commande exécuté : yt")
        var chaineyt = new Discord.RichEmbed()
            .setTitle("Chaîne YouTube de DelTTΔriΔ")
            .setDescription("Voici la chaîne Youtube du serveur. Trailer, musique du serveur et des vidéos y seront postés !")
            .setColor("0x0101DF")
            .addField("Chaîne YouTube" , "Suivez la chaîne Youtube du serveur [DelTTΔriΔ](https://www.youtube.com/channel/UCoRIwjrUoajmejlVA-0e4fA?disable_polymer=true)" , true)
            .setThumbnail('https://cdn.discordapp.com/attachments/511579258641186837/558766204328607781/Logo_deltaria.png')
        message.channel.send(chaineyt)

    }
    if(message.content === prefix + "pbowling"){
        console.log("Commande exécuté : pbowling")
        var pistebowling = new Discord.RichEmbed()
            .setTitle(":bowling:  Piste de bowling  :bowling:")
            .setDescription("Voici une piste de bowling, tout ce qu'il y a de plus normal !")
            .setImage("https://thumbs.dreamstime.com/thumblarge_2003/20033060.jpg")
            .setColor("0xF7FE2E")
            .setFooter("Utilise " + prefix + " bowling pour jouer au bowling")
        message.channel.send(pistebowling)

    }
    if(message.content === prefix + "test"){
        console.log("Commande exécuté : test")
        var testembed = new Discord.RichEmbed()
            .setTitle("TEST !!!")
            .attachFiles('./couleurs.jpg')
            .setColor("0xF7FE2E")
        message.channel.send(testembed)

    }
    if(message.content === prefix + "tbillard"){
        console.log("Commande exécuté : tbillard")
        var tablebillard = new Discord.RichEmbed()
            .setTitle(":8ball:  Table de billard  :8ball:")
            .setDescription("Voici une table de billard, tout ce qu'il y a de plus normal !")
            .setImage("https://www.mon-billard.com/blog/wp-content/uploads/2018/10/billiard-americain-placement-boules.jpg")
            .setColor("0xF7FE2E")
            .setFooter("Utilise " + prefix + " billard pour jouer au billard")
        message.channel.send(tablebillard)

    }
    if(message.content === prefix + "bowling"){
        console.log("Commande exécuté : bowling")
        var nbquilles = Math.floor(Math.random() * 11)
        var FBowling = new Discord.RichEmbed()
            .setColor('0xDF013A')
            .setTitle(':bowling:  Dommage  :bowling:')
            .addField("Tu n'as pas fait de strike, dommage !" , "Tu n'as renversé que " + nbquilles + " quille(s)" , true)
            .setFooter("Tu auras peut-être plus de chance la prochaine fois ;)")
        var SBowling = new Discord.RichEmbed()
            .setColor('0x01DF01')
            .setTitle(':bowling:  **S T R I K E**  :bowling:')
            .addField("Tu as fait un strike !", "Tu as renversé " + nbquilles + " quilles !", true)
        if(nbquilles == 10){
            message.channel.send(SBowling)
            console.log('Résultat : STRIKE')
        }else{
            message.channel.send(FBowling)
            console.log('Résultat : PERDU avec ' + nbquilles + ' quille(s)')
        }

    }
    if(message.content === prefix + "info") {
        console.log("Commande exécuté : server info")
        var servinfo = new Discord.RichEmbed()
            .setTitle("Informations concernant " + nomserv)
            .setDescription("Toutes ces commandes vont vous permettre d'intéragir avec e-TToBot. Le préfixe actuel est `" + prefix + "`")
            .addField(prefix + "bowling", "Te permet de jouer au bowling", true)
            .addField(prefix + "chaineyt", "Suivez la chaîne Youtube du serveur [DelTTΔriΔ](https://www.youtube.com/channel/UCoRIwjrUoajmejlVA-0e4fA?disable_polymer=true)")
            .setColor("0x0040FF")
            .setFooter("Bonne continuation !")
        message.channel.send(servinfo)
    }
    if (message.content === prefix + "avatar") {
        console.log("Commande exécuté : avatar")
        var avatar = new Discord.RichEmbed()
            .setTitle("Voici ton avatar")
            .setImage(message.author.avatarURL)
            .setColor("0xFFFF00")
        message.channel.send(avatar)
    }


});

bot.login(process.env.TOKEN)


bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur le serveur DelTTAriA ' + member.displayName)
    }.catch(console.error)
)})
