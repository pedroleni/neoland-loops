/*------------------------------------------------------------------------
 ----------------**Iteración #1: Usa includes-----------------------------
 -----------------------------------------------------------------------*/


//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//Usa la función .**_includes_** de javascript.


const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];


products.forEach((element) =>{
    if(element.includes("Camiseta")) console.log(element); 
});

/*------------------------------------------------------------------------
 ----------------**Iteración #2: Condicionales avanzados------------------
 -----------------------------------------------------------------------*/
 /*Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
  y añade la propiedad isApproved a true o false en consecuencia. 
  Una vez lo tengas compruébalo con un **_console.log_**. 
 Puedes usar este array para probar tu funcion:*/
 
 
 const alumns = [
   { name: "Pepe Viruela", T1: false, T2: false, T3: true },
   { name: "Lucia Aranda", T1: true, T2: false, T3: true },
   { name: "Juan Miranda", T1: false, T2: true, T3: true },
   { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
   { name: "Raquel Benito", T1: true, T2: true, T3: true },
 ]

//element[key] para sacar el value.

 alumns.forEach((element)=>{
    let contador=0;
    
    for ( key in element ){
        if(element[key]==true){
            contador++;
        }
    }
    if(contador>=2){
        element.isApproved =true;
        
    } else{ element.isApproved =false; }
    
})

console.log(alumns);

/*------------------------------------------------------------------------
 ----------------**Iteración #3: Probando For...of------------------------
 -----------------------------------------------------------------------*/

 /*Usa un bucle for of para recorrer todos los destinos del array. 
 Imprime en un **_console.log_** sus valores.

 Puedes usar este array:*/
 
 
 const placesToTravel = [
   "Japon",
   "Venecia",
   "Murcia",
   "Santander",
   "Filipinas",
   "Madagascar",
 ];

 for (let lugares of placesToTravel){
    console.log(lugares);
 }





 







 


