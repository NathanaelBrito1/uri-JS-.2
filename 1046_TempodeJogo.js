//1046 - Tempo de Jogo
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var [A,B] =prompt().split(" ").map(Number);

if(A > B){
    console.log('O JOGO DUROU ' + (24 - (A - B)) + ' HORA(S)');
} else if (B > A){
    console.log('O JOGO DUROU ' + (B - A) + ' HORA(S)');
} else{
    console.log('O JOGO DUROU 24 HORA(S)');
}