var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random()*4);
	console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	 if(eleccionMaquina == 1)
    {
        alert("Empate!");
		ContadorDeEmpates=ContadorDeEmpates++
    }
    else if(eleccionMaquina == 2)
    {
        alert("Perdiste!");
		ContadorDePerdidas = ContadorDePerdidas++;
		document.getElementById("perdidas").value = ContadorDePerdidas;
    }
    else if(eleccionMaquina == 3)
    {
        alert("Ganaste!");
		ContadorDeGanadas = ContadorDeGanadas++;
		document.getElementById("ganadas").value = ContadorDeGanadas;
    }

}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina == 2)
    {
        alert("Empate!");
    }
    else if(eleccionMaquina == 3)
    {
        alert("Perdiste!");
    }
    else if(eleccionMaquina == 1)
    {
        alert("Ganaste!");
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
	 if(eleccionMaquina == 3)
    {
        alert("Empate!");
    }
    else if(eleccionMaquina == 1)
    {
        alert("Perdiste!");
    }
    else if(eleccionMaquina == 2)
    {
        alert("Ganaste!");
    }
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}