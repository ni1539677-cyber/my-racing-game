const score = document.querySelector('#score');
const startBtn = document.querySelector('#startBtn');
const startScreen = document.querySelector('#startScreen');
const gameArea = document.querySelector('#gameArea');

let player = { speed: 7, score: 0 };
startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameArea.innerHTML = "";
    player.start = true;
    player.score = 0;
    
    // নিজের গাড়ি তৈরি
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    // রাস্তার লাইন তৈরি
    for(x=0; x<5; x++) {
        let line = document.createElement('div');
        line.setAttribute('class', 'line');
        line.y = (x*150);
        line.style.top = line.y + "px";
        gameArea.appendChild(line);
    }

    // শত্রু গাড়ি তৈরি
    for(x=0; x<3; x++) {
        let enemy = document.createElement('div');
        enemy.setAttribute('class', 'enemy');
        enemy.y = ((x+1)*350) * -1;
        enemy.style.top = enemy.y + "px";
        enemy.style.left = Math.floor(Math.random() * 350) + "px";
        gameArea.appendChild(enemy);
    }
    
    window.requestAnimationFrame(playGame);
});

function playGame() {
    if(player.start) {
        moveLines();
        moveEnemy();
        player.score++;
        score.innerText = "Score: " + player.score;
        window.requestAnimationFrame(playGame);
    }
}

function moveLines() {
    let lines = document.querySelectorAll('.line');
    lines.forEach(function(item) {
        if(item.y >= 700) { item.y -= 750; }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

function moveEnemy() {
    let enemies = document.querySelectorAll('.enemy');
    enemies.forEach(function(item) {
        if(item.y >= 700) {
            item.y = -600;
            item.style.left = Math.floor(Math.random() * 350) + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}
