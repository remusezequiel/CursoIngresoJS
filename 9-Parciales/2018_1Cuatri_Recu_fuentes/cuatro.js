/**Enunciado:
Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50". */

function mostrar()
{
    var n1,n2,resultado;

    n1=prompt('Ingrese el primer numero');
    n2=prompt('Ingrese el segundo numero');

    if(n1=n2)
    {
        alert(n1 +" "+ n2);
    }
    else if(n1>n2)
    {
        resultado=n1/n2;
        alert(resultado);
    }
    else if(n1+n2<50)
    {
        resultado=n1+n2;
        alert("La suma es" + " " + resultado + " " + "y es menor a 50");
    }
    
    

}
