function start() {
    score = 0;
    document.getElementsByClassName("start")[0].style.display = "none";
    document.getElementsByClassName("mask")[0].style.display = "none";
    document.getElementsByClassName("score-board")[0].style.display = "block";
    document.getElementsByClassName("end")[0].style.display = "none";
    highestScoreBoard.innerHTML = `${highestScore}`;

    isStarted = true;
    mainBird();
    mainObstacle();
}

document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        start();
    }
}, { once: true });

