/** Enunciado:
Bienvenidos. 
Se ingresa una nota. 
Si está entre las 0 y las 3 mostrar: "la próxima se puede", 
si es desde las 4 a las 6: "raspando", de lo contrario informar que aprobó. 
Informar si la nota no es válida. 
Si es aprobó y la nota es mayor a 8 se debe agregar el mensaje: "muy bien". 
Si es nota para “raspando” y la nota es menor a 5 se debe agregar el mensaje: "debes preocuparte más". 
Aclaración: hacer un switch y dentro toda la lógica incluyendo los if y con una sola ventana alert.*/
/** 
function mostrar()
{
    var nota;
    nota = document.getElementByid("laHora").value;
    
    if(nota>=3)
    {
        alert('La proxima se puede');
    }
    else if(nota>3 && nota<7)
    {
        alert("raspando");
        switch(nota)
        {
            case "4":
            {
                alert('Debes preocuparte mas');
            }
        }
    }
    else if(nota>6)
    {
        alert('Aprobo');
        switch(nota)
        {
            case "8":
            case "9":
            case "10":
            {
                alert("Muy bien");
            }
        }
    }

}
*/
function mostrar()
{
    var nota,cont;
    
    cont=0;
    nota = document.getElementById("laHora").value;

    while(nota>11)
    {
        cont++;
        alert('NO ES UNA NOTA VALIDA');
        nota=prompt('Ingrese una nota entre 0 y 10');    
    }
    
    if(nota<4)
    {
        alert('La proxima se puede');
    }
    else if(nota>3&&nota<7)
    {
        alert('raspando');
        switch(nota)
        {
            case "4":
            {
                alert('Debes preocuparte mas');
                break;
            }
        }
    }
    else 
    {
        alert("Aprobo");
        switch(nota)
        {
            case "9":{}
            case "10":
            {
                alert('Muy bien')
            }
        }
    }
};