//1011 - Esfera

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var R = parseFloat(prompt());
var PI = 3.14159;
var volume = (4/3) * PI * (R*R*R);
console.log('VOLUME = '+volume.toFixed(3));