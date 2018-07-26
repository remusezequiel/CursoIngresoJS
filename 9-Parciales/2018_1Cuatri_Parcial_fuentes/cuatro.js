function mostrar()
{
    var a = prompt("Ingrese un numero:");
    var b = prompt("Ingrese otro numero:");
    var c = parseInt(a) + parseInt(b);

    if( a==b )
    {
        alert(a + " " + b);
    }
    else if(a>b)
    {
        alert(a - b);
    } 
    else if(a<b)
    {
        alert(c);
    }
    else if(c>10)
    {
        alert("la suma es = " +" "+ c +" "+"y supero el 10");
    }

}
