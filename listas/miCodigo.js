

function Nodo(valor){
    this.dato=valor;
    this.siguente=null;
}

function ListaEnlazada(){
    this.inicio=null;
    this.largo=0;
}

ListaEnlazada.prototype.agregar=function(valor){
    //creo un nodo
    var nodoNuevo=new Nodo(valor);
    // Si la lista está vacia 
    //el inicio de la lista tiene que apuntar a ese nodoNuevo
    if(!this.inicio){
        this.inicio=nodoNuevo;
        this.largo++;
    }else { // Sino (la lista tiene algo..)
         let actualPos=this.inicio;
         //recorro la lista , hasta encontrar al ultimo
         while(actualPos.siguente){ // while(actualPos.siguente!==null)
            actualPos=actualPos.siguente
         }
         actualPos.siguente=nodoNuevo;
         this.largo++;
         return nodoNuevo;
    }
};
ListaEnlazada.prototype.agregarEnPos= function(valor,posicion) {
        // if(index<0 || index > this.size){
        if (posicion >= this.largo) {
            return null;
        }

        const nodoNuevo = new Nodo(valor)
        let actualPos = this.inicio;
        let temporal;

        if (posicion === 0) {
            nodoNuevo.siguente = actualPos;
            this.inicio = nodoNuevo;
        } 
        
           while (posicion > 1) {
                temporal = actualPos;
                actualPos = actualPos.siguente;
            }
            nodoNuevo.siguente = actualPos;
            temporal.siguente =nodoNuevo;
        
        this.largo++;
    
};


// ListaEnlazada.prototype.agregarEnPos=function(valor,posicion){
//     // Caso en la que la posicion que me pasaron
//     //es mayor al largo de mi lista
//     if(posicion> this.largo) return this.agregar(valor)
//     //Creo mi nuevo nodo a agregar
//     var nodoNuevo= new Nodo(valor);
// //(siendo la posicion 0 mi this.inicio)
//      if(posicion===1){
//          nodoNuevo.siguente=this.inicio;
//          this.inicio=nodoNuevo;
//      }
//      var actualPos=this.inicio;
//      while(posicion > 1){
//            posicion--;
//            actualPos=actualPos.siguente;
//      }
//      nodoNuevo.siguente=actualPos.siguente;
//      actualPos.siguente=nodoNuevo;
//      this.largo++;
// }


// ListaEnlazada.prototype.agregarEnPos = function (valor,posicion) {
//     /* Tu codigo aqui */
//     if (this.inicio === null) {
//       return false
//     } else {
//       var nodoNuevo = new Nodo(valor);
//       if (posicion === 1) {
//         nodoNuevo.siguente = this.inicio;
//         this.inicio = nodoNuevo;
//       }
//       var actualPos = this.inicio;
//       while (posicion > 1) {
//         posicion--;
//         actualPos = actualPos.siguente;
//       }
//       nodoNuevo.siguente = actualPos.siguente;
//       actualPos.siguente = nodoNuevo;
//       return true;
//     }
//   }
	

ListaEnlazada.prototype.eliminarEnPos=function(posicion){
    //Me aseguro que la posicion sea correcta 
    if(posicion<0 || posicion> this.largo) return false;// return null
       
    let actualPos=this.inicio;
    let temporal=null;
    //si quiero eliminar el primer nodo
    if(posicion===0){
        this.inicio=actualPos.siguente;
    }else{
        while(posicion>=1){
            temporal=actualPos;
            actualPos=actualPos.siguente;
        }
        temporal.siguente=actualPos.siguente;
    }
    this.largo--;
    //me devuelve el nodo eliminado
    return actualPos.data;
}

// removeFrom(index){
//     if(index<0 || index> this.size) return null
//     let current=this.head;
//     let previous=null;
//     if(index===0){
//         this.head=current.next;
//     }else {
//        for (let i = 0; i < index; i++) {
//             previous=current;
//             current=current.next;   
//        };
//        previous.next=current.next;
//     };
//     this.size--;
//     return current.data;
// }


// creo nueva instancia 
var miLista= new ListaEnlazada();
// agrego nodos
miLista.agregar("A");
miLista.agregar("B");
miLista.agregar("C");
miLista.agregar("D");
miLista.agregarEnPos("mati",2)
// miLista.eliminarEnPos(2)
console.log(miLista)



//Corregir agregarEnPos → me da una lista circular cuando quiero agregar
// nodo en posicion 1 

//corregir eliminarEnPos → se rompe codigo