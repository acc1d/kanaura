const cards = document.querySelectorAll(".card");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const warningText = document.getElementById("warningText");

const continueBtn = document.getElementById("continueBtn");

const chatBtn = document.getElementById("chatBtn");
const igBtn = document.getElementById("igBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const realTime = document.getElementById("realTime");

const sakuraContainer = document.querySelector(".sakura-container");

let noCount = 0;

// Ganti section
function nextSection(number) {
  cards.forEach((card) => card.classList.remove("active"));

  document
    .getElementById(`section${number}`)
    .classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Tombol iya
yesBtn.addEventListener("click", () => {
  nextSection(3);
});

// Tombol lanjut ke section 4
continueBtn.addEventListener("click", () => {
  nextSection(4);

  const now = new Date();

  realTime.textContent = now.toLocaleString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  confetti({
    particleCount: 180,
    spread: 100,
    origin: { y: 0.6 },
  });
});

// Tombol tidak kabur
function moveButton() {
  noCount++;

  const area = document.getElementById("buttonArea");

  const maxX = area.offsetWidth - noBtn.offsetWidth;
  const maxY = area.offsetHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noCount === 3) {
    warningText.textContent = "Aku tunggu jawabannya, kok. 😊";
  }

  if (noCount >= 5) {
    warningText.textContent =
      "Jangan bikin aku deg-degan terus dong. 🥺";

    noBtn.style.display = "none";

    yesBtn.textContent = "Iya, aku mau 🥰";
    yesBtn.style.transform = "scale(1.1)";
  }
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

// Tombol WhatsApp
chatBtn.addEventListener("click", () => {
  const pesan = "Haiii Acidd,ini kanaura aku mau bilang kalau aku sayang banget sama kamu, 🤍🌹";

  window.open(
    `https://wa.me/6281389954937?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
});

// Tombol Instagram
igBtn.addEventListener("click", () => {
  window.location.href = "instagram://user?username=rasyid__sp";

  setTimeout(() => {
    window.open(
      "https://www.instagram.com/rasyid__sp/",
      "_blank"
    );
  }, 700);
});

// Musik
musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();

    musicBtn.textContent = "⏸️ Pause Musik";
  } else {
    music.pause();

    musicBtn.textContent = "🎷 Putar Musik";
  }
});

// Sakura jatuh
function createSakura() {
  const sakura = document.createElement("div");

  sakura.className = "sakura";
  sakura.innerHTML = "🌸";

  sakura.style.left = Math.random() * window.innerWidth + "px";
  sakura.style.fontSize = Math.random() * 15 + 12 + "px";
  sakura.style.animationDuration =
    Math.random() * 5 + 5 + "s";

  sakuraContainer.appendChild(sakura);

  setTimeout(() => {
    sakura.remove();
  }, 10000);
}

setInterval(createSakura, 350);

// Efek tulisan mengikuti kursor
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.94) {
    const text = document.createElement("span");

    text.className = "trail";
    text.textContent = "I Love You Kanaura 💖";

    text.style.left = `${e.pageX}px`;
    text.style.top = `${e.pageY}px`;

    document.body.appendChild(text);

    setTimeout(() => {
      text.remove();
    }, 1800);
  }
});