//1036 - Fórmula de Bhaskara

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var [A, B, C] = prompt ("informe A B C").split(" ");
var A = parseFloat(A);
var B = parseFloat(B);
var C = parseFloat(C);

const delta = Math.pow(B, 2) - 4 * A * C;

if (delta === 0 || delta < 0 || A === 0.0 || B === 0 || C === 0 ){
    console.log("Impossivel calcular");
} else{
    const x1 = (-B + Math.pow(delta, (1 / 2))) / (2 * A);
    const x2 = (-B - Math.pow(delta, (1 / 2))) / (2 * A);
    console.log("R1 =", x1.toFixed(5));
    console.log("R2 =", x2.toFixed(5));
}