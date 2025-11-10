// 💖 Corações flutuando com cores, tamanhos e velocidades diferentes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Array de emojis variados 💘💗💓💞💖💝
    const emojis = ["💘", "💗", "💓", "💞", "💖", "💝"];
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Posição e estilo aleatórios
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.opacity = 0.6 + Math.random() * 0.4;

    // Duração aleatória (velocidade de queda)
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    // Adiciona à página
    document.body.appendChild(heart);

    // Remove o coração após terminar a animação
    setTimeout(() => heart.remove(), 7000);
}

// Cria novos corações em intervalos variados
setInterval(createHeart, 250 + Math.random() * 300);