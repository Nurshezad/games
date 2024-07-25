document.addEventListener('DOMContentLoaded', () => {
    const bunny = document.getElementById('bunny');
    const scoreElem = document.getElementById('score');
    const timerElem = document.getElementById('timer');

    let score = 0;
    let timeLeft = 30;
    let gameInterval;
    let moveInterval;

    function moveBunny() {
        const bunnyContainer = document.getElementById('bunny-container');
        const maxX = bunnyContainer.clientWidth - bunny.clientWidth;
        const maxY = bunnyContainer.clientHeight - bunny.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        bunny.style.left = `${randomX}px`;
        bunny.style.top = `${randomY}px`;
        bunny.style.animation = `jumpBunny 0.5s ease-in-out`;
    }

    function startGame() {
        score = 0;
        timeLeft = 30;
        scoreElem.textContent = `Score: ${score}`;
        timerElem.textContent = `Time Left: ${timeLeft}s`;

        gameInterval = setInterval(() => {
            timeLeft--;
            timerElem.textContent = `Time Left: ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(gameInterval);
                clearInterval(moveInterval);
                alert(`Game Over! Your score is ${score}`);
            }
        }, 1000);

        moveInterval = setInterval(moveBunny, 1000); // Move bunny every second

        bunny.addEventListener('click', () => {
            score++;
            scoreElem.textContent = `Score: ${score}`;
            moveBunny();
        });

        moveBunny();
    }

    startGame();
});
