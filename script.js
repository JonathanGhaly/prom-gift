const sections = ["welcome", "celebration", "letter", "finale"];
function showSection(id) {
  sections.forEach(section => document.getElementById(section).classList.toggle("hidden", section !== id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const openGift = document.getElementById("openGift");
const laterBtn = document.getElementById("laterBtn");
const hint = document.getElementById("hint");

openGift.addEventListener("click", () => {
  showSection("celebration");
  celebrate();
});
laterBtn.addEventListener("mouseenter", () => {
  hint.textContent = "That button is feeling a little shy too. Try the pink one. 💗";
  laterBtn.style.transform = `translate(${Math.random()*24-12}px, ${Math.random()*16-8}px)`;
});
laterBtn.addEventListener("click", () => {
  hint.textContent = "I made this just for you. You have to see it. 🥺";
});
document.getElementById("letterBtn").addEventListener("click", () => showSection("letter"));
document.getElementById("finalBtn").addEventListener("click", () => {
  showSection("finale");
  celebrate();
});
document.getElementById("againBtn").addEventListener("click", () => {
  showSection("celebration");
  celebrate();
});

const heartLayer = document.getElementById("hearts");
const heartSymbols = ["♥", "♡", "❤"];
function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (13 + Math.random() * 19) + "px";
  heart.style.animationDuration = (6 + Math.random() * 5) + "s";
  heartLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 11500);
}
setInterval(makeHeart, 520);

function celebrate() {
  const colors = ["#ff7898", "#f5c66d", "#e6a9c0", "#c8a8dc", "#ffd6a5"];
  for (let i = 0; i < 75; i++) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * .9 + "s";
    piece.style.borderRadius = Math.random() > .5 ? "50%" : "2px";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}
