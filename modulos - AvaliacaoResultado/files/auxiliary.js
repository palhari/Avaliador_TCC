exports.qtdDePanquecas = function(){
		var chave = Math.floor(Math.random() * 100)+1;
		return chave;
}

exports.geraPanquecas = function(qtdDePanquecas){
		var panquecas = [];
		var formato = require("./auxiliary.js");
		for (var i = 0; i < qtdDePanquecas; i++) {
			panquecas[i] = formato.formatoDaPanqueca();
		}

		return panquecas;
}

exports.formatoDaPanqueca = function(){
		var tiposDePanquecas = ["-", "+"];
		return tiposDePanquecas[Math.floor(Math.random() * 2)];
}

exports.copiaVetorPanquecas = function(listaParaSerCopiada){
	var lista = [];
	for (var i = 0; i < listaParaSerCopiada.length; i++) {
		lista.push(listaParaSerCopiada[i]);
	}
	return lista;
}



exports.geranrBleatriz = function(){
	var nrBleatriz = Math.floor(Math.random() * 1000000)+1;
	return nrBleatriz;
}

exports.verificaContimento = function(multplicacao, digitosDeControle){
	var auxiliar = "";
	for (var i = 0; i < digitosDeControle.length; i++) {
		if(multplicacao==digitosDeControle[i]){
			auxiliar = digitosDeControle[i];
			digitosDeControle[i] = digitosDeControle[digitosDeControle.length-1];
			digitosDeControle[digitosDeControle.length-1] = auxiliar;
			digitosDeControle.pop();
		}
	}
	
	return digitosDeControle;
}

exports.nivelMaxTimidez = function(){
	var timidez = Math.floor(Math.random() * 1000)+1;
	return timidez;
}

exports.pessoas_timidez = function(qtdElementos){
	var vet = new Array ();
	while(qtdElementos > 1){
		vet.push(Math.floor(Math.random() * 6));
		qtdElementos--;
	}
	vet.push(Math.floor(Math.random() * 6)+1)
	return vet;
}

exports.qtdCaracters = function(){
	return Math.floor(Math.random() * 10000);
}

exports.qtdDeRepet = function(){
	return Math.floor(Math.random() * 100);
}

exports.geraCaracts = function(qtdCaract){
	var gerador = require('./auxiliary.js');
	var stringSorteado = [];
	for (var i = 0; i < qtdCaract; i++) {
		stringSorteado[i] = gerador.sortCaract(); 	
	}
	return stringSorteado
}

exports.sortCaract = function(){
	var vetElements = ["i", "j", "k"];
	return vetElements[Math.floor(Math.random() * 3)];
}

