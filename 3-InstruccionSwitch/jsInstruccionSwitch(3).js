function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
{
    case "Febrero" :    
        alert("Este mes no tiene mas de 29 dias");
    break;
   //---------------------------------------------------
    case "Abril" :
    case "Junio" :
    case "Septiembre" :
    case "Noviembre" :   
        alert("Este mes tiene mas de 30 dias");
   //---------------------------------------------------
    default : 
        alert("Este mes tiene mas de 31 dias");
}
	
	


}//FIN DE LA FUNCIÓN