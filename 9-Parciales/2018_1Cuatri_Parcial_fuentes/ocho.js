/**Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra y un número entre -100 y 100 (validar) hasta que el usuario 
quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7) */

//pnpi=snp/cnp;
function mostrar()
{
//--------------VARIABLES------------------------------------------------------------------------------------
    var letra,numero,pnpi,respuesta,bandera;// pni es promedio de numeros positivos ingresados
    respuesta='si';
    bandera=true;
    
//---------------------------------------------------------------------------------------------------------    
//--------------CONTADORES---------------------------------------------------------------------------------
    var cont,cp,ci,cc;
    cnp=0;//contador de numeros positivos
    cnn=0;//contador de numeros negatvos
    cp=0; //contador de pares
    ci=0; //contador de impares
    cc=0; //contador de ceros
//---------------------------------------------------------------------------------------------------------
//--------------ACUMULADORES-------------------------------------------------------------------------------
    var snp,snn,nmax,nmin,lmax,lmin;
    snm=0;      //suma de numeros positivos
    snn=0;      //suma de numeros negativos
    nmax=-101;  //se guarda el valor del maximo numero ingresado
    nmin=101;   //se guarda el valor del minimo numero ingresado
    lmax='x';     //se guarda el valor de la letra correspondiente al nmax
    lmin='y';     //se guarda el valor de la letra corresporndiente al nmin
//---------------------------------------------------------------------------------------------------------

//--------------SENTENCIAS---------------------------------------------------------------------------------
    while(respuesta!='no')
    {
        letra=prompt('Ingrese una letra');
        numero=prompt('ingrese un numero');
        numero=parseInt(numero);
        while(numero<-101 || numero>101 || isNaN(numero))
        {
            alert('El numero ingresado debe estar comprendido en un intervalo que vaya desde -100 y 100');
            numero=prompt('ingrese un numero');
            numero=parseInt(numero);
        }

        
        if(numero%2==0 && numero!=0)//pares
        {
            cp++;
        }
        else if(numero%2!=0 && numero!=0)//impares
        {
            ci++;
        }
        else if(numero == 0)//ceros
        {
            cc++;
        }
        else if(numero>0)//positivos
        {
            cnp++;
            snp+=num;
         }
        else if(numero<0)//negativos
        {
            cnn++;
            snn+=numero;
        }
        
        if(bandera)
  		{
         bandera=false
  		  nmax=numero;
          nmin=numero;
          lmax=letra;
          lmin=letra;
  		}
        else if(numero>nmax)
        {
            nmax=numero;
            lmax=letra;
        }
        else if(numero<nmin)
        {
            nmin=numero;
            lmin=letra;

        }



        respuesta=prompt('Quiere seguir ingresando datos?');
    }
   
    pnpi=snp/cnp;//aca el programa hace el promedio de los numeros positivos ingresados
    
//-------------INFORMAR------------------------------------------------------------------------------------

    document.write('a) La cantidad de números pares:'+ ' '+ cp+'<br>'+ 
    'b) La cantidad de números impares:'+ ' '+ ci +'<br>' +
    'c) La cantidad de ceros:'+' '+ cc +'<br>'+ 
    'd) El promedio de todos los números positivos ingresados:'+ ' '+ pnpi + '<br>'+  
    'e) La suma de todos los números negativos:'+' '+ snn +'<br>'+ 
    'f) El número y la letra del máximo y el mínimo:' +'<br>' +
    'maximo:' + ' ' + nmax + ' ' + lmax + '<br>'+
    'minimo:' + ' ' + nmin + ' ' + lmin 
    );






}
