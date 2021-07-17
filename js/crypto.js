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
var countDownDate = new Date("Oct 31, 2021 13:00:37").getTime();

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

// Fetch Dog Breeds
const CoinGecko = require("coingecko-api");
const CoinGeckoClient = new CoinGecko();

var func = async () => {
  let data = await CoinGeckoClient.coins.all();
};

const select = document.getElementById("coins");
// const card = document.querySelector(".card");

// const select = document.getElementById("breeds");
// const card = document.querySelector(".card");
// const form = document.querySelector("form");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function fetchData(url) {
  return fetch(url).then((res) => res.json());
}

fetchData(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"
).then((data) => generateOptions(data.message));

// fetchData("https://dog.ceo/api/breeds/image/random").then((data) =>
//   generateImage(data.message)
// );

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateOptions(data) {
  const options = data
    .map(
      (item) => `
    <option value='${item}'>${item}</option>
  `
    )
    .join("");
  select.innerHTML = options;
}

function generateImage(data) {
  const html = `
    <img src='${data}' alt>
    <p>Click to view images of ${select.value}s</p>
  `;
  card.innerHTML = html;
}

function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector("img");
  const p = card.querySelector("p");

  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`).then((data) => {
    img.src = data.message;
    img.alt = breed;
    p.textContent = `Click to view more ${breed}s`;
  });
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener("change", fetchBreedImage);
card.addEventListener("click", fetchBreedImage);

// ------------------------------------------
//  POST DATA
// ------------------------------------------

// Validate Email with RegEx
function ValidateEmail(inputText) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    alert("Thank you!");
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
}
