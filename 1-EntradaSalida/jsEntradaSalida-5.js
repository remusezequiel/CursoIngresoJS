/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;//Defino las variables a utilizar
    var edad;
    var mensaje;

    nombre = document.getElementById("elNombre").value;
    //Le otorgo la funcion a nombre que toma el valor puesto en el id
    edad = document.getElementById("laEdad").value;
    //Le otorgo la funcion a edad que toma el valor puesto en el id
    mensaje = "Su nombre es" +nombre+ "y su edad es" +edad;
    //Defino la variable del mensaje que se quiere ver en pantalla

    alert(mensaje);
}

