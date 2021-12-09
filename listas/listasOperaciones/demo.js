class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  

  class LinkedList {
    constructor() {
      this.root = null; // first/head/root element
      this.size = 0; // total number of elements in the list
    }
  
    // ...
    addLast(value) { // similar Array.push
        const node = new Node(value);
      
        if(this.root) {
          let currentNode = this.root;
          while(currentNode && currentNode.next) {
            currentNode = currentNode.next;
          }
          currentNode.next = node;
        } else {
          this.root = node;
        }
      }
      removeLast() {
        let current = this.root;
        let target;
      
        if(current && current.next) {
          while(current && current.next && current.next.next) {
            current = current.next;
          }
          target = current.next;
          current.next = null;
        } else {
          this.root = null;
          target = current;
        }
      
        if(target) {
          return target.value;
        }
      }
/**
  * Adds an element to the beginning of the list. Similar to Array.unshift
  * Runtime: O(1)
  * 
  */
 addFirst(value) {
    const node = new Node(value);
    node.next = this.root;
    this.root = node;
  }
/**
  * Removes element from the start of the list (head/root). It's Similar `Array.shift`
  * Runtime: O(1)
  */
 removeFirst() {
    const first = this.root;
  
    if (first) {
      this.root = first.next;
      return first.value;
    }
  }

  remove(index = 0) {
    if(index === 0) {
      return this.removeFirst();
    }
  
    for (let current = this.first, i = 0; current;  i++, current = current.next) {
      if(i === index) {
        if(!current.next) { // if it doesn't have next it means that it is the last
          return this.removeLast();
        }
        current.previous.next = current.next;
        this.size--;
        return current.value;
      }
    }
  }
  contains(value) {
    for (let current = this.first, index = 0; current;  index++, current = current.next) {
      if(current.value === value) {
        return index;
      }
    }
  }
                    
  }


  var miLista = new LinkedList();

  miLista.addLast("A");
  miLista.addLast("B");
  miLista.addLast("C");
  miLista.addLast("D");
  miLista.remove(1); // este falla 
  console.log(miLista);
  