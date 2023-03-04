//    let arr = [14, 8, 0, 23, 1, 135]

//    console.log(arr.sort((a, b) => { return a - b }));



function rgb(r, g, b){

    // console.log(r.toString(16));
    // console.log(g.toString(16));
    // console.log(b.toString(16));

    if (r > 255) r = 255
    if (r < 0) r = 0
    if (g > 255) g = 255
    if (g < 0) g = 0
    if (b > 255) b = 255
    if (b < 0) b = 0

    let red, green, blue = ''

    if (r < 16) {
        red = '0' + r.toString(16)
    }else{
        red = r.toString(16)
    }


    if (g < 16) {
        green = '0' + g.toString(16)
    }else{
        green = g.toString(16)
    }

    if (b < 16) {
        blue = '0' + b.toString(16)
    }else{
        blue = b.toString(16)
    }


    return (red + green + blue).toUpperCase()
    
    
}

console.log(rgb(255, 0, 124));
