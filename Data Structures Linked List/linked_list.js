class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const lastNode = {
            value: value,
            next: null
        };
        this.tail.next = lastNode;
        this.tail = lastNode;
        this.length++;
        return this; 
    }
    prepend(value){
        const initialNode = {
            value: value,
            next: null
        };
        initialNode.next = this.head;
        this.head = initialNode;
        this.length++;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const insertNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = insertNode;
        insertNode.next = holdingPointer;
        this.length++;
        return insertNode;
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index){
        const leader = this.traverseToIndex(index-1);
        const removeNode = leader.next;
        leader.next = removeNode.next;
        this.length--;
        return removeNode;

    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.insert(20,88);
myLinkedList.remove(2)

console.log(myLinkedList.printList());
