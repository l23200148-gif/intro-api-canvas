// 1. Seleccionamos los elementos del HTML
const rRange = document.getElementById('rRange');
const gRange = document.getElementById('gRange');
const bRange = document.getElementById('bRange');

const rInput = document.getElementById('rInput');
const gInput = document.getElementById('gInput');
const bInput = document.getElementById('bInput');

const cuadro = document.getElementById('cuadroColor');
const textoHex = document.getElementById('textoHex');

// 2. Función para actualizar el color
function actualizarColor() {
    const r = rRange.value;
    const g = gRange.value;
    const b = bRange.value;

    // Cambiamos el color del cuadro (RGB)
    cuadro.style.backgroundColor = rgb(${r}, ${g}, ${b});

    // Convertimos a Hexadecimal para mostrarlo
    const hex = "#" + ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1).toUpperCase();
    textoHex.innerText = hex;
}

// 3. Sincronizar Sliders con Números
function sincronizar(e) {
    let valor = e.target.value;
    
    // Si el usuario escribe algo fuera de rango, lo limitamos
    if (valor > 255) valor = 255;
    if (valor < 0) valor = 0;

    if (e.target.type === 'range') {
        e.target.nextElementSibling.value = valor;
    } else {
        e.target.previousElementSibling.value = valor;
    }
    actualizarColor();
}

// 4. Agregar los eventos de escucha
[rRange, gRange, bRange, rInput, gInput, bInput].forEach(control => {
    control.addEventListener('input', sincronizar);
});

// Inicializar color al cargar la página
actualizarColor();