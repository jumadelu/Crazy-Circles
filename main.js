

let canvas = document.getElementById('circleField');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');


let posX = 50;
let posY = 50;
let radius = 30;
let circleColor = "Red";
let speedX = 5;
let speedY = 5;


function drawCircle() {
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, Math.PI * 2, false)
    ctx.strokeStyle = circleColor;
    ctx.stroke();
}


function draw() {
    window.requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(posX, posY, radius, circleColor);
    if (posX + radius > canvas.width || posX - radius < 0) {
        speedX = -speedX;
        circleColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    if (posY + radius > canvas.height || posY - radius < 0) {
        speedY = -speedY;
        circleColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    posX += speedX;
    posY += speedY;
}

draw();









