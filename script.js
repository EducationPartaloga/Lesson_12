//    let arr = [14, 8, 0, 23, 1, 135]

//    console.log(arr.sort((a, b) => { return a - b }));



function rgb(r, g, b){

    // console.log(r.toString(16));
    // console.log(g.toString(16));
    // console.log(b.toString(16));

    if (r > 255) r = 255
    if (r < 0) r = 0
    if (g > 255) r = 255
    if (g < 0) r = 0
    if (b > 255) r = 255
    if (b < 0) r = 0

    

    return r.toString(16) + g.toString(16) + b.toString(16)
    
    
}

console.log(rgb(255, 100, 124));

rgb (255, 0, 124)