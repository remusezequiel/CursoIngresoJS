function mostrar()
{
    var num=prompt('Ingrese un numero');
    var par=0;  //CONTADOR DE PARES 

    num=parseInt(num);

    for(var i=1;i<=num;i++)
    {
        if(i%2==0)//numero resto de la division por 2
        {
            console.log(i);
            par++;
            alert(par);
        }
    }



}//FIN DE LA FUNCIÓN
