/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
 y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
 se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
  si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos
 brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

 
function CalcularPrecio () 
{
     var cant=document.getElementById("Cantidad").value;
     var marca=document.getElementById("Marca").value;

     cantidad=parseInt(cant);

     
     if(cantidad>=6)
        {
          precio=cantidad*35*0.5;
          document.getElementById("precioDescuento").value=precio;
        }
      
     if(cantidad==5)
        {
          if(marca=="ArgentinaLuz")
            {
              precio=cantidad*35*0.60;
              document.getElementById("precioDescuento").value=precio;
            }
          else
            {
              precio=cantidad*35*0.70;
              document.getElementById("precioDescuento").value=precio;
            }
        }
     if(cantidad==4)
        {
          if(marca==("ArgentinaLuz" || "FelipeLamparas"))
            {
              precio=cantidad*35*0.75;
              document.getElementById("precioDescuento").value=precio;
            }
          else
            {
              precio=cantidad*35*0.80;
              document.getElementById("precioDescuento").value=precio;
            }
        }
     if(cantidad==3)
        {
          if(marca=="ArgentinaLuz")
            {
              precio=cantidad*35*0.85;
              document.getElementById("precioDescuento").value=precio;
            }
          if(marca=="FelipeLamparas")
            {
              precio=cantidad*35*0.90;
              document.getElementById("precioDescuento").value=precio;
            }
          if(marca!="ArgentinaLuz" && marca!="FelipeLamparas")
            {
              precio=cantidad*35*0.95;
              document.getElementById("precioDescuento").value=precio;
            }
        }
     if(precio>120)
      {
        ingresos=precio-(precio*1.10);
        alert("II BB Usted pagó "+ingresos);
      }
}