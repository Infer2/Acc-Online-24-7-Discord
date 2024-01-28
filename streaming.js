var http = require("http");
http.createServer((function (e, t) {
    t.write("I'm alive"), t.end()
  }))
  .listen(8080);
const {
  Client: Client
  , RichPresence: RichPresence
} = require("discord.js-infer"), client = new Client;
client.on("ready", (async () => {
  console.log(`${client.user.username} is ready!`);
  const e = await RichPresence.getExternal(client, "857843402807967776", "https://media.discordapp.net/attachments/1158477807618379908/1199079729651785758/artworks-Dt5Dc966QhGnGPkA-drQZyA-t500x500.jpg?ex=65c13d05&is=65aec805&hm=c6a281070d10e43b6ac390ece987479d8902a4798e1613fdf5b454e8ef506a53&=&format=webp&width=562&height=562")
    , t = (new RichPresence)
    .setType(1)
    .setURL("https://www.youtube.com/watch?v=9SH_iSb3-HU")
    .setName("On My Mind")
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(e[0].external_asset_path);
  let s = 0;
  const n = ["မင်းကျေနပ်အောင်", "မထားနိုင်တဲ့လူ", "အမှားများတွေ့ရင် အမှန်ပြင်ပေးမိသူ", "စေတနာစကားမျာ နားမှာခါးသလား", "လောကကြီးထဲ", "ကောင်းမွန်စွာနဲ့", "လမ်းလျှေက်တတ်ရင် ဒီအသည်းနှလုံးကို", "ခွဲလိုက် စိတ်လိုက် ပိုင်းလိုက်", "မလိုချင်ပါဘူး", "မင်းရဲ့တုံ့ပြန်မှု", "တစ်နေ့နေ့ အမြင့်ကိုပျံသန်းသွားရင်", "နင်ခွဲခဲ ထားခဲ့ မေ့ခဲ့", "ငါရင်ခွင်ကို...", "ထပ်ဖန်တလဲလဲ", "မင်းညာနေလည်း", "အခုတော့မင်းကို ပစ်မသွားရက်သူ", "ဒဏ်ရာများနဲ့ မွေ့လျောတဲ့လူ", "လောကကြီးကြာင်း", "နားမလည်ပါဘူး", "ဘဝရဲ့ အဓိပ္ပာယ်မသိသေးတဲ့အရွယ်", "ချစ်လိုက် မုန်းလိုက် ကစားလိုက်", "ငါမလိုချင်ဘူး", "မင်းရဲ့တုံ့ပြန်မှု", "တစ်နေ့နေ့ အမြင့်ကိုပျံသန်းသွားရင်", "နင်ခွဲခဲ ထားခဲ့ မေ့ခဲ့", "ငါရင်ခွင်ကို...", "ဟိုး အမြင့်မှာပျံတဲ့တစ်နေ့", "ငါ့စကားတိုင်းဟာ မှန်တဲ့တစ်နေ့", "မင်းဘဝမှာငါ့ကို တစ်ခေါက်တစ်ခါ သတိရရင်", "ငါ့အတွက် အားလုံး ပြည့်စုံ...", "ငါအသက်ရှက်နိုငါပြီ"];
  t.setDetails(n[s]), client.user.setPresence({
    activities: [t]
  }), setInterval((() => {
    s = (s + 1) % n.length, t.setDetails(n[s]), client.user.setPresence({
      activities: [t]
    })
  }), 6225)
})), client.login(process.env.token);
