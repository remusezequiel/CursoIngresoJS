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
//-------VARIABLES-----------------------------------------------------
    var nombre,nota,edad,sexo,respuesta,nombre,promedio;
    var cont,max,min;
    var an;
    respuesta="si";
//-------CONTADORES----------------------------------------------------
    cont=0; 
//-------MAXIMOS Y MINIMOS---------------------------------------------
    emax=0;
    emin=101;
    nmax=0;
    nmin=11;
//-------ACUMULADORES--------------------------------------------------    
    an=0;//acumulador de notas
//-------SENTENCIAS----------------------------------------------------
    
    while(respuesta != "no")
    {
        //----NOMBRE---------------------------------------------------
        nombre=prompt('Ingrese su nombre');
        //----Notas----------------------------------------------------
        nota=prompt('Ingrese las notas')
        while(nota>10)
        {    
            cont++;
            alert('EL NUMERO INGRESADO NO CORRESPONDE A UNA NOTA');
            nota=prompt('Ingrese las notas');
            an=an+nota;//an+=nota    
        }
        an=an+nota;//an+=nota
        //--------------------------------------------------------------
        
        //-----EDAD-----------------------------------------------------
        edad=prompt("Ingrese su edad");
        //--------------------------------------------------------------
        
        //-----Genero---------------------------------------------------
        sexo=prompt("Ingrese su genero");

        while(sexo!='m' && sexo!= 'f')
        {
            alert('No existe ese genero');
            sexo=prompt("Ingrese su genero");
        }

        //--------------------------------------------------------------

        //-----NOTA MAS BAJA Y SEXO DE LA PERSONA ----------------------

        if (nota<nmin)
        {
            nmin=nota;
        }   
        
        if(sexo=m && edad>17 && nota>5)
        {
            msg="";
        }
        respuesta=prompt('¿Quiere ingresar mas notas?');

    }   


    //----CUENTAS--------------------------------------------------
    promedio=an/cont;//(a)

}
