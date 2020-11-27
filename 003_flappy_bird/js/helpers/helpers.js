function drawCircle(params) {
    let { x, y, radius, r, g, b } = params;
    if (x === undefined || y === undefined || radius === undefined) {
        console.error("A circle needs a radius and an x and y position retarded")
    }
    if (r === undefined) r = 255;
    if (g === undefined) g = 255;
    if (b === undefined) b = 255;

    fill(r, g, b)
    ellipse(x, y, radius, radius)
}

function drawRectangle(params) {
    let { x, y, w, h, r, g, b } = params;
    if (x === undefined || y === undefined || w === undefined || h === undefined) {
        console.error("A rectangle needs a size (h and w) and an x and y position retarded")
    }
    if (r === undefined) r = 255;
    if (g === undefined) g = 255;
    if (b === undefined) b = 255;
    fill(r, g, b)
    rect(x, y, w, h)
}


function getRandom(first, last) {
    return random(first, last)
}