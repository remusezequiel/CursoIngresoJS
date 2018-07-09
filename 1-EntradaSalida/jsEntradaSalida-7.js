/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var a = document.getElementById("numeroUno").value;
    var b = document.getElementById("numeroDos").value;
    var c = parseInt(a) + parseInt(b);

    alert("la suma es"+ c);
}

function restar()
{
    var a = document.getElementById("numeroUno").value;
    var b = document.getElementById("numeroDos").value;
    var c = parseInt(a) - parseInt(b);

    alert("la suma es" + " "+ c);
	//el + sirve para concatenar y (+ " " +) concatena un espacio en blanco
}

function multiplicar()
{ 
	var a = document.getElementById("numeroUno").value;
    var b = document.getElementById("numeroDos").value;
    var c = parseInt(a) * parseInt(b);

    alert("la suma es"+ c);
}

function dividir()
{
	var a = document.getElementById("numeroUno").value;
    var b = document.getElementById("numeroDos").value;
    var c = parseInt(a) / parseInt(b);

    alert("la suma es"+ c);
}

