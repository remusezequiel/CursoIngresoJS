/**Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar  */

function mostrar()
{
//-------VARIABLES------------------------------------
    var nota,edad,sexo,cont,respuesta;
    
//-------CONTADORES-----------------------------------
    cont=0;  
//----------------------------------------------------    
    respuesta="si";
//-------Notas----------------------------

    while(respuesta != "no")
    {
        nota=prompt('Ingrese las notas')
        while(nota>10)
        {    
            cont++;
            alert('EL NIMERO INGRESADO NO CORRESPONDE A UNA NOTA');
            nota=prompt('Ingrese las notas');
        }
        
        
        respuesta=prompt('¿Quiere ingresar mas notas?');
    }

    edad=prompt("Ingrese su edad");
    
    //-----Genero----------------------------------------------
    sexo=prompt("Ingrese su genero");

    while(sexo!='m' && sexo!= 'f')
    {
        alert('No existe ese genero');
        sexo=prompt("Ingrese su genero");
    }

    
}
