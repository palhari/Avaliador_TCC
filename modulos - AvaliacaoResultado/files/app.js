exports.appRevengeOfThePancakes = function(){
		var geradorDe = require('./auxiliary.js');
		var modeloAlgoritmo = require('./models.js');
		var userAlgoritmo = require('./userFiles.js');	
		var tempoInicialUsuario = 0;
		var tempoFinalUsuario = 0;
		var tempoUsuario = 0;
		var loop = 1;
		var nrDePanquecas = 0;
		var listaDePanquecas1 = [];
		var listaDePanquecas2 = [];
		while(loop <= 100){
			nrDePanquecas = geradorDe.qtdDePanquecas();
			listaDePanquecas1 = geradorDe.geraPanquecas(nrDePanquecas);
			listaDePanquecas2 = geradorDe.copiaVetorPanquecas(listaDePanquecas1);
			console.log("Caso: "+loop+" | Panquecas Avaliadas: "+listaDePanquecas1);
			tempoInicialUsuario = new Date;
			var resultUser = userAlgoritmo.userRevengeOfThePancakes(listaDePanquecas1);
			tempoFinalUsuario = new Date;
			tempoUsuario = (tempoUsuario + ((tempoFinalUsuario-tempoInicialUsuario)/1000));
			

			var resultAvaliador = modeloAlgoritmo.testCorrectRevengeOfThePancakes(resultUser, listaDePanquecas2);
			

			if(resultAvaliador!=true){
				return console.log('\n Caso de Testes Falhou');
			}
			loop = loop +1;
			console.log("Algoritmo validado\n");
		}
		
		tempoUsuario = (tempoUsuario/(loop-1));
		
		return console.log('Testes de Corretude Realizado: OK\n\nTempo Médio de Execucao:'+tempoUsuario+'s\n\n');	
}

exports.appCountingSheep = function(){
	var loop = 1;
	var geradorDe = require('./auxiliary.js');
	var modeloAlgoritmo = require('./models.js');
	var userAlgoritmo = require('./userFiles.js');		
	var tempoInicialUsuario = 0;
	var tempoFinalUsuario = 0;
	var tempoUsuario = 0;
	var nrBleatriz = 0;
	console.log("Modo de Avaliacao: Validacao de Resultado");
	while(loop <= 100){
		nrBleatriz = geradorDe.geranrBleatriz();
		console.log("Caso: "+loop+" | Numero Bleatriz Avaliado: "+nrBleatriz);
		tempoInicialUsuario = new Date;
		var resultUser = userAlgoritmo.userCountingSheep(nrBleatriz);
		tempoFinalUsuario = new Date;
		tempoUsuario = (tempoUsuario + ((tempoFinalUsuario-tempoInicialUsuario)/1000));
		var resultAvaliador = modeloAlgoritmo.testCorrectCountingSheep(resultUser, nrBleatriz);
		
		
		if(resultAvaliador != true){
			console.log("OBS: Resutado deve estar em formato String \n");
			return console.log('Caso de Testes Falhou');
		}
		console.log("Algoritmo validado\n");

		loop = loop +1;		
	}
	tempoUsuario = (tempoUsuario/(loop-1));
	
	return console.log('Testes de Corretude Realizado: OK\n\nTempo Médio de Execucao:'+tempoUsuario+'s\n\n');	
}

exports.appStandingOvation = function(){
	var loop = 1;
	var geradorDe = require('./auxiliary.js');
	var modeloAlgoritmo = require('./models.js');
	var userAlgoritmo = require('./userFiles.js');	
	var tempoInicialUsuario = 0;
	var tempoFinalUsuario = 0;
	var tempoUsuario = 0;
	var maximoTimidez = 0;
	var pessoasTimidez = [];
	while(loop <= 100){
		var maximoTimidez = geradorDe.nivelMaxTimidez();
		var pessoasTimidez = geradorDe.pessoas_timidez(maximoTimidez);
		console.log("Caso: "+loop+" | Timidez Maxima: "+maximoTimidez+" | Pessoas em ordem de Dimidez: "+pessoasTimidez);
		tempoInicialUsuario = new Date;
		var resultUser = userAlgoritmo.userStandingOvation(maximoTimidez, pessoasTimidez);
		tempoFinalUsuario = new Date;
		tempoUsuario = (tempoUsuario + ((tempoFinalUsuario-tempoInicialUsuario)/1000));
		var resultAvaliador = modeloAlgoritmo.testCorrectStandingOvation(resultUser, pessoasTimidez);
		
		
		if(resultAvaliador != true){
			return console.log('Caso de Testes Falhou');
		}
		console.log("Algoritmo validado.\n");
		loop = loop +1;	
		
	}
	tempoUsuario = (tempoUsuario/(loop-1));
	return console.log('Testes de Corretude Realizado: OK\n\nTempo Médio de Execucao:'+tempoUsuario+'s\n\n');
}

exports.appDijkstra = function(){
	var loop = 1;
	var geradorDe = require('./auxiliary.js');
	var modeloAlgoritmo = require('./models.js');
	var userAlgoritmo = require('./userFiles.js');
	var tempoInicialModelo = 0;
	var tempoFinalModelo = 0
	var tempoModelo = 0;		
	var tempoInicialUsuario = 0;
	var tempoFinalUsuario = 0;
	var tempoUsuario = 0;
	var condicao = false;
	var qtdCaract = 0;
	var qtdRepet = 0;
	while(loop <= 100){//baseado no codeJam
		while(condicao!=true){
			qtdCaract = geradorDe.qtdCaracters();
			qtdRepet = geradorDe.qtdDeRepet();
			if((qtdCaract*qtdRepet)<=10000){
				condicao = true;
			}
		}
		var lista = geradorDe.geraCaracts(qtdCaract);
		console.log("Caso: "+loop+" | Quantidade de Caracteres: "+qtdCaract+" | Quantidade de Repetições dos Caracteres: "+qtdRepet+" | Caracteres: "+lista+"\n");
		
		tempoInicialUsuario = new Date;
		var resultUser = userAlgoritmo.userDijkstra(qtdCaract, qtdRepet, lista);
		tempoFinalUsuario = new Date;
		tempoUsuario = (tempoUsuario + ((tempoFinalUsuario-tempoInicialUsuario)/1000));
		


		var resultAvaliador = modeloAlgoritmo.testDijkstra(resultUser, qtdCaract, qtdRepet, lista);
		
		



		if(resultAvaliador != resultAvaliador){
			return console.log('Caso de Testes Falhou');
		}
		condicao = false;
		loop = loop +1;		
	}
	tempoUsuario = (tempoUsuario/(loop-1));
	return console.log('Testes de Corretude Realizado: OK\n\nTempo Médio de Execucao:'+tempoUsuario+'s\n\n');
}