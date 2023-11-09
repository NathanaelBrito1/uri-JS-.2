//1005 - Média 1

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var A = parseFloat(prompt ("Informe a primeira nota do aluno:"));
var B = parseFloat(prompt("Informe a segunda nota do aluno:"));
var m = (3.5 * A + 7.5 * B)/11;
console.log("MEDIA = "+m.toFixed(5));