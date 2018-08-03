/**
function mostrar()
{
    var base = prompt("Ingrese la base de su rectangulo");
    var altura = prompt("ingrese la altura del rectangulo");
    var perimetro = 2*parseInt(base) + 2*parseInt(altura);

    alert("El perimetro del rectangulo es de:" +" "+ perimetro);
}
*/

/** 
function mostrar()
{
    var sexo,nota,respuesta;
    var notaMasBaja=11;
    var sexoDeLaNotaMasBAja=0;
    var cont=0;
    var cont1=0;
    respuesta="si";

    while(respuesta !='no')
    {
        nota=prompt('Ingrese una nota');
        while(nota>10)
        {
            alert('No es una nota');
            nota=prompt('Ingrese una nota');
        }
        
        sexo=prompt('Ingrese su genero');
        while(sexo!='m' && sexo!='f')
        {
            alert('No existe el genero');
            sexo=prompt('Ingrese su genero');
        }

        if(nota<notaMasBaja)
        {
            notaMasBaja=nota;
            sexoDeLaNotaMasBAja=sexo;
        }

        respuesta=prompt("quiere seguir ingresando notas?");
    }

    alert('la nota mas baja fue:'+" "+ notaMasBaja + "\n" +
          'el sexo de la persona con nota mas baja es:'+' '+sexoDeLaNotaMasBAja);
}
*/

function mostrar()
{
    var nombreArray=[];
    var nombre,nota,edad,sexo,respuesta;
    var cont=0;
    respuesta='si';
    while(respuesta!='no')
    {
        nombre=prompt('Ingrese un nombre');

        nota=prompt('ingrese una nota');
        
        while(nota>10 && nota<0 || isNaN(nota))
        {
            alert('Nota erronea');
            nota=prompt('ingrese una nota');
            nota=pasrseInt(nota);
        }

        edad=prompt('ingrese su edad');
        while(edad<0 && edad>101)
        {
            alert('ingrese una edad entre 0 y 100');
            edad=prompt('ingrese su edad');    
        }

        sexo=prompt('Ingrese su genero');
        while(sexo!='m' && sexo!='f')
        {   
            alert('genero incorrecto');  
            sexo=prompt('Ingrese su genero');
        }

        while(sexo=='m' && nota>5){
            
            if(edad>18 )
            {
                nombreArray[cont]= nombre;
            }
           cont++;
           break;
        }   
        respuesta=prompt('Quiere seguir agregando personas?');
    }

    alert(nombreArray=[cont]);

}









