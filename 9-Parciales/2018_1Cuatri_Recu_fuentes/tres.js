function mostrar()
{

    var precio = prompt("Ingrese un presio");
    var porcentaje = prompt("ingrese porcentaje");
    var r1;
    var r2;
    var iva;
    


    r1 = (parseInt(precio) * parseInt(porcentaje))/100 ;
    //r1 => descuento en dinero
    r2 = parseInt(precio) - ((parseInt(precio) * parseInt(porcentaje))/100) ;
    //r2 => precio con el descuento
    iva = (parseInt(precio) * 21)/100
    
    var pf = r2 + iva

    alert("El descuento es de:"+" "+r1+" "+"El precio con el descuento es de:"+r2+" "+"El iva es:"+" "+iva);

    document.getElementById("elPrecioFinal").value = pf;




}
