// Cria corações aleatórios flutuando na tela
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖"; // Pode trocar por 💕 💓 💗 etc.
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Gera um coração a cada 300ms
setInterval(createHeart, 300);

const colors = ["#ff99cc", "#ff66b2", "#ff4da6", "#ff1a8c", "#ff80bf"];
heart.style.color = colors[Math.floor(Math.random() * colors.length)];

const button = document.getElementById('loveButton');
const mensagem = document.getElementById('mensagemAmor');

button.addEventListener('click', () => {
  mensagem.style.display = 'block';
  mensagem.classList.add('show');

  // Faz o coração pulsar várias vezes
  const heart = document.querySelector('.heart-pulse');
  heart.classList.add('active');

  // Desativa depois de alguns segundos
  setTimeout(() => {
    heart.classList.remove('active');
  }, 3000);
});