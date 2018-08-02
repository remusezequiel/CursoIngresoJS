/**Enunciado:
Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento, mostrar: 
1-El descuento en dinero, 
2-El precio con el descuento , 
3-El IVA 
todos los anteriores e un solo alert 
4-Y solo el precio con descuento más el IVA por id . */


function mostrar()
{

    var precio = prompt("Ingrese un presio");
    var porcentaje = prompt("ingrese porcentaje");
    var r1;//descuento de dinero
    var r2;//precio - descuento
    var iva;//
    


    r1 = (parseInt(precio) * parseInt(porcentaje))/100 ;
    //r1 => descuento en dinero
    r2 = parseInt(precio) - ((parseInt(precio) * parseInt(porcentaje))/100) ;
    //r2 => precio con el descuento
    iva = (parseInt(precio) * 21)/100
    
    var pf = r2 + iva

    alert("El descuento es de:"+" "+r1+" "+"El precio con el descuento es de:"+r2+" "+"El iva es:"+" "+iva);

    document.getElementById("elPrecioFinal").value = pf;




}
