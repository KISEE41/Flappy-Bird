class Bird {
    constructor() {
        const canvas = document.getElementById('canvas');
        this.position = {
            x: BIRD_LEFT_POSITION,
            y: 256
        }
        this.width = 34;
        this.height = 24;
        this.create();
    }

    create() {
        this.birdImage = new Image();

        this.birdImage.id = "birdImage";
        this.birdImage.style.display = "inline-block";
        this.birdImage.style.position = "absolute";
        this.birdImage.style.bottom = `${toPx(this.position.y)}`;
        this.birdImage.style.left = `${toPer(this.position.x)}`;
        this.birdImage.style.width = `${toPx(this.width)}`;
        this.birdImage.style.height = `${toPx(this.height)}`;
        canvas.appendChild(this.birdImage);
    }

    start() {
        this.position.y -= gravity;
        if (this.position.y <= 110) {
            this.position.y = 110;
            return true;
        }
        this.birdImage.style.bottom = `${toPx(this.position.y)}`;
    }

    jump() {
        if (this.position.y < 400) {
            this.position.y += 50;
        }

        this.birdImage.style.transform = "rotate(-50deg)";
        setTimeout(() => {
            this.birdImage.style.transform = "rotate(0)";
        }, 100);
        this.birdImage.style.bottom = `${toPx(this.position.y)}`;
    }

}

const bird = new Bird();

let birdTimerId = setInterval(() => {
    if (isStarted) {
        birdAnimate = bird.start();

        if (birdAnimate) {
            collide();
            clearInterval(creation);
            clearInterval(birdTimerId);
        }
    }
}, 20);

function control(e) {
    if (e.keyCode === 32) {
        bird.jump();
    }
}

document.addEventListener('keydown', control);


