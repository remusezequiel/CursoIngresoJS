
function mostrar()
{
    var base;
    var altura;
    var area;
    var perimetro;
   
    base = prompt("ingrese base");
    altura = prompt("ingrese la altura");
    area = (parseInt(base) * parseInt(altura))/2;
    perimetro=3*base;
    alert("el area es" + " " + area+'<br>'
          "el perimetro es" + " " + perimetro );
 

}
