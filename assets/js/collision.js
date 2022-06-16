function collide() {
    const bird = document.getElementById("birdImage");
    const topPipes = document.getElementsByClassName("top-pipe");
    const downPipes = document.getElementsByClassName("down-pipe");

    document.getElementsByClassName("end")[0].style.display = "block";

    if (bird) bird.remove();

    for (let i = 0; i < topPipes.length; i++) {
        topPipes[i].remove();
        downPipes[i].remove();
    }

    document.getElementsByClassName("mask")[0].style.display = "block";
}