// document.addEventListener("DOMContentLoaded", function () {
// Sticky Nav Bar
// window.onscroll = function () {
//   stickyNav();
// };

// var nav = document.getElementById("hamitems");
// var sticky = nav.offsetTop;

// function stickyNav() {
//   if (window.pageYOffset >= sticky) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// }

// Add Today's Date
function dateAsString() {
  var today = new Date();
  var n = today.toLocaleDateString();
  document.getElementById("date").innerHTML = n;
}

dateAsString();

// document.addEventListener("DOMContentLoaded", function () {
// dateAsString();
// dateAsString(); // doesn't need to be here
// });

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

// Capture Form Data and Store in Local File (FormData API)
// function handleSubmit(event) {
//   event.preventDefault();
//   const data = new FormData(event.target);
//   const value = Object.fromEntries(data.entries());
//   // const value = data.get("email");
//   console.log({ value });
// }
// const form = document.querySelector("form1");
// form.addEventListener("submit", handleSubmit);

let saveFile = () => {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");

  let data =
    "\rFirst Name: " +
    firstname.value +
    "\r\n" +
    "Last Name: " +
    lastname.value +
    "\r\n" +
    "Email: " +
    email.value;

  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = "cryptoFormData.txt";

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};

// test button
const selectElement = document.getElementById("btn");

selectElement.addEventListener("click", function (event) {
  alert("Element clicked through function!");
});

// bind to select box change (maybe an event handler)
// wrap it IIFE so it will fire immediately?
// document.getElementById("list").addEventListener.onchange = coinmarket;
function coinmarket(coinname) {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
    .then((response) => response.json())
    .then((data) => {
      // lowercase coinname and id for this > d.id === coinname
      let coin = data.find((d) => d.id === coinname);
      console.log(coin);

      // render coin data here
      // create wrapper div inside box1 div and append all the elements of json data I want
      // use let for each element
      // let image = `<img src=${coin.image} />`;
      let name = `  ${coin.name}`;
      let symbol = `  ${coin.symbol}`;
      let price = `  ${coin.current_price}`; // wrap in formatter.format
      let market_cap = `  ${coin.market_cap}`;
      // document.getElementsByClassName("image")[0].innerHTML = image;
      document.getElementsByClassName("symbol")[0].innerHTML = symbol;
      document.getElementsByClassName("name")[0].innerHTML = name;
      document.getElementsByClassName("price")[0].innerHTML = price;
      document.getElementsByClassName("market_cap")[0].innerHTML = market_cap;
    });
}

// document.addEventListener("DOMContentLoaded", function () {
//   coinmarket();
// });

// const formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
//   minimumFractionDigits: 0,
// });

// formatter.format();
// formatter.format(10);
// formatter.format(123233000);
// });
