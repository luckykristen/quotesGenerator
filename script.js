const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
    "Be yourself, everyone one is already taken.",
    "If you can change your mind, you can change your life.",
    "You never fail until you stop trying.",
    "Keep your face always toward the sunshine - and shadows will fall behind you.",
    "You only live once, but if you work it right, once is enough.",
    "You are the author of your own story. If you do not like where this chapter is going, it is ok to start a new one.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The secret of getting ahead is getting started.",
    "If you run out of kind words for yourself, stop talking.",
    "Every end is a new beginning.",
    "Give every day the chance to become the most beautiful day of your life."
]

button.addEventListener("click", function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})