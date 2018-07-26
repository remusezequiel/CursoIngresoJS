/**
 * Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
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
    // Variables y contadores
    var cont = 0;   //contador
    var ct = 0;     //contador de temperaturas
    var cp = 0;     //contador de pesos
    var bc = 0;     //productos que se conservan a bajo de cero
    var m;          //marca
    var p;          //peso
    var t;          //temperatura
    var pp;         //promedio de los pesos
    var pMax;       //peso maximo
    var pMin;       //peso minimo
    var rta="si";   //respuesta del cliente
    //--------------------------------------------------------------------------------------------------
    while(rta!="no")
    {
        cont++;
        m = prompt('Ingrese marca del producto');
        p = prompt('Ingrese cuanto pesa el producto (Valores entre 0 y 100)');
        t = prompt('Ingrese cual es la temperatura de almacenamiento del producto (entre -30 y 30 ºC)');
    }

}
