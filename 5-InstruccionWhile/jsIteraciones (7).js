function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;
	while(respuesta == 'si')
	{
		contador++;
		num=prompt('Ingrese un número para sumar');
		num=parseInt(num);
		acumulador=acumulador+num;
		respuesta = prompt('Ingrese una respuesta');
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN