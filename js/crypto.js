// Add Today's Date
function dateAsString() {
  var today = new Date();
  var n = today.toLocaleDateString();
  document.getElementById("date").innerHTML = n;
}
dateAsString();

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

// Capture Form Data and Store in Local File
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

// QUIZ
// (A) PROPERTIES
// (A1) QUESTIONS & ANSWERS
// q = QUESTION, o = OPTIONS, a = CORRECT ANSWER

var quiz = {
  data: [
    {
      q: "What year was Bitcoin launched?",
      o: ["2013", "2009", "2005", "2011"],
      a: 1,
    },
    {
      q: "What is DeFi?",
      o: [
        "Deliberate Finance",
        "Delicate Fish",
        "Disco Fever",
        "Decentralized Finance",
      ],
      a: 3,
    },
    {
      q: "What was the first purchase Bitcoin was used for in 2011?",
      o: ["automobile", "new house", "pizza", "more Bitcoin"],
      a: 2,
    },
    {
      q: "How much did that first Bitcoin purchase cost?",
      o: ["10,000 Bitcoin", "1,000 Bitcoin", "100 Bitcoin", "10 Bitcoin"],
      a: 0,
    },
    {
      q: "How many cryptocurrencies are there besides Bitcoin?",
      o: ["About 50", "About 250", "About 2,500", "About 9,000"],
      a: 3,
    },
  ],

  // (A2) HTML ELEMENTS
  hbox: null, // HTML quiz container
  hqn: null, // HTML question wrapper
  hans: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: function () {
    // (B1) WRAPPER
    quiz.hbox = document.getElementById("quizBox");

    // (B2) QUESTIONS SECTION
    quiz.hqn = document.createElement("div");
    quiz.hqn.id = "quizQn";
    quiz.hbox.appendChild(quiz.hqn);

    // (B3) ANSWERS SECTION
    quiz.hans = document.createElement("div");
    quiz.hans.id = "quizAns";
    quiz.hbox.appendChild(quiz.hans);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: function () {
    // (C1) QUESTION
    quiz.hqn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hans.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hans.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hans.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: function () {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hans.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = this.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      this.classList.add("correct");
    } else {
      this.classList.add("wrong");
    }
    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(function () {
      if (quiz.now < quiz.data.length) {
        quiz.draw();
      } else {
        quiz.hqn.innerHTML = `You answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hans.innerHTML = "";
      }
    }, 1000);
  },
};
window.addEventListener("load", quiz.init);

// Retake Quiz
function refreshPage() {
  window.location.reload();
}
