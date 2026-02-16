const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 200, 150);
