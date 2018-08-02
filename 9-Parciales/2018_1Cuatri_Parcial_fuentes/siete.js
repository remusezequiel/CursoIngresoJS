/**
 * 1) Cantidad de mujeres
 * 2) Cantidad de hombres
 * 3) Cantidad de mayores de edad
 * 4) Cantidad de menores de edad
 * 4.1) Cantidad de hombres mayores de edad
 * 5) La edad mas baja
 * 6) La edad mas alta
 * 7) promedio de edad de las mujeres
 * 8) promedio de edad de los hombres
 * 9) promedio de edad total
 * 10)nombre del mas viejo
 * 11)nombre de mas joven
 * 12)sexo del mas viejo
 * 13)nombre de la mujer mas vieja
 */

function mostrar()
{
//------VARIABLES------------------------------------------------------------
    var nombre,edad,sexo,respuesta,pem,peh,pet;  //
    var cont,ch,cm,mayor,menor,hMayor;          //CONTADORES
    var aem,aeh,aet;                           //ACUMULADORES
    var eMax,eMin;                            //EDADES MAXIMAS Y MINIMAS
    eMax=0;
    emin=101;
    respuesta="si";
//------CONTADORES-----------------------------------------------------------
    cont=0;
    ch=0;                                 //Contador de hombres
    cm=0;                                //Contador de mujeres
    mayor=0;                            //Contador de mayores
    menor=0;                           //Contador de menores
    hMayor=0;
//------ACUMULADORES---------------------------------------------------------
    
   
    /**var max=0;
     * var min=101;
     * if(edad>max){max=edad;}
     * if(edad<min){min=edad;}
     */
 //---------------------------------------------------------------------------------------------
    while(respuesta!="no")
    {
        cont++;
        //-----Pido la edad---------------------------------------------------------------------

        edad=prompt('Ingrese su edad');
        edad=parseInt(edad);
        while(edad<0 || edad >100 || isNaN(edad))
        {
            edad=prompt('Ingrese su edad');
            edad=parseInt(edad);
        }
        //----Pido el sexo-----------------------------------------------------------------------
        sexo=prompt('Ingrese cual es su genero');
        while(sexo!="m" && sexo!="f")
        {
            sexo=prompt('Ingrese f o m segun sea su genero femenino o masculino respectivamente');
        }
        //---Cuento------------------------------------------------------------------------------
        if(edad<18){
            menor++;
        }
        else if(edad>18 && sexo == "m") {
            hMayor++;
            mayor++;
        }
        else 
        {
            mayor++;
        }
        if(sexo="m"){
            ch++;
        }
        else {
            cm++;
        }
        //---Edades minimas y maximas--------------------------------------------------------------
        if(edad>max)
        {
            max=edad;
        }
        if(edad<min)
        {
            min=edad;
        }
        //---


        respuesta=prompt('Quiere agregar mas edades?');

    }
    //-------------PROMEDIOS------------------------------------------------------------------------
    document.write('Cantidad de menores:'+''+menor+'<br>'+
                   'Cantidad de mayores:'+''+mayor+'<br>'+
                   'Cantidad de hombres mayores:'+''+hmayor+'<br>'+
                   'Cantidad de hombres:'+' '+ch+'<br>'+
                   'Cantidad de mujeres:'+' '+ch+'<br>'
                );
}
