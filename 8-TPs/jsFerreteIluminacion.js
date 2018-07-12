/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //ASI NO VA AL PROFESOR LE GUSTA QUE SEA TODO CON ELSE IF
    // Variables
 	
    var cantidad = document.getElementById("Cantidad").value;
    var impfinal = parseInt(cantidad) * 35; //cantidad * presio
    var marca = document.getElementById("Marca").value; 
    
    //sentencias (donde pcd = precio con descuento)

    if (cantidad > 5){pcd = impfinal - ((impfinal*50)/100)};                           // A
    //--------------------------------------------------------------------------------
    if (cantidad == 5 && marca == "ArgentinaLuz"){pcd = impfinal - (0.4*impfinal)}     //B
        else{pcd = impfinal - (0.3*impfinal)};                                         //B
    //--------------------------------------------------------------------------------
    if(cantidad == 4 && marca == "ArgentinaLuz"||"FelipeLamparas"){                    //C
        pcd = impfinal - (impfinal*0.75)}                                              //C
        else{pcd = impfinal - (impfinal*0.2)};                                         //C  
    //--------------------------------------------------------------------------------
    if(cantidad == 3 && marca == "ArgentinaLuz"){                                      //D
        pcd = impfinal - ((impfinal*15)/100)}                                          //D 
        else{                                                                          //D
            if(cantidad == 3 && marca == "FelipeCompras"){                             //D
           pcd = impfinal - (impfinal*0.1)}                                            //D
           else{pcd = impfinal - ((impfinal*5)/100)}};                                 //D
   //---------------------------------------------------------------------------------
   
   document.getElementById("precioDescuento").value = pcd;
   
   if(pcd>120){ 
       pcd == pcd + pcd*0.1 && alert("Usted pago"+" "+ pcd +" "+ "siento" +" "+ pcd*0.1 +" "+"el impuesto que se pago")
    };//E
   //-----------------------------------------------------------------------------------
    //revisar E

}
