/**
 * Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera
e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )
 */
function mostrar()
{
//--------VARIABLES-------------------------------------------------------------------------------------
    var marca,peso,temperatura,respuesta,pp,bandera;
    bandera = true;
    respuesta = 'si';
    //pp=sp/contp; sera el promedio de los pesos de todos los productos    

//--------CONTADORES-------------------------------------------------------------------------------------
    var contp,tp,mmp,cpbc;
    contp=0;//contador de productos
    tp=0;//contador de temperaturas pares
    mmp='x';//marca del producto mas pesado
    cpbc=0;//cantidad de productos bajo cero    
//------------------------------------------------------------------------------------------------------    

//--------ACUMULADORES-------------------------------------------------------------------------------------
    var pmax,pmin,sp;

    pmax=0;//Aca se guarda el peso maximo
    pmin=101;//Aca se guarda el peso minimo
    sp=0;//suma de productos para luego calcular el promedio

//------------------------------------------------------------------------------------------------------    


//--------SENTENCIAS-------------------------------------------------------------------------------------
    while(respuesta!='no')
    {   
        contp++;
        //PIDO MARCA------------------------------------------
        marca=prompt('ingrese la marca');
        //----------------------------------------------------
        //PIDO EL PESO Y VALIDO--------------------------------
        peso=prompt('ingrese el peso');
        peso=parseInt(peso);
        sp+=peso;
        while(peso<1 || peso>101)
        {
            alert('rango de peso erroneo. intervalo 1-100');
            peso=prompt('ingrese el peso');
            peso=parseInt(peso);
            sp+=peso;
        }
        //------------------------------------------------------------
        //PIDO TEMPERATURA Y VALIDO--------------------------------------
        temperatura=prompt('ingrese una tempertura de conserva');
        temperatura=parseInt(temperatura)
        while(temperatura<-31 || temperatura>30)
        {
            alert('rango de temperaturas erroneo');
            temperatura=prompt('ingrese una tempertura de conserva');
            temperatura=parseInt(temperatura)
        
        }
       //

       //CONDICIONES-----------------------------------------------------------
        if(temperatura%2==0)//temperaturas pares
        {
            tp++;
        }
        
        if(bandera)//pesosminimos y maximos
        {
            bandera=false;
            pmax=peso;
            pmin=peso;
            mmp=marca;
        }
        else if(peso>pmax)
        {
            pmax=peso;
            mmp==marca;  
        }
        else if(peso<pmin)
        {
            pmin=peso;
        }

        if(temperatura<0)//temperaturas bajo cero
        {
            cpbc++;
        }

       //----------------------------------------------------------------------



        respuesta=prompt('¿quiere seguir ingresando productos?');
    }
//------------------------------------------------------------------------------------------------------    

//--------PROMEDIO------------------------------------------------------------------------------------
    pp=sp/contp;
//----------------------------------------------------------------------------------------------------
//--------INFORME-------------------------------------------------------------------------------------
    document.write(
        'a) La cantidad de temperaturas pares.'+' '+tp +'<br>'+ 
        'b) La marca del producto más pesado'+' '+ mmp +'<br>'+ 
        'c) La cantidad de productos que se conservan a menos de 0 grados.'+' '+ cpbc +'<br>'+ 
        'd) El promedio del peso de todos los productos.'+' '+ pp +'<br>'+	
        'f) El peso máximo y el mínimo.'+' '+'<br>'+
            'maximo:' + ' ' + pmax + '<br>'+
            'minimo:' + ' ' + pmin
    );    
//------------------------------------------------------------------------------------------------------    

}
