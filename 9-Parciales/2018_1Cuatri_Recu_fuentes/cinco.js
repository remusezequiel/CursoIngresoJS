/**Enunciado:
Bienvenidos. 
(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert. */

function mostrar()
{
   var dia;
   dia=prompt('Ingrese un dia de la semana');

   switch(dia)
   {
       case "sabado":
       case "domingo":
       {
           alert('Buen finde!');
            break;
       }
       case "lunes":
       case "martes":
       case "miercoles":
       case "jueves":
       case "viernes":
       {
           alert('A trabajar');
           break;
       }
       default:
       {
           alert('El valor ingresado no es un dia');
       }
   }
}
