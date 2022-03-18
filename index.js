var rect = require('./rectangle');
function solveRect(l,b){
    console.log(`calculating ${l},${b}`);
    rect(l,b, (err, rectangle) => {
        if(err){console.log("Error: ", err.message)}
        else{
            console.log(`(${l},${b}) => Area=${rectangle.area()}, Perimeter=${rectangle.perimeter()}`);
        9}
    });
    //console.log("eof");
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,6);
solveRect(-1,9);