exports.multDijkstra = function(x,y){
	var one = "1";
	var i = "i";
	var j = "j";
	var k = "k";

	var none = "-1";
	var ni = "-i";
	var nj = "-j";
	var nk = "-k";

	if((x=="1")&&(y=="1")){
		return one;
	}else if ((x=="1")&&(y=="i")){
		return i;
	}else if((x=="1")&&(y=="j")){
		return j;
	}else if((x=="1")&&(y=="k")){
		return k;
	}
	else if((x=="i")&&(y=="1")){
		return i;
	}else if ((x=="i")&&(y=="i")){
		return none;
	}else if((x=="i")&&(y=="j")){
		return nk;
	}else if((x=="i")&&(y=="k")){
		return j;
	}
	else if((x=="j")&&(y=="1")){
		return j;
	}else if ((x=="j")&&(y=="i")){
		return k;
	}else if((x=="j")&&(y=="j")){
		return none;
	}else if((x=="j")&&(y=="k")){
		return ni;
	}
	else if((x=="k")&&(y=="1")){
		return k;
	}else if ((x=="k")&&(y=="i")){
		return nj;
	}else if((x=="k")&&(y=="j")){
		return i;
	}else if((x=="k")&&(y=="k")){
		return none;
	}
	else if((x=="-1")&&(y=="1")){
		return none;
	}else if ((x=="-1")&&(y=="i")){
		return ni;
	}else if((x=="-1")&&(y=="j")){
		return nj;
	}else if((x=="-1")&&(y=="k")){
		return nk;
	}
	else if((x=="-i")&&(y=="1")){
		return ni;
	}else if ((x=="-i")&&(y=="i")){
		return one;
	}else if((x=="-i")&&(y=="j")){
		return k;
	}else if((x=="-i")&&(y=="k")){
		return nj;
	}
	else if((x=="-j")&&(y=="1")){
		return nj;
	}else if ((x=="-j")&&(y=="i")){
		return nk;
	}else if((x=="-j")&&(y=="j")){
		return one;
	}else if((x=="-j")&&(y=="k")){
		return i;
	}
	else if((x=="-k")&&(y=="1")){
		return nk;
	}else if ((x=="-k")&&(y=="i")){
		return j;
	}else if((x=="-k")&&(y=="j")){
		return ni;
	}else if((x=="-k")&&(y=="k")){
		return one;
	}
	else if((x=="-1")&&(y=="-1")){
		return one;
	}else if ((x=="-1")&&(y=="-i")){
		return i;
	}else if((x=="-1")&&(y=="j")){
		return j;
	}else if((x=="-1")&&(y=="k")){
		return k;
	}
	else if((x=="-i")&&(y=="-1")){
		return i;
	}else if ((x=="-i")&&(y=="-i")){
		return none;
	}else if((x=="-i")&&(y=="-j")){
		return nk;
	}else if((x=="-i")&&(y=="-k")){
		return j;
	}
	else if((x=="-j")&&(y=="-1")){
		return j;
	}else if ((x=="-j")&&(y=="-i")){
		return k;
	}else if((x=="-j")&&(y=="-j")){
		return none;
	}else if((x=="-j")&&(y=="-k")){
		return ni;
	}
	else if((x=="-k")&&(y=="-1")){
		return nk;
	}else if ((x=="-k")&&(y=="-i")){
		return j;
	}else if((x=="-k")&&(y=="-j")){
		return ni;
	}else if((x=="-k")&&(y=="-k")){
		return one;
	}else{
		return false;
	}
}

exports.multVetK = function(elemAnalisado, vet){
	var auxiliar = require('./auxiliary.js');
	var resultK = false;
	var multiplicador = "1";	
	for (var i = vet.length-1; i > 0; i--) {
		multiplicador = auxiliar.multDijkstra(multiplicador, vet[i]);		
		vet.pop();
	}
	if (multiplicador=="k"){
		resultK = true;
		return resultK;
	}else if(multiplicador=="-k"){
		resultK = true;
		return resultK;
	}else{
		return resultK;
	}
}

exports.multVetJ = function(elemAnalisado, vet){
	var auxiliar = require('./auxiliary.js');
	var multiplicador = "1";
	var resultJ = false;
		for (var i = vet.length-1; i>0; i--) {
				multiplicador = auxiliar.multDijkstra(multiplicador, vet[i]);
				if (multiplicador=="j") {
					resultJ = true;
					multiplicador = "1";
					vet.pop();					
					return resultJ;
				}else if (multiplicador=="-j") {
					resultJ = true;
					multiplicador = "1";
					vet.pop();					
					return resultJ;
				}else{
					vet.pop();
				}
			}
			if ((i==0)&&(resultJ==false)) {
				return false;
			}
}

exports.multVetI = function(elemAnalisado, vet){
	var auxiliar = require('./auxiliary.js');
	var multiplicador = "1";
	var resultI = false;
	for (var i = vet.length-1; i>0; i--) {
		multiplicador = auxiliar.multDijkstra(multiplicador, vet[i]);
		if(multiplicador=="i"){
			resultI = true;
			multiplicador = "1";
			vet.pop();
			return resultI;
		}else if(multiplicador=="-i"){
			resultI = true;
			multiplicador = "1";
			vet.pop();
			return resultI;
		}else{
			vet.pop();	
		}
	}
	if((i==0)&&(resultI==false)){
			return false;
	}
}

exports.invertVetor = function(vetor){
	var vet = [];
	for (var i = vetor.length; i >= 0; i--) {
		vet.push(vetor[i])
	}
	return vet;
}

exports.geraVetParaAvaliacao = function(vet, qtdRepet){
	var auxiliar = require('./auxiliary.js');
	var vetSaida = [];
	var vetInver = []
	while(qtdRepet > 0){
		for (var i = 0; i < vet.length; i++) {
			vetSaida.push(vet[i]);
		}
		qtdRepet = qtdRepet-1;
	}
	vetInver = auxiliar.invertVetor(vetSaida);
	return vetInver;
}