function mostrar()
{
    var precio = prompt("Ingrese un precio:");
    var descuento = prompt("Ingrese un porcentage de descuento:");
    var Porcentaje = precio - (precio * descuento)/100;

    document.getElementById("elPrecioFinal").value = Porcentaje;
}
