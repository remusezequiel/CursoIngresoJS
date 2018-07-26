/**Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/


function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var par=0;
	var impar=0;
    var cp=0;//contador de positivos
	var cn=0;//contador de negativos
	var cc=0;//contador de ceros
	var respuesta="si";
	var sn=0;//acumulador de negativos
	var sp=0;//acumulador de positivos
	var num;
	var pn;//promedio de negativos
	var pp;//promedio de positivos
	var Dif;//diferencia entre las cantidades de numeros positivos y negativos
	var msg;//mensaje
    //-----------------------------------------------------------------------------------------	
	while(respuesta!="no")
	{
		contador++;
		num=prompt('Ingrese un numero positivo o negativo');
		num=parseInt(num);
		while(isNaN(num))
		{
			num=prompt('Escriba solo numeros');
			num=parseInt(num);
		}
		if(num>0)
		{
			cp++;
			sp+=num;
		}
		else if(num<0)
		{
			cn++;
			sn+=num;
		}
		else if(num=0) 
		{
			cc++;
		}
		if(num/2==0)//como hacer para elegir solo los numeros pares
		{
			par++;
		}
		else 
		{
			impar++;
		}
		respuesta=prompt("quiere seguir?");
	}
//-------------------------------------------------------------
	pp=sp/cp;
	pn=sn/cn;
	Dif=cp-cn;

	if(Dif>0)
	{
		msg='Hay mas positivos!'
	}
	else if(Dif==0)
	{
		msg='Hay la misma cantidad!'
	}
	else
	{
		msg='Hay mas negativos' + ' ' + (Dif*-1);
	}

 document.write
 (
	'1-Suma de los negativos.' +' '+ sn + "<br>"
	+'2-Suma de los positivos.' +' '+ sp + "<br>"
	+'3-Cantidad de positivos.' +' '+ cp + "<br>"
	+'4-Cantidad de negativos.' +' '+ cn + "<br>"
	+'5-Cantidad de ceros.' +' '+ cc + "<br>"
	+'6-Cantidad de números pares.' +' '+ par + "<br>"
	+'7-Promedio de positivos.' +' '+ pp + "<br>"
	+'8-Promedios de negativos.' +' '+ pn + "<br>"
	+'9-Diferencia entre positivos y negativos' +' '+ Dif
 );

}		//FIN DE LA FUNCIÓN