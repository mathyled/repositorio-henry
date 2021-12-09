function Node(value){
    this.data=value;
    this.next=null;
}

function LinkedList(){
    this.head=null;
    this.len=0;
}


LinkedList.prototype.addFirst=function(value){
    //Creo el nodo con la data que quiero que tenga
    var node= new Node(value);
//Cambio los punteros para que el nuevo nodo pueda estar al principio

    node.next=this.head;
    this.head=node;
    this.len++;
}

LinkedList.prototype.removeFirst=function(){
    //Me guardo en una variable el puntero al inicio de la lista
    // var first=this.head;
    // this.head=first.next;     
    this.head=this.head.next;   // head → [ ] → [ ] → [ ] → null
    this.len--;                 //       head → [ ] → [ ] → null
    return this.head.value;
}


LinkedList.prototype.removeFrom=function(index){
   var current=this.head;
   var aux=null;
   if(index===0) return this.removeFirst();
   //                ↓
//index=3      head →[]→[]→[]→[]→[]→null
//               0    1  2  3  4  5
   while (index>=1) {
       aux=current;
       current=current.next;
       index--;//1 
   }
   aux.next=current.next;
   this.len--;
   return current.value;
}

var miLista= new LinkedList();

miLista.addFirst("A");
miLista.addFirst("B");
miLista.addFirst("C");
// miLista.removeFirst();
// miLista.removeFrom(0);
miLista.removeFrom(1);
console.log(miLista);