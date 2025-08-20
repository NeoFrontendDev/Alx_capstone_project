document.getElementById("signupBtn").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "home.html"
});

const navLinks = document.querySelectorAll("[data-page]");
const sections = documents.querySelectorAll("section");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.dataset.page;

        sections.forEach(sec => sec.style.display = "none");
        document.querySelector("." + page).style.display = "block";
    });
});

sections.forEach(sec => sec.style.display = "none");
document.querySelector(".home").style.display = "block";

document.querySelector(".quiz-btn button").addEventListener("click", () => {
    alert("Quiz about to land");
    //replace with window.location.href="quiz.html"
});

const weatherBtn = document.querySelector(".weather-desc button");
const cityInput = document.querySelector(".weather-desc input");

weatherBtn.addEventListener("click", async () => {
    const city = cityInput.ariaValueMax.trim();
    if (!city) return alert("Enter a city!");

    const apiKey = "a604810e6fd3e68c80d0f896b5eaff5c";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.cod === 200) {
            alert('Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}');
        } else {
            alert("City not found.");
        }
    } catch (err) {
        alert("Error fetching weather.");
    }
});

const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector(".cont-form input").value;
    const message = document.querySelector(".cont-form textarea").value;

    if (!email || !message) {
        alert("Please fill out all fields!");
        return;
    }
    alert('Thanks for contacting us, ${email}!');
    document.querySelector(".cont-form input").value = "";
    document.querySelector(".cont-form trxtarea").value = "";
});

 function calculateResult() {
      let form = document.forms['quizForm'];
      let introvert = 0, extrovert = 0, ambivert = 0;

      for (let i = 1; i <= 6; i++) {
        let answer = form['q' + i].value;
        if (answer === "introvert") introvert++;
        else if (answer === "extrovert") extrovert++;
        else if (answer === "ambivert") ambivert++;
      }

      let resultText = "";
      if (introvert > extrovert && introvert > ambivert) {
        resultText = "You are mostly an Introvert 🌙";
      } else if (extrovert > introvert && extrovert > ambivert) {
        resultText = "You are mostly an Extrovert ☀️";
      } else {
        resultText = "You are an Ambivert 🌗 (a balance of both)";
      }

      document.getElementById("result").innerText = resultText;
    }