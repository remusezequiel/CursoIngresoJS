/** */
function mostrar()
{
    var p = prompt("Ingrese el nombre de un planeta del sistem solar");

    switch(p)
    {
        case "tierra" :
            alert('Acá vivimos');
        break;
        //--------------------------------
        case "mercurio":
        case "venus":
            alert('Acá hace más calor');
        break;
        //--------------------------------
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert('Acá hace mas frio');
        break;
        //---------------------------------
        default :
            alert('No es un planeta del sistema solar'); 
    }
}
