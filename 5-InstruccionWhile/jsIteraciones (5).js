function mostrar()
{

var sexo = prompt("ingrese f ó m .");
//Si ponemos || siempre va a entrar(pensalo)
while( sexo!='f' && sexo!='m' )
{
    sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN