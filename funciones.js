
const inicialDeTuNovia = "R";

const screens = [...document.querySelectorAll(".screen")];

function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.toggle("active", screen.id === id);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.getElementById("yesBtn").addEventListener("click", () => {
    showScreen("gifts");
});

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
    const maxX = Math.max(0, window.innerWidth - noBtn.offsetWidth - 20);
    const maxY = Math.max(0, window.innerHeight - noBtn.offsetHeight - 20);

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}

document.querySelectorAll("[data-gift]").forEach(button => {
    button.addEventListener("click", () => {
        showScreen(button.dataset.gift);
    });
});

document.querySelectorAll(".backBtn").forEach(button => {
    button.addEventListener("click", () => {
        showScreen("gifts");
    });
});

document.getElementById("letterBtn").addEventListener("click", () => {
    showScreen("letter");
});

document.getElementById("heartsBtn").addEventListener("click", () => {
    showScreen("hearts");
    createHearts();
});

document.getElementById("prizeBtn").addEventListener("click", () => {
    showScreen("prize");
});

function createHearts() {
    const container = document.getElementById("heartContainer");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("span");
        heart.className = "floating-heart";
        heart.textContent = ["💗", "💕", "💖", "💘"][i % 4];
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 4 + "s";
        heart.style.animationDuration = 3 + Math.random() * 4 + "s";
        container.appendChild(heart);
    }

    const initial = document.getElementById("initial");
    if (initial) initial.textContent = inicialDeTuNovia;
}

document.querySelectorAll(".backBtn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.dataset.originalText = button.textContent;
        button.textContent = "🤝 Volver a los regalos";
    });

    button.addEventListener("mouseleave", () => {
        button.textContent = button.dataset.originalText;
    });
});
