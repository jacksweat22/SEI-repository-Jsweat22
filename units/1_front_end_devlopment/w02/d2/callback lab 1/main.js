// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

function writeDing(){
    console.log('ding!');
}

let timerId = setTimeout(writeDing, 3000);


//   // Exercise 2

// // Javascript arrays have a built-in sort method that can take
// // a callback to tell it how to compare the things you want to sort.

// // Research the array sort method.

// // Write the sorting callback as a named function declaration

// // Write the callback function to provide to the sort method so that
// // the following code sorts the words from shortest to longest.

// const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

// const sortedWords = words.sort(/* pass in a named callback here */);

// // Check that logging sortedWords outputs
// // ["nice", "short", "medium", "lengthy", "delicious"]
// // Exercise 3
// //
// // Change Exercise 2 so that:
// //   1. The words sort longest to shortest
// //   2. Use an anonymous inline function

// const longWordsFirst = words.sort(/* write an anonymous inline function here */);

// // Check that logging longWordsFirst outputs
// // ["delicious", "lengthy", "medium", "short", "nice"]