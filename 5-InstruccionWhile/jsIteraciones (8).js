function mostrar()
{

	var contador=0;
	var positivo=0; //neutro de la suma
	var negativo=1; //neutro de la multiplicacion
	var num;
	var respuesta='si';

	while(respuesta == 'si')
	{
		contador++;
		num=prompt('Ingrese un numero negativo si quiere multiplicar o positivo si quiere sumar');
		num=parseInt(num);
		if (num>=0)
		{
			positivo=positivo+num;
		}
		else if(num<0)
		{
			negativo=negativo*num;
		}
		respuesta=prompt('Ingrese una respuesta');
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN