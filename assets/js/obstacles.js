class Obstacle {
    constructor() {
        this.width = 52;
        this.position = -7;

        const canvas = document.getElementById("canvas");
        this.create();
    }

    create() {
        this.topPipe = document.createElement("div");
        this.downPipe = document.createElement("div");
        this.topPipe.style.position = "absolute";
        this.downPipe.style.position = "absolute";
        this.topPipe.style.width = `${toPx(this.width)}`;
        this.downPipe.style.width = `${toPx(this.width)}`;
        this.topPipe.style.right = "-7%";
        this.downPipe.style.right = "-7%";
        this.topPipe.style.top = "0";
        this.downPipe.style.bottom = "0";
        this.topPipe.style.backgroundImage = "url(./assets/images/sprite/pipe-green-top.png)";
        this.downPipe.style.backgroundImage = "url(./assets/images/sprite/pipe-green.png)";
        this.topPipe.style.backgroundRepeat = "no-repeat";
        this.downPipe.style.backgroundRepeat = "no-repeat";
        this.topPipe.style.backgroundSize = "100% auto";
        this.downPipe.style.backgroundSize = "100% auto";
        this.topPipe.setAttribute("class", "top-pipe");
        this.downPipe.setAttribute("class", "down-pipe");

        let topPipeHeight = randomIntFromRange(minHeightOfPipe, maxHeightOfPipe);
        let downPipeHeight = viewPortHeight - gap - topPipeHeight;

        this.topPipe.style.height = `${toPx(topPipeHeight)}`;
        this.downPipe.style.height = `${toPx(downPipeHeight)}`;

        this.topPipe.style.backgroundPosition = `0 ${-maxHeightOfPipe - 70 + topPipeHeight}px`;
        this.downPipe.style.backgroundPosition = `0 0`;

        canvas.appendChild(this.topPipe);
        canvas.appendChild(this.downPipe);
    }

    move() {
        this.position += 1;
        if (this.position === 100) {
            this.topPipe.remove();
            this.downPipe.remove();
            this.position = 0;
            score += 1;
            scoreBoard[0].innerHTML = `${score}`;
            console.log(score);
        }
        this.topPipe.style.right = `${toPer(this.position)}`;
        this.downPipe.style.right = `${toPer(this.position)}`;

        if (isCollided(this.topPipe, this.downPipe, bird)) {
            return true
        }
    }
}


const creation = setInterval(() => {
    if (isStarted) {
        const pipe = new Obstacle();
        let pipeMovement = setInterval(() => {

            let isCollidedWithPipe = pipe.move();
            if (isCollidedWithPipe) {
                clearInterval(creation);
                clearInterval(pipeMovement);
                pipe.topPipe.remove();
                pipe.downPipe.remove();
                collide();
            }
        }, 35);
    }
}, 2000);

