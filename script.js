/*****************************************************************************************
* Rectángulo con esquinas redondeadas, sombra y estilo personalizado
*****************************************************************************************/
// Obtiene el elemento <canvas>
var canvas = document.getElementById("lienzo");
// Ajusta tamaño al 50% de la ventana
canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;
// Obtiene contexto
var ctx = canvas.getContext("2d");
// =============================
// 🔹 VARIABLES CONFIGURABLES
// =============================
var posX = 80;
var posY = 60;
var anchoRect = 300;
var altoRect = 200;
var radio = 25; // Radio de las esquinas redondeadas
// =============================
// 🔹 CONFIGURACIÓN DE SOMBRA
// =============================
ctx.shadowColor = "rgba(0,0,0,0.4)";
ctx.shadowBlur = 15;
ctx.shadowOffsetX = 8;
ctx.shadowOffsetY = 8;
// =============================
// 🔹 COLORES
// =============================
ctx.fillStyle = "#000000"; // Café claro (relleno)
ctx.strokeStyle = "#4B2E19"; // Café oscuro (borde)
ctx.lineWidth = 4;
// =============================
// 🔹 DIBUJO RECTÁNGULO REDONDEADO
// =============================
ctx.beginPath();
ctx.moveTo(posX + radio, posY);
ctx.lineTo(posX + anchoRect - radio, posY);
ctx.quadraticCurveTo(posX + anchoRect, posY, posX + anchoRect, posY + radio);
ctx.lineTo(posX + anchoRect, posY + altoRect - radio);
ctx.quadraticCurveTo(posX + anchoRect, posY + altoRect, posX + anchoRect - radio, posY +
altoRect);
ctx.lineTo(posX + radio, posY + altoRect);
ctx.quadraticCurveTo(posX, posY + altoRect, posX, posY + altoRect - radio);
ctx.lineTo(posX, posY + radio);
ctx.quadraticCurveTo(posX, posY, posX + radio, posY);
ctx.closePath();
ctx.fill(); // Relleno
ctx.stroke(); // Borde
