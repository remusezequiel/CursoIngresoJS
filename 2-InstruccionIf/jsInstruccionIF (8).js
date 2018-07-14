/**Al ingresar una edad menor a 18 años y un estado civil
 * distinto a soltero no hacer nada, pero si no es asi,
 *  y es soltero y no es menor, mostrar el sig. mensaje 
 * "es soltero y no es menor"
 */

function mostrar()
{
//tomo la edad  
var edad;
var eC;// => Estado civil

edad = document.getElementById("edad").value;
eC = document.getElementById("estadoCivil").value;

//Sentencias

if( edad > 17  && eC == "Soltero"){
    alert("Es soltero y no es menor!")
};
	


}//FIN DE LA FUNCIÓN