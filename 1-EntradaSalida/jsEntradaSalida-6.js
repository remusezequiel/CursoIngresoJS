/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var a;
    var b;
    var resultado;
    var mensaje;

    a = Number(document.getElementById("numeroUno").value);
    b = Number(document.getElementById("numeroDos").value);
    resultado =Number(a+b);
    mensaje = "la suma es: "  + resultado;
    alert(mensaje);
}

