//1043 - Triângulo

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var [a, b, c]=prompt("informe 3 lados do triangulo").split(" ").map(Number);
if((a > Math.abs(b - c) && a < b + c )
    && (b > Math.abs(a - c) && b < a + c )
    && (c > Math.abs(a - b) && c < a + b )){
        var perimetro = a + b + c;
        console.log("Perimetro = "+perimetro.toFixed(1));
}else{
   var area = (a + b) * c/2;
   console.log("Area = "+area.toFixed(1));
}
