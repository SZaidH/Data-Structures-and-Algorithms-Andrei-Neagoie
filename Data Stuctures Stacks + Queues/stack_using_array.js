class Stack {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length-1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
console.log(myStack);
//Discord
//Udemy
//google
