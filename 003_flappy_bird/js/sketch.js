/* 
CONSTANTES A LAS QUE SE TIENE ACCESO
height : Number= altura del canvas
width : Number = ancho del canvas
key : String = la última tecla que se ha pulsado en el teclado
frameCount : Number = Número de frames que han pasado, para medir el tiempo

El eje de coordenadas empieza en la esquina superior izquierda, 
con x positivo a la DERECHA e y positivo hacia ABAJO
*/

// Se ejecuta 1 VEZ al cargarse la página
function setup() {
    // ** No tocar **
    createCanvas(500, 700)
    // Configuración extra a partir de aquí
}

// Se ejecuta cada vez que se pulsa una tecla
function keyPressed() {
    console.log(key) // Puedes borrarlo, solo para ilustrar
}

// TODO: Borrar esta variable, es solo para ilustrar como funciona la función draw
let circleXposition = 0;

// Se ejecuta CADA FRAME (por defecto 60 fps)
function draw() {
    background(0) // No tocar

    // TODO: Borrar esto, es solo para ilustrar las funciones de helpers y las constantes
    drawCircle({ radius: 50, x: circleXposition, y: 50, r: 20, g: 200, b: 0 })
    drawCircle({ radius: 20, x: 325, y: 200 })
    drawRectangle({ x: 150, y: 150, w: 20, h: 100 })
    drawRectangle({ x: 350, y: 550, w: 100, h: 100, r: 255, g: 0, b: 0 })

    if (circleXposition > width) {
        return;
    }
    circleXposition += getRandom(0, 5)
}