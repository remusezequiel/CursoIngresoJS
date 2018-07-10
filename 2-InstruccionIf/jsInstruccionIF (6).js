function mostrar()
{
//tomo la edad  

 var edad = document.getElementById("edad").value;
    
    //if(edad < 13){alert("eres menor de edad") }
    //if (edad>=13&&edad<=17){alert("eres adolecente")}
    //if (edad >= 18){
        //alert("eres mayor")
    //};    ""ESTA ES LA FORMA INCORRECTA""   

if(edad>17){alert("es adulto")}
   else{if(edad<13)
       {alert("es niño")}
           else{alert("es adolecente")}};
 

}//FIN DE LA FUNCIÓN