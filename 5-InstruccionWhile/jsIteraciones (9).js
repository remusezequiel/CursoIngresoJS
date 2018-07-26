function mostrar()
{

	var contador=0;
	// declarar variables
	var num;
	var respuesta='si';
	 var max;//numero maximo
	var min;//numero minimo
/** *
	while(respuesta!='no')
	{
		contador++;
		num=prompt('Ingrese un numero');
		num=parseInt(num);
		respuesta=prompt('¿Quiere seguir poniendo numeros?');
		

	}

        max=document.getElementById('maximo').value=Math.max(num);
		min=document.getElementById('minimo').value=Math.min(num);
*/

 	var bandera=true;
  
   while(respuesta=='si')
 
  {
  		num=prompt('ingrese un numero');
  		if(bandera)
  		{
         bandera=false
  		  max=num;
          min=num;
  		}
  		else if(num>max){max=num;}
  		else if(num<min){min=num;}
		respuesta=prompt('¿Quiere seguir poniendo numeros?');
  } 
  document.getElementById('maximo').value=max;
  document.getElementById('minimo').value=min;



}//FIN DE LA FUNCIÓN