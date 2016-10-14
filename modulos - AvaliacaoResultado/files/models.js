exports.testCorrectRevengeOfThePancakes = function(resultUser, listaDePanquecas){
	var estadoAtual = 0;
	var interacoes = 0;
	estadoAtual = listaDePanquecas[0];
	for (var i = 1; i < listaDePanquecas.length; i++) {

		if (listaDePanquecas[i]!=estadoAtual) {
			interacoes++;
			estadoAtual = listaDePanquecas[i];
		}
	}
	if (estadoAtual=='-') {
		estadoAtual='+';
		interacoes++
	}
	if (resultUser==interacoes) {
		return true;
	}else{
		return false;
	}
}

exports.testCorrectCountingSheep = function(resultUser, nrBleatriz){
	if(resultUser!="INSONIA"){
		while(resultUser>=0){
			if((resultUser%nrBleatriz)!=0){
				return false;
			}else{
				resultUser = resultUser - nrBleatriz;
			}
		}
		return true;
	}else{
		var verificaCasoBase = modeloContandoCarneiros(nrBleatriz);
		console.log(verificaCasoBase)
		if (verificaCasoBase==resultUser) {
			return true;
		}else{
			return false;
		}
	}
}

exports.testCorrectStandingOvation = function(resultUser, vet){
	var qtdPessoasPlateia = 0;
	for (var j = 0; j < vet.length; j++) {
		qtdPessoasPlateia = qtdPessoasPlateia + vet[j];
	}
	var pessEmPe = vet[0];
	var amigos = 0;
	for (var i = 1; i < vet.length; i++) {		
		while(pessEmPe < i){
			pessEmPe = pessEmPe + 1;
			amigos = amigos + 1;
		}
		pessEmPe = pessEmPe + vet[i];
	}
	if (amigos==resultUser) {
		return true;
	}else{
		return false;
	}
}

exports.testDijkstra = function(resultUser, qtdCarac, qtdRepet, listCaract){
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