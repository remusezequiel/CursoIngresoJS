function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
// Evaluo los casos

switch(mesDelAño)
{
    case "Julio" :{}
    case "Agosto" :
    {
        alert("Abrigate que hace frio!!!");
    break;
    }
 //---------------------------------------------------   
    case "Septiembre" :{}
    case "Octubre" :{}
    case "Noviembre" :{}
    case "Diciembre" :
    {
        alert("Ya pasamos el frio, ahora calor!!!");
    break;
    }
 //----------------------------------------------------   
    default :
    {
        alert("Falta para el invierno!!!");
    break;
    }
}

/**Podria hacerse de la siguiente manera, pero leerlo es engorroso y es muy largo innecesariamente */
/** 
switch(mesDelAño)
    {
    case "Enero" :{}
    case "Febrero" :{}
    case "Marzo" :{}
    case "Abril" :{}
    case "Mayo" :{}
    case "Junio" :
    {
        alert("Falta para el invierno!!!");
        break;
    }
    case "Julio" :{}
    case "Agosto" :
    {
        alert("Abrigate que hace frio!!!");
        break;
    }
    case "Septiembre" :{}
    case "Octubre" :{}
    case "Noviembre" :{}
    case "Diciembre" :
    {
        alert("Ya pasamos el frio, ahora calor!!!");
        break;
    }  
*/ 


}//FIN DE LA FUNCIÓN