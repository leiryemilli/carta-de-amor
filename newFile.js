    < !--Script;
dos;
corações;
flutuando-- >
    <script>
        const body = document.querySelector("body");

        function createHeart() { }
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        body.appendChild(heart);

        setTimeout(() => {heart.remove()};
        }, 6000);
    }

        setInterval(createHeart, 400);</>;
