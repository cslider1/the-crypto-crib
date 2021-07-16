// Add Today's Date
function dateAsString() {
  var today = new Date();
  var n = today.toLocaleDateString();
  document.getElementById("date").innerHTML = n;
}

document.addEventListener("DOMContentLoaded", function () {
  dateAsString();
});

// Add Countdown Timer
var countDownDate = new Date("Oct 31, 2021 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " days " + hours + " hrs " + minutes + " min " + seconds + " sec ";

  // Text for use if date has passed.
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML =
      "The date has passed. You missed it!";
  }
}, 1000);

async function getCoinGecko() {
  let url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderCoinGecko() {
  let prices = await getCoinGecko();
  let html = "";
  prices.forEach((price) => {
    let htmlSegment = `<div class="price">
                        <h3>${price.bitcoin}</h3>
                        </div>`;
    html += htmlSegment;
  });
}

renderCoinGecko();

// //Fetch CoinGecko API
// let coingecko =
//   "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

// fetch (coingecko);
//   .then();
