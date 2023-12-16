

let canvas = document.getElementById('circleField');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');


function circle() {
    ctx.beginPath();
    ctx.arc(150, 150, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "Red";
    ctx.stroke();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle();
}

draw();









