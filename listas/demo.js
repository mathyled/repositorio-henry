
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
  //agregar a lo ultimo
    add(data) {
        const newNode = new Node(data, null)
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode;
        }
        this.size++;
    };
    //agregar en lugar en especifico
    insertAt(data, index) {
        // if(index<0 || index > this.size){
        if (index >= this.size) {
            return null;
        }

        const newNode = new Node(data)
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            this.head = new Node(data);
        } else {
            for (let i; i < index; i++) {
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            previous.next = new Node(data);
        }
        this.size++;
    }
    //remover por data
    removeData(data){
        let current=this.head;
        let previous=null;

        while(current!==null){
            if(current.data===data){
                if(!previous){
                    this.head=current.next;
                }else {
                    previous.next=current.next
                };
                this.size--;
                return current.data;
            }
            previous=current;
            current=current.next;
        };
        return null;
    }
    //remover por indice
    removeFrom(index){
        if(index<0 || index> this.size){
            return null
        }
        let current=this.head;
        let previous=null;
        if(index===0){
            this.head=current.next;
        }else {
           for (let i = 0; i < index; i++) {
                previous=current;
                current=current.next;   
           };
           previous.next=current.next;
        };
        this.size--;
        return current.data;
    }

};



const linkedList = new LinkedList();

linkedList.add(12)
linkedList.add(99);
linkedList.add(37)
// linkedList.removeData(12)
console.log(linkedList.removeFrom(1))
// linkedList.insertAt(10, 1);
console.log(linkedList)

