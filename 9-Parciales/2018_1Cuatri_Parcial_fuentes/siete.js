function mostrar()
{
    //------VARIABLES------------------------------------------------------------
    var nombre,edad,sexo;
    var respuesta="si";
    //------CONTADORES-----------------------------------------------------------
    var cont=0;
    var ch=0;//Contador de hombres
    var cm=0;//Contador de mujeres
    var mayor=0;//Contador de mayores
    var menor=0;//Contador de menores
    var hmayor=0;
    
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
        if(edad<18)
        {
            menor++;
        }
        else if(edad>18 && sexo == "m")
        {
            hmayor++;
            mayor++;
        }
        else
        {
            mayor++;
        }
        if(sexo="m")
        {
            ch++;
        }
        else
        {
            cm++;
        }

        respuesta=prompt('Quiere agregar mas edades?');

    }
    
    document.write('Cantidad de menores:'+''+menor+'<br>'+
                   'Cantidad de mayores:'+''+mayor+'<br>'+
                   'Cantidad de hombres mayores:'+''+hmayor+'<br>'+
                   'Cantidad de hombres:'+' '+ch+'<br>'+
                   'Cantidad de mujeres:'+' '+ch+'<br>');
}
