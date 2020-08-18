const quotes = [
  {
    text: "Want you to get high\nWe want you to aim high",
    song: "Kinjitou",
    song_url: 'https://youtu.be/_87mpz7-5a8',
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
    song_url: '',
    writers: ["Reol", "Giga"]
  },
]

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quote').innerText = randomQuote.text
  document.getElementById('source').innerText = randomQuote.song
  document.getElementById('writers').innerText = randomQuote.writers.join(', ')
  if (randomQuote.song_url) {
    document.getElementById('sourceHref').setAttribute('href', randomQuote.song_url)
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
