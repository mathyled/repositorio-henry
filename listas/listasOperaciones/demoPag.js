class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
  
    push(value) {
      const newNode = new Node(value);
      if (!this.length) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
  
      this.tail = newNode;
      this.length += 1;
      return newNode;
    }
  
    shift() {
      if (!this.length) {
        return null;
      } else {
        const nodeToRemove = this.head;
        this.head = this.head.next;
        this.length -= 1;
  
        if (!this.length) {
          this.tail = null;
        }
  
        return nodeToRemove;
      }
    }
  
    pop() {
      if (!this.tail) {
        return null;
      } else {
        let currentNode = this.head;
        let preTail = this.head;
        while (currentNode.next) {
          preTail = currentNode;
          currentNode = currentNode.next;
        }
        this.tail = preTail;
        this.tail.next = null;
        this.length -= 1;
        if (!this.length) {
          this.head = null;
          this.tail = null;
        }
        return currentNode;
      }
    }
  

    // te muestra la lista a partir de esa posicion,
    // pero no lo saca al nodo
    get(index) {
      if (index < 0 || index >= this.length) {
        return null;
      } else {
        let count = 0;
        let currentNode = this.head;
  
        while (count < index) {
          currentNode = currentNode.next;
          count += 1;
        }
  
        return currentNode;
      }
    }
  }


  var miLista = new SinglyLinkedList();

  miLista.push("A");
  miLista.push("B");
  miLista.push("C");
  miLista.push("D");
   
  console.log(miLista)
  console.log(miLista.get(2))