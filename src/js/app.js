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
