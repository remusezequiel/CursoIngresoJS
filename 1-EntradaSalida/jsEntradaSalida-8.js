/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //Dividendo = divisor . cociente + resto  

    var dividendo = parseInt(document.getElementById("numeroDividendo").value);
    var divisor = parseInt(document.getElementById("numeroDivisor").value);
    var cociente = (dividendo - resto)/divisor;
    Dividendo = divisor . cociente + resto; 
    var resto = dividendo - divisor * cociente;
    
    alert(parseInt(resto));
	
}
