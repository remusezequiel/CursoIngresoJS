function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero" :
    {
        alert("Que comiences bien el año!!!");
    break;
    }
    case "Marzo" :
    {
        alert("a clases!!!");
    break;
    }
    case "Julio" :
    {
        alert("Se vienen las vacaciones!!! ");
    break;
    }
    case "Diciembre" :
    {
        alert("Felices fiestas!!!");
    break;
    }
    default : 
    {
        alert("No se mostro ningun mes enunciado");
    //break; no es necesario poner el break
    }
}



}//FIN DE LA FUNCIÓN