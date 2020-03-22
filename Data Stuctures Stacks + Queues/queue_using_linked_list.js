class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        const node = this.first;
        return node;
    }
    enqueue(value){
        //Added to the end (last)
        const node = new Node(value);
        if(this.length === 0){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue("Joy");
  myQueue.enqueue("Matt");
  myQueue.enqueue("Pavel");
  myQueue.enqueue("Samir");
  myQueue.dequeue();
  console.log(myQueue);
  //Joy
  //Matt
  //Pavel
  //Samir
  
  