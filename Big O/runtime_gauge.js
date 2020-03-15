//Script to demonstrate how the input affects the runtime performance

const book = ['Novel'],
      books = ['East of Eden', 'The Alchemist', 'To Kill a Mockingbird', 'Da Vinci Code'];
      library = new Array(10000).fill("The Alchemist");

//Function that accepts the array with a single string value
function single(array){
    let t0 = performance.now();
    for(i = 0; i < array.length; i++){
        if(array[i] === "Novel"){
            console.log("Novels are fun!");
        }
    }
    let t1 = performance.now();
    console.log("Runtime: " + t1-t0);
}

//Function that accepts the array with multiple string values
function multiple(array){
    let t0 = performance.now();
    for(i = 0; i < array.length; i++){
        if(array[i] === "The Alchemist"){
            console.log("The Alchemist is a fun read!");
        }
    }
    let t1 = performance.now();
    console.log("Runtime: " + t1-t0);
}

//Function that accepts the array with a lot of string values (Feel free to change the "library" array limit)
function large(array){
    let t0 = performance.now();
    for(i = 0; i < array.length; i++){
        if(array[i] === "The Alchemist"){
            console.log("The Alchemist is one best book in the library!");
        }
    }
    let t1 = performance.now();
    console.log("Runtime: " + t1-t0);
}

//Select one function and comment out the rest of code below to observe runtime performace based on the input provided
//console.log(single(book));
//console.log(multiple(books));
console.log(large(library)); 