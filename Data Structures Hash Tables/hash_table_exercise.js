//Given a template, define get and set functions for the class HashTable

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }

    set(key, value){
        this.data = [key,value];
        return this.data;
    }

    get(value){
        value = this.data;
        return value;
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);
  console.log(myHashTable.set('grapes', 10000));
  console.log(myHashTable.get('grapes'));
  console.log(myHashTable.set('apples', 9));
  console.log(myHashTable.get('apples'));
  