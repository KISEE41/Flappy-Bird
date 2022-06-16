function collide() {
    const bird = document.getElementById("birdImage");
    const topPipes = document.getElementsByClassName("top-pipe");
    const downPipes = document.getElementsByClassName("down-pipe");

    document.getElementsByClassName("end")[0].style.display = "block";
    document.getElementsByClassName("score-board")[0].style.display = "none";

    finalScore = score;
    scoreBoard[1].innerHTML = `${finalScore}`;

    if (highestScore < finalScore) {
        highestScore = finalScore;
    }

    if (bird) bird.remove();

    for (let i = 0; i < topPipes.length; i++) {
        topPipes[i].remove();
        downPipes[i].remove();
    }

    document.getElementsByClassName("mask")[0].style.display = "block";
    document.addEventListener("click", () => {
        start();
    })
}

