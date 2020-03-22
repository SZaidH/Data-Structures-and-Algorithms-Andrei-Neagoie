class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        const node = this.top;
        return node;
    }
    push(value) {
        const node = new Node(value);
        if(this.length === 0){
            this.top = node;
            this.bottom = node;
        }else{
            const temp = this.top;
            this.top = node;
            this.top.next = temp;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.top){
            return null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.top;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
console.log(myStack.printList());
//Discord
//Udemy
//google
