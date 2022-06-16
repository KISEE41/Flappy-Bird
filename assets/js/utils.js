/**
 * 
 * @param {Html Object} element 
 * @param {CSS property} style 
 * @returns value
 */
function getStyle(element, style) {
    return parseInt(window.getComputedStyle(element).getPropertyValue(style));
};

/**
 * 
 * @param {number} value 
 * @returns px value in string format
 */
function toPx(value) {
    return `${value}px`;
}

/**
 * 
 * @param {number} value 
 * @returns % value in string format
 */
function toPer(value) {
    return `${value}%`;
}


/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns random number
 */
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 
 * @param {*} topPipe 
 * @param {*} downPipe 
 * @param {*} bird 
 * @returns 
 */
function isCollided(topPipe, downPipe, bird) {
    if (topPipe === undefined || downPipe === undefined) { return; }
    else {
        const topPipeBox = topPipe.getBoundingClientRect();
        const downPipeBox = downPipe.getBoundingClientRect();

        const birdBox = bird.birdImage.getBoundingClientRect();

        return (
            //top pipe
            (
                birdBox.x + birdBox.width > topPipeBox.x &&
                birdBox.x < topPipeBox.x + topPipeBox.width &&
                birdBox.y + birdBox.width > topPipeBox.y &&
                birdBox.y < topPipeBox.y + topPipeBox.height
            ) ||
            //bottom pipe
            (
                birdBox.x + birdBox.width > downPipeBox.x &&
                birdBox.x < downPipeBox.x + downPipeBox.width &&
                birdBox.y + birdBox.width > downPipeBox.y &&
                birdBox.y < downPipeBox.y + downPipeBox.height
            )
        )
    }
}