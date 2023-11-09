//1008 - Salário

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};
var num=parseInt=prompt();
var valor=parseInt=prompt();
var horas=parseInt=prompt();
var salario = valor * horas;
console.log("NUMBER = " + num);
console.log("SALARY = U$ " + salario.toFixed(2));