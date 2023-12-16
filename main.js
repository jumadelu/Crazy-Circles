

let canvas = document.getElementById('circleField');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');


let posX = 50;
let posY = 50;
let radius = 30;
let innerColor = "Red";
let speedX = 5;


function drawCircle() {
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, Math.PI * 2, false)
    ctx.strokeStyle = innerColor;
    ctx.stroke();
}


function draw() {
    window.requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(posX, posY, radius, innerColor);
    if (posX + radius > canvas.width || posX - radius < 0) {
        speedX = -speedX;
    }
    posX += speedX;
}

draw();









