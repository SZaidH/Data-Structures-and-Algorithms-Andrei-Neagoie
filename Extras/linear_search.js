// Search for a specific book (and it's index position) from an array representing a library

function bookSearch(library, book){
    // loop through the library to find the specified book
    for(let i = 0; i < library.length; i++){
        if(library[i] === book){
            return `${book} found in library! Located in section ${i+1}.`;
        }
    }
    return `${book} not found in library`;
}

const library = ['East Of Eden', '1984', 'The Alchemist', 'World War Z'];
const book = 'The Alchemist';
console.log(bookSearch(library,book));