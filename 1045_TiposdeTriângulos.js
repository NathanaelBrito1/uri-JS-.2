//1045 - Tipos de Triângulos

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var [a ,b, c] = prompt().split(" ").map(Number);
var valor = [4];


if (a >= b && a >=c)
{
    primeiro = a;
    segundo = b;
    terceiro = c;
}