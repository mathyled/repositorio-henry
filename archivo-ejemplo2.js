// Teoria y Ejemplos 
 //Number.prototype.toFixed()
 toFixed() // metodo del objeto Number
//  Es el método de los números para ayudar a 
// redondear los valores a un máximo de 2 lugares decimales.
//  Tenga en cuenta que el método devuelve una cadena(string) para
//   mantener el formato "fijo" del número.



function financial(x) {
    return Number.toFixed(2);
  }
  console.log(financial(123.456));
  // expected output: "123.46"

//Por lo tanto,
//    si desea convertir la parte trasera cadena en un número,
//     puede lanzar o volver a convertirlo en un número:
// hay que usar el objeto nativo Number()
 Ej:        Number("1");  // 1 

// String.prototype.charAt()
charAt()  
var quote = "Stay awhile and listen!";

console.log(quote[6]); // "w"

// Alternativamente, puede usar el charAt()método de String
//  para acceder a caracteres individuales. 
//  Por ejemplo, quote.charAt(6)también volvería "w". 
 
/// MAXIMO VALOR 

// Haciendo un ejercicio , saqué como hacer el Math.max() de manera
// manual
var inputArray = [3, 6, -2, -5, 7, 3]; //da 7(max)

function adjacentElementsProduct(inputArray) {
  var newArray=[];
     for(var i=0; i<inputArray.length;i++){
       if(inputArray[i]>newArray) {newArray=+inputArray[i]}
     }
return newArray;
}
console.log(adjacentElementsProduct(inputArray))


// otra manera seria ..

var max = Math.max(...inputArray);
console.log(max) // da 7
// sino 
var max = Math.max(3, 6, -2, -5, 7, 3); // sin corchetes


