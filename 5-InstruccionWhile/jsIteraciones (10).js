function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var par=0;
	var impar=0;
    var cp=0;//contador de positivos
	var cn=0;//contador de negativos
	var cc=0;//
	var respuesta="si";
	var sn=0;//acumulador de negativos
	var sp=0;//acumulador de positivos
	var num;
	var pn;//promedio de negativos
	var pp;//promedio de positivos
	var Dif;
	var msg;
//-----------------------------------------------------------------------------------------	
	while(respuesta!="no")
	{
		contador++;
		num=prompt('Ingrese un numero positivo o negativo');
		num=parseint(num);
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
		if(num/2==0)
		{
			par++;
		}
		else 
		{
			impar++;
		}
	
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

//Falta poner todo en un document.write();

}//FIN DE LA FUNCIÓN