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



