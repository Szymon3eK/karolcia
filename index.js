const Discord = require('discord.js');
const client = new Discord.Client();
var CronJob = require('cron').CronJob;
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();


const config = require('./config.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Jestem dziewczyna ${config.imie} uwu 😍😘`)
});

client.on('ready', () => {

  const femboy = client.users.cache.get(config.id)
  const zacheta = ['','Zapierdalaj chuju gadac ze mna 🥰😍😘', 'Chodz pokaze ci na kamerce swoje wdzieki 😏', 'Chodz gadac uwu 😍']
  var liczbazachet = Math.floor(Math.random() * (2 - 1)) + 1;
  console.log(`Jaka zacheta ${liczbazachet}`)

  const channel = client.channels.cache.get("1006608306212712548")
 
  channel.join().then(success => {
    console.log('wbilam na kanal')
    femboy.send(zacheta[liczbazachet])
  })
  .catch(err => {
    channel.leave()
    console.log('jakis blad many')
    femboy.send('Przepraszam, ale dzisiaj mam jakies problemy i nie moge wbic na kanal 😥')
    console.log(err)
  })
})

client.on("ready", () => {
    var job = new CronJob(
      '*/10 * * * * *',
      function() {
        var soundboardrandom = Math.floor(Math.random() * (5 - 1)) + 1;
        //console.log(`Wybrano glos ${soundboardrandom}`)
        const channel = client.channels.cache.get("1006608306212712548")
        channel.join().then((connection) => {
        const dispatcher = connection.play(`./soundboard/${soundboardrandom}.mp3`);
        })
      },
      null,
      true,
      'America/Los_Angeles'
    );
})

client.on("ready", () => {

  const femboy = client.users.cache.get(config.id)

  setTimeout(function() {
    console.log('nudle odblokowane B))')
    var job = new CronJob(
      '*/5 * * * *',
      function() {
        DabiClient.nsfw.real.thighs().then(json => {
          femboy.send(`${config.imie}, mam cos dla cb 😼`)
          femboy.send(json.url)
      }).catch(error => {
          console.log(error);
      });
  
  
  
      },
      null,
      true,
      'America/Los_Angeles'
    );
  }, 10000)
})


client.login(config.token);