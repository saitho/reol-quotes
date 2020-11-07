const quotes = [
  {
    text: "Want you to get high\nWe want you to aim high",
    song: "Kinjitou",
    youtube: '_87mpz7-5a8',
    writers: ["Reol", "Giga"]
  },
  {
    text: "If you look serious again you'll get hurt\n" +
      "Let's believe it, that \"okay\"\n" +
      "If she liked you, if you could turn back in time\n" +
      "I'm sure it'll be much better than now",
    text_jp: "君はまた真面目な顔して傷付くんだ\n" +
      "信じましょう　その“いいな”\n" +
      "あの子に好かれたら　時を戻せたら\n" +
      "今よりきっと　ずっといいな",
    song: "GRIMOIRE",
    youtube: '',
    writers: ["Reol", "Giga"]
  },
  {
    text: "Teach me about the exchange, exchange of dialogue missing in my words\n" +
      "Yeah, let’s quarrel about trivial things; I want to feel something special",
    text_jp: "台詞にない言葉　交換、交換おしえて\n" +
      "そうくだらないを　言い合いたい　特別を感じたい",
    song: "THE SIXTH SENSE",
    youtube: 'Ue6VQTcKPQo',
    writers: ["Reol"]
  },
  {
    text: "My life's unplanned, I’m a no holds barred Bad Girl\n" +
      "I got no use for boredom, now ain’t that right?\n" +
      "Follow after me and sing along!",
    text_jp: "人生は無計画　なんでもありのBad Girl\n" +
      "退屈いらねぇ　なあそうだろ\n" +
      "真似して歌いなよ",
    song: "HYPE MODE",
    youtube: 'JhqtYOnNrTs',
    writers: ["Reol"]
  },
  {
    text: "That's right, we are monsters that continue to struggle\n" +
      "Destroying everything we touch\n" +
      "Because we don't have time to look back",
    text_jp: "そうさ　僕らもがき続けてゆくモンスター\n" +
      "触れる全て壊してしまうんだ\n" +
      "振り返る余地なんてないから",
    song: "Monster",
    youtube: 'na1I8fwbmyE',
    writers: ["Umetora (梅とら)"]
  },
  {
    text: "Stitch up the deepened wounds, a fastening pass, around the center\n" +
      "Used to the pain, hurried breaths and beats, pretending not to notice, I'm alone again",
    text_jp: "深くなる傷を縫い付け 繋ぐパス軸に廻りだす\n" +
      "慣れた痛み、焦る呼吸とビート 気付かないふりしてまた一人",
    song: "No title",
    youtube: 'LfephiFN76E',
    writers: ["Reol"]
  },
  {
    text: "Give me a break! Stop now!",
    text_jp: "Give me a break! Stop now!",
    song: "Give me a break Stop now",
    youtube: 'n5CwXuyNfoc',
    writers: ["Reol"]
  },
  {
    text: "Da, da, da, I'm gonna be a grownup\n" +
      "Get experienced in the ways of the world now",
    text_jp: "ダッダッダ あたし大人になる\n" +
      "酸いも甘いも噛み分けて今",
    song: "Bring It On!",
    youtube: 'sI9p6CP14PM',
    writers: ["Reol"]
  },
  {
    text: "Touch (me) with your overbearing hands\n" +
      "Abandon (me) without regret",
    text_jp: "強引な手付きでさわってよ\n" +
      "未練なく捨て去ってよ",
    song: "Lost Paradise",
    youtube: '7xuvTwRhk7o',
    writers: ["Reol"]
  },
  {
    text: "Come, get drunk on our sound, and cheer up. If you sleep you'll forget all of this anyway\n" +
      "In the end, nothing's changed between the present and the past",
    text_jp: "酔いどれアガれや　寝れば忘るる\n" +
    "昔も今も変わらず",
    song: "YoiYoi Kokon",
    youtube: '8IK6eLTNV1k',
    writers: ["Reol"]
  },
  {
    text: "What do you believe in, in this world surrounded by things you don't understand",
    text_jp: "何を信じ生きる　右も左もわからないことだらけの世界に",
    song: "Gokusaishiki",
    youtube: '5vebKoO__8A',
    writers: ["Reol"]
  },
  {
    text: "This awareness that I speak not to a soul -\n" +
      "I hide it away into the depths of concrete",
    text_jp: "誰に言わぬこの意識は\n" +
      "コンクリートの深くまで秘するのです",
    song: "Q?",
    youtube: 'oBTxxpYre3g',
    writers: ["Reol"]
  },
]

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quote').innerText = randomQuote.text
  document.getElementById('source').innerText = randomQuote.song
  document.getElementById('writers').innerText = randomQuote.writers.join(', ')
  if (randomQuote.youtube) {
    document.getElementById('links').innerHTML = `<a href="https://youtu.be/${randomQuote.youtube}" target="_blank"><i class="fab fa-youtube"/></a>`
  }
}


document.addEventListener('DOMContentLoaded', displayRandomQuote)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
