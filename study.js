let books = [
    'Eloquent JavaScript', 
    'JavaScript: The Good Parts', 
    'Learn JavaScript VISUALLY',
    'You don\'t know js',
    'JavaScript: The Definitive Guide'
]

//for ... loop
function forLoop(books){
    for (let i = 0; i < books.length; i++) {
        console.log(books[i])
    }
}

//forLoop(books);
/* =>
Eloquent JavaScript
JavaScript: The Good Parts
Learn JavaScript VISUALLY
You don't know js
JavaScript: The Definitive Guide
*/


//for ... of
function forOfLoop(books){
    for (let book of books) {
        console.log(book)
    }
}

//forOfLoop(books);
/* =>
Eloquent JavaScript
JavaScript: The Good Parts
Learn JavaScript VISUALLY
You don't know js
JavaScript: The Definitive Guide
*/



let oneBook = {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    publisher: 'No Starch Press'
}

//for ... in 
function loopInLoop (obj){
    for(let key in obj){
        console.log(key)
        console.log(obj[key])
    }
}

loopInLoop(oneBook);
/* =>
title
Eloquent JavaScript
author
Marijn Haverbeke
publisher
No Starch Press
*/

