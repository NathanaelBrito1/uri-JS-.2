//1047 - Tempo de Jogo com Minutos

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var Hi,Mi,Mf,MiT,MfT,dur_H,dur_M;
[Hi,Mi,Hf,Mf] = prompt().split(" ").map(Number);
MiT = Mi + (Hi*60);
MfT = Mf + (Hf*60);
if(MfT>MiT){
	dur_H = parseInt((MfT - MiT)/60);
    dur_M = (MfT - MiT)%60;
}else{
	dur_H = parseInt(((24*60-MiT)+ MfT)/60);
    dur_M = ((24*60-MiT)+ MfT)%60;
}
console.log("O JOGO DUROU "+dur_H+" HORA(S) E "+dur_M+" MINUTO(S)");