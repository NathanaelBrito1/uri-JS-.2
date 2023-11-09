//1041 - Coordenadas de um Ponto

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var [x, y]=prompt().split(" ");
var X = parseFloat(x).toFixed(1);
var y = parseFloat(y).toFixed(1);

if(x == 0 && y == 0){
    console.log("Origem");
} else if (x == 0) {
    console.log("Eixo Y");
} else if (y == 0){
    console.log("Eixo X");
} else if (y > 0 && x > 0){
    console.log("Q1");
} else if (y > 0 && x < 0){
    console.log("Q2");
} else if (y < 0 && x < 0){
    console.log("Q3");
} else if (y < 0 && x > 0){
    console.log("Q4");
}