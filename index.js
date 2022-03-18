var rect = require('./rectangle');
function solveRect(l,b){
    if(l<=0 || b<=0){
        console.log(`(${l},${b}) <= Rectangle dimensions should be greater than zero`);
    }else{
        console.log(`(${l},${b}) Area = ${rect.area(l,b)}, Perimeter = ${rect.perimeter(l,b)}`)
    }
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,6);
solveRect(-1,9);