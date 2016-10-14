exports.userRevengeOfThePancakes = function(listaDePanquecas){
		var aux = 0;
		var qtdInteracoes = 0;
		for (var i = 0; i < listaDePanquecas.length-1; i++) {
			if(listaDePanquecas[i]!=listaDePanquecas[i+1]){
				aux = i;
				while(aux>=0){
					listaDePanquecas[aux] = listaDePanquecas[i+1];
					aux = aux -1;
				}
				qtdInteracoes = qtdInteracoes + 1;
			}
		}
		if (listaDePanquecas[0]=="-") {		
			for (var j = 0; j < listaDePanquecas.length; j++) {
				listaDePanquecas[j] = "+";
			}
			qtdInteracoes = qtdInteracoes + 1;		
		}else{
			return qtdInteracoes;
		}
		return qtdInteracoes;
}

exports.userCountingSheep = function(nrBleatriz){
	var auxiliar = require('./auxiliary.js');
	if(nrBleatriz==0){
		return console.log("INSONIA");
	}else{
		var digitosDeControle = ["0","1","2","3","4","5","6","7","8","9"];
		var amazenagem = "";
		var multplicacao = "";
		for (var i = 1; i <= 100; i++) {			
			multplicacao = (nrBleatriz*i).toString();
			for (var j = 0; j < multplicacao.length; j++) {
				digitosDeControle = auxiliar.verificaContimento(multplicacao[j], digitosDeControle);
			}			
			if (digitosDeControle.length < 1) {
				return multplicacao;
			}
		}
	}
	return("INSONIA");
}

exports.userStandingOvation = function(maxTimidez, pessoas_timidez){
	var pessoasEmPe = pessoas_timidez[0];
	var amigos = 0;
	for (var i = 1; i < pessoas_timidez.length; i++) {
		if(pessoas_timidez[i]>0){
			if(pessoasEmPe >= i){
				pessoasEmPe = pessoasEmPe + pessoas_timidez[i];
			}else{
				amigos = amigos+(i-pessoasEmPe);
				pessoasEmPe = pessoasEmPe + (i-pessoasEmPe) + pessoas_timidez[i];
			}
		}
	}
	return amigos;
}

exports.userDijkstra = function(qtdCarac, qtdRepet, listCaract){
	var auxiliar = require('./auxiliary.js');
	if((qtdCarac < 3)&&(qtdRepet==1)){
		return false;
	}else{
		var caractAvaliados = auxiliar.geraVetParaAvaliacao(listCaract, qtdRepet);
		var statusI = auxiliar.multVetI("i", caractAvaliados);
		var statusJ = auxiliar.multVetJ("j", caractAvaliados);
		var statusK = auxiliar.multVetK("k", caractAvaliados);
		if(statusI != false){
			if (statusJ != false) {
				if (statusK != false) {
					return true;
				}else{
					return false;
				}
			}
			else{	
				return false;
			}
		}else{
			return false;
		}
	}
}