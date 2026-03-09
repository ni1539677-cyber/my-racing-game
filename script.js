const gameArea = document.querySelector('#gameArea');
const score = document.querySelector('#score');
let player = { speed: 10, score: 0, start: true }; // স্পিড বাড়িয়ে ১০ করলাম

function start() {
    window.requestAnimationFrame(playGame);
    // গাড়ি এবং রাস্তা তৈরির লজিক যা আগে ছিল...
}

function playGame() {
    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();

    if (player.start) {
        moveLines();
        moveEnemy(car);
        // কন্ট্রোল এবং সংঘর্ষ চেক করার লজিক...
        player.score++;
        score.innerText = "SCORE: " + player.score;
        window.requestAnimationFrame(playGame);
    }
}
