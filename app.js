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


 /*------------------------------------------------------------------------
 ----------------**Iteración #4: Probando For...in------------------------
 -----------------------------------------------------------------------*/


 /*Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:*/


const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};


for (key in alien){
    console.log( key+": "+alien[key]);
}

/*------------------------------------------------------------------------
 ----------------**Iteración #5: Probando For-----------------------------
 -----------------------------------------------------------------------*/

 /*Usa un bucle **for** para recorrer todos los destinos del array 
 y elimina los elementos que tengan el id 11 y 40. Imprime en un **_console log_** el array.
  Puedes usar este array:*/


const placesToTravel2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

//creamos un array que cumpla la condicion de los id diferente de 11 y 40
let newPlacesToTravel2 = [];
//recorremos el array 
for ( let places of placesToTravel2 ){
    //recorremos los objetos dentro del array 
    for ( let key in  places){  
        //cuando el key sea un id -- compruebame las condiciones de id =11 o id=40
        if (key=="id"){
            if (!((places[key]==11) || (places[key]==40))){
                newPlacesToTravel2.push(places);   
            }
        }  
    }
}
console.log(newPlacesToTravel2);


/*------------------------------------------------------------------------
 --------------**Iteración #6: Mixed For...of e includes -----------------
 ------------------------------------------------------------------------*/

 /*Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
  Recuerda que puedes usar la función **_.includes()_** para comprobarlo.Puedes usar este array:*/

 
 const toys = [
   { id: 5, name: "Buzz MyYear" },
   { id: 11, name: "Action Woman" },
   { id: 23, name: "Barbie Man" },
   { id: 40, name: "El gato con Guantes" },
   { id: 40, name: "El gato felix" },
 ];
 let newToys= [];
 for (let juguetes of toys ){
   for( let key in juguetes){
        if (key=="name"){
            if ((juguetes[key].includes("gato"))== false){
                newToys.push(juguetes);
            }
        } 
    }
 }
 console.log(newToys);


 /*------------------------------------------------------------------------
 --------------**Iteración #7: For...of avanzado--------------------------
 ------------------------------------------------------------------------*/

 /*Usa un bucle **for...of** para recorrer todos los juguetes y añade los que 
 tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. 
 Puedes usar este array:*/


const popularToys = [];
const toys2 = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (juguetes of toys2){
    for (key in juguetes){
        if(key=="sellCount"){
            if (juguetes[key]>15){
                popularToys.push(juguetes); 
            }
        }
    }
}
console.log(popularToys);









 

 



 
 













 







 


