/**
 * Enunciado:
 * al presionar el botón pedir un número.
 * Informar si el numero es PRIMO o no.
 *  */
/** 
function mostrar()
{
    var contDiv=0;
    var num=prompt('Ingrese un numero');
    num=parseInt(num);
  //----------BUCLE--------------------------     
    for(i=0;i<=num;i++)
    {
        if( num%i == 0 )
        {
            contDiv++;
            console.log(i);
        }  
    }
  //--------CONDICION------------------------  
    if(contDiv != 2)
    {
        alert('El numero no es primo');
    }
    else
    {
        alert('Es primo');
    }



}*/
/**Pedir un numero. Calcular y mostrar la cantidad de primos entre el 1 y el numero */
/**Yo se que los numeros primos son los numeros naturales que solo tienen 2 divisores */

function mostrar()
{
    var num=prompt('Ingrese un numero');
    num=parseInt(num);
    cont=0;
    var contDiv=0;

    for( var i=1 ; i<=num ; i++ )
    {
        if(num%i==0)
        {
            contDiv++;
            console.log(i)
        }
    }
    
}
//FIN DE LA FUNCIÓN






/**     NUMEROS PRIMOS
 * 
 * Un número primo es un número entero mayor que cero, que tiene exactamente dos divisores positivos.
 * También podemos definirlo como aquel número entero positivo que no puede expresarse como producto de
 * dos números enteros positivos más pequeños que él, o bien, como producto de dos enteros positivos de
 * más de una forma. Conviene observar que con cualquiera de las dos definiciones el 1 queda excluido 
 * del conjunto de los números primos.
 * 
 * El algoritmo más sencillo que puede utilizarse para saber si un número n es primo es el de la división.
 * Se trata de ir probando para ver si tiene algún divisor propio.
 * Para ello vamos dividiendo el número n entre 2, 3, 4, 5, ... , n-1.
 * Si alguna de las divisiones es exacta (da resto cero) podemos asegurar que el número n es compuesto.
 * Si ninguna de estas divisiones es exacta, el número n es primo. 
 * Este método puede hacerse más eficiente observando simplemente, 
 * que si un número es compuesto alguno de sus factores (sin contar el 1) debe ser menor o igual que √ n.
 * Por lo tanto, el número de divisiones a realizar es mucho menor.
 * Sólo hay que dividir entre 2, 3, 4, 5, ... , [√ n]. 
 * En realidad, bastaría hacer las divisiones entre los números primos menores o iguales que √ n.
 *  */