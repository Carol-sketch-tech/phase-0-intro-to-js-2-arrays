// Arrays 
// it is a list surrounded by a square bracket and separated by commas.
// arrays are ordered meaning that the elements in array will always appear in a certain order.
const primeNumbers= [2,3,5,7,11,13,17,19,23,29,31,37];
console.log(primeNumbers.length);
const flowers =["roses", "lilies","sunflower","orchid"];
console.log(flowers.length);

const winningNumbers=[32,9,14,33,48,5];

function logwinningnumbers(winningnumbers){
 console.log("winning Numbers :", winningNumbers);
 
}
logwinningnumbers();


// using the bracket notation.
// every element in array is assigned to a specific index starting with 0.
// the first element of an array is index 0. and the fifth element in an array is index 4.
// to access a certain element in as array we use the bracket notation.
//  the basic sytax is nameOfArray[index of the element(s)]

const winningnumbers=[32,9,14,33,48,5];
// to access the element 14 in the array above, we do the following.
console.log(winningnumbers[0]);


const names=["caroline","benson","roy","mageto","mitchell"]
console.log(names[3]);

const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  console.log (alphabet.length);
  console.log(alphabet[alphabet.length -8]);

//   updating the value of an element.
console.log(alphabet[alphabet.length - 10]);
console.log(alphabet [16] ="zoom")
console.log (alphabet[alphabet.length - 22]= "who is that? I'll kill you if i find you!");


// nested arrays
// an array can contain elemnts of any other data type.this include other arrays.
const egregiouslyNestedArray = [
    "How",
    ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
    "seems.",
  ];
  console.log(egregiouslyNestedArray[1][0])
  console.log(egregiouslyNestedArray[1][1][1][1][1])

//   NOTE 
const board = [
    ["X", "O", " "],
    [" ", "X", "O"],
    ["X", " ", "O"],
  ];
  
console.log( board);
console.log(board[2][2] ="xyz");
console.log( board);
// we are using x y coordinated for a certain index in a certain array inside the main array.
// study the example above for the array board.
