class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const lastNode = {
            value: value,
            next: null,
            previous: null
        };
        lastNode.prev = this.tail;
        this.tail.next = lastNode;
        this.tail = lastNode;
        this.length++;
        return this; 
    }
    prepend(value){
        const initialNode = {
            value: value,
            next: null,
            previous: null
        };
        initialNode.next = this.head;
        initialNode.prev = initialNode;
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
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        const insertNode = {
            value: value,
            next: null,
            previous: null
        };
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = insertNode;
        insertNode.prev = leader;
        insertNode.next = follower;
        follower.prev = insertNode;
        this.length++;
        return insertNode;
    }
    remove(index){
        const leader = this.traverseToIndex(index-1);
        const removeNode = leader.next;
        leader.next = removeNode.next;
        this.length--;
        return removeNode;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.insert(20,88);
myLinkedList.remove(2)

console.log(myLinkedList.printList());
