const score = document.querySelector('.score');
const startScreen = document.querySelector('.start-screen');
const gameArea = document.querySelector('.game-area');

let player = { speed: 5, score: 0 };
let keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

startScreen.addEventListener('click', start);

function start() {
    startScreen.classList.add('hide');
    startScreen.style.display = "none";
    gameArea.innerHTML = "";
    player.start = true;
    player.score = 0;
    window.requestAnimationFrame(gamePlay);

    for (x = 0; x < 5; x++) {
        let roadLine = document.createElement('div');
        roadLine.setAttribute('class', 'line');
        roadLine.y = (x * 150);
        roadLine.style.top = roadLine.y + "px";
        gameArea.appendChild(roadLine);
    }

    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    gameArea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    for (x = 0; x < 3; x++) {
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class', 'enemy');
        enemyCar.y = ((x + 1) * 350) * -1;
        enemyCar.style.top = enemyCar.y + "px";
        enemyCar.style.left = Math.floor(Math.random() * 250) + "px";
        gameArea.appendChild(enemyCar);
    }
}

function gamePlay() {
    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();

    if (player.start) {
        moveLines();
        moveEnemy(car);

        // Mobile Control Logic (Simplified for AppsGeyser)
        gameArea.addEventListener('touchstart', (e) => {
            let touchX = e.touches[0].clientX;
            if (touchX < window.innerWidth / 2) player.x -= 5;
            else player.x += 5;
        });

        if (player.x > 0) car.style.left = player.x + "px";
        if (player.x < (road.width - 50)) car.style.left = player.x + "px";

        window.requestAnimationFrame(gamePlay);
        player.score++;
        score.innerText = "Score: " + player.score;
    }
}

function moveLines() {
    let lines = document.querySelectorAll('.line');
    lines.forEach(function (item) {
        if (item.y >= 700) { item.y -= 750; }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

function moveEnemy(car) {
    let enemies = document.querySelectorAll('.enemy');
    enemies.forEach(function (item) {
        if (isCollide(car, item)) { player.start = false; startScreen.style.display = "block"; startScreen.innerHTML = "Game Over <br> Score: " + player.score + "<br> Tap to Restart"; }
        if (item.y >= 750) { item.y = -300; item.style.left = Math.floor(Math.random() * 250) + "px"; }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

function isCollide(a, b) {
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();
    return !((aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right));
}
