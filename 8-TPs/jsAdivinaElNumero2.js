/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto= Math.floor(Math.random()*(100)+1); //Genera un numero entre
    console.log(numeroSecreto);                         //Muestra a la variable en la pantalla
    contadorIntentos=0;        
	
}

function verificar()
{
	var N = document.getElementById("numero").value;
	contadorIntentos = contadorIntentos+1;
        var r = document.getElementById("intentos").value = contadorIntentos;
	
    	if(numeroSecreto==N && r == 1 ){
		alert("\"Usted es un psiquico\"")
	}else if(numeroSecreto==N && r == 2 ){
		alert("\"Exelente percepción\"")
	}else if(numeroSecreto==N && r == 3){
        alert("\"Esto es suerte\"")
	}else if(numeroSecreto==N && r == 4){
        alert("\"Exelente tecnica\"")
	}else if(numeroSecreto==N && r == 5){
        alert("\"Usted esta en la media\"")
	}else if(numeroSecreto==N && 5<r && r<11){
        alert("\"Falta tecnica\"")
	}else if(numeroSecreto==N && r<10){
        alert("\"Afortunado en el amor\"")};
	
	}