/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;//creo la variable dato

	dato = prompt("tomar dato");//a la variable le asigno la funciom prompt

	document.getElementById("elNombre").value=dato;//al id le otorgo el valor de la variable
}

