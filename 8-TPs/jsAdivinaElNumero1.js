/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
 
/**¿como generar un numero del 1 al 10?
  *     var numeroAleatorio;
  * 
  *     numeroAleatorio = Math.random(); genera un numero entre un 0 y 1
  * 
  */
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
    numeroSecreto= Math.floor(Math.random()*(100)+1); //Genera un numero entre
    console.log(numeroSecreto);                         //Muestra a la variable en la pantalla
    contadorIntentos=0;                                 //Primero al contador le otorgamos el valor nulo
		//alert(numeroSecreto );
	}

function verificar()
{
  numero = document.getElementById("numero").value;
  contadorIntentos = parseInt(contadorIntentos) ;
   
   document.getElementById("intentos").value = parseInt(contadorIntentos);

  if(numero == numeroSecreto){
    alert("Gano")
  }else if(numero>numeroSecreto){
      alert("se paso")
    }else{
        alert("falta")}
      };
	
	