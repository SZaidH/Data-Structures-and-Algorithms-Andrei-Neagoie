// Implement a push method in the Linked List class
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val){
        let currentVal = new Node(val);
        if(!this.head){
            this.head = currentVal;
            this.tail = this.head;
        }else{
            this.tail.next = currentVal;
            this.tail = currentVal;
        }
        this.size++;
        return this;
    }
}

let list = new LinkedList();
list.push("Hello");
list.push("there");
list.push("General");
console.log(list.push("Kenobi"));