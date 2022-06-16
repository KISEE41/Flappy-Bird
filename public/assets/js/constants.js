const MAX_BIRD_POSITION = 74;
const MIN_BIRD_POSITION = 0;

const BIRD_LEFT_POSITION = 5;

const gravity = 4;

const birdMovement = 10;

const gap = 125;
const minHeightOfPipe = 124;
const maxHeightOfPipe = 250;

const viewPortWidth = 864;
const viewPortHeight = 512;

const scoreBoard = document.getElementsByClassName("score");
const highestScoreBoard = document.getElementById("highestScore");

var isStarted = false;

var score = 0;
var finalScore = 0;
var highestScore = 0;