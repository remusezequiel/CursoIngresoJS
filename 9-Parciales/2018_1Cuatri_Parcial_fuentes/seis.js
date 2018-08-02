/**
 * Enunciado:
Bienvenidos. 
Se ingresa una hora. 
Si está entre las 6 y las 11 mostrar:"es de mañana", 
si es desde las 12 a las 19: "es de tarde", 
de lo contrario informar que es de noche. 
Informar si la hora no es válida. 
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir". 

Aclaración: hacer un switch y dentro toda la lógica.
 */
function mostrar()
{
    //id=laHora
    var hora=document.getElementById("laHora").value;
    var cont=0;
  //------------------------------------------------------------
    while(hora<0 || hora>24)
    {   
        cont++;
        alert('LA HORA INGRESADA ES ERRONEA');
        hora=prompt('Ingrese una hora (entre la 1 y las 24)');
    }   

    if(hora>5 && hora<12)
    {
        alert('Es de mañana');
    }
    else if(hora>11 && hora<20)
    {
        alert('Es tarde');
    }
    else
    {
        alert('Es de noche');
    }
}
