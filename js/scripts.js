// var myArray = [];
// for (var i =1; i < 10; i += 2) {
//     myArray.push(i);
// }

// console.log(myArray);

// below code adds parameteres one by one
// var ourARR = [9,10,11,12];
// var ourTotal = 0;

// for (var i = 0; i < ourARR.length; i++ ){
//     ourTotal += ourARR[i];
// }
// console.log(ourtotal);


//  coding challenge (profile lookup)
// outlay for search engine

// var contacts = [{
//         "firstName": "Charles",
//         "lastName": "Mtawali",
//         "number": "0722541165",
//         "likes": ["football", "coding", "Running"]
//     },
//     {
//         "firstName": "Cynthia",
//         "lastName": "Kasambuli",
//         "number": "12344567",
//         "likes": ["public speaking", "coding", "netflix"]

//     },
//     {
//         "firstName": "Nora",
//         "lastName": "Saul",
//         "number": "5678903",
//         "likes": ["football", "music", "art"]
//     },
//     {
//         "firstName": "Daisy",
//         "lastName": "Kimutai",
//         "number": "0705134801",
//         "likes": ["Tae Kwon Do", "Singing", "Music"]
//     },
// ]

// function lookupprofile(name, prop) {
//     for (var i = 0; i < contacts.length; i++)
//         if (contacts[i].firstName === name) {
//             return contacts[i][prop] || "No such property";
//         }
// }

// var data = lookupprofile("Cynthia", "number");

// console.log(data);

// code to generate random numbers between 0 and 10
// var randomNumberBetween0and19 = Math.floor(Math.random());

// function randomWholenum() {
//     return Math.floor(Math.random() * 10);
// }

// console.log(randomWholenum());

// ANOTHER FORMULA TO CALCULATE IN-SPECIFIED-RANGE RANDOM NUMBERS
// function ourRandomRange(ourMin,ourMax){
//     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }

// ourRandomRange(1,9);

// var myRandom =  ourRandomRange(1,10);
// console.log(myRandom);

// connecting string argument plus string sentence
// function printManyTimes(str) {
//     "use strict";
//     const SENTENCE = str + " is cool";

//     for(let i = 0; i < str.length; i+=2){
//         console.log(SENTENCE);
//     }
// }

// printManyTimes("FreeCodeCamp");

// Re-assignment of values through index reference

// const s = [5,7,2];
// function editInPlace(){
//     "use strict";
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;

// }

// editInPlace();
// console.log(s);

// how to copy code into args

// const sum = function() {
//     return function sum(...args){
//         return args.reduce((a,b) => a+b, 0);
//     };
// } ();
// console.log(sum(1,2,3,4,5,5))

// Temperature; targeting specific elements in a variable in order to show a specific one out of others.

// const LOCAL_FORECAST = {
//     today: { min : 72, max: 83},
//     tomorrow: {min : 73.3, max : 84.6}
// };

// function getMaxOfTmrw(forecast) {
//     const{tomorrow: {max : maxOfTmrw}} = forecast;
//     return maxOfTmrw;
// }

// var greetings = "Tommorow's temperature will be " + getMaxOfTmrw(LOCAL_FORECAST);
// console.log(greetings);
// console.log(getMaxOfTmrw(LOCAL_FORECAST));

// get the mediain 
// const stats =  {
//     max: 56.78,
//     standard_deviation : 4.34,
//     median : 34.54,
//     mode : 23.87,
//     min : -0.75,
//     average : 35.85
// };

// const half = (function() {
//     return function half({max, min}) {
//         return (max + min) / 2.0;
//     };
// }) ();

// console.log(stats);
// console.log(half(stats));

// const result = {
//     success: ["max.length", "no-amd", "prefer-arrow-function"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     // failure: 0.5,
//     skipped: ["id-blacklist","no-dup-keys" ]
// };

// function makelist(arr){
//     "use strict";
//     const{failure:resultDisplay}= arr;
// return resultDisplay;
// }

// console.log(makelist(result));


// literal template

// const result = {
//     success: ["max.length", "no-amd", "prefer-arrow-function"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist","no-dup-keys" ]
// };

// function makelist(arr) {
//     const resultDisplayArray = [];
//     for(let i = 0; i < arr.length; i++) {
//         resultDisplayArray.push(`<li class = "text-warning">${arr[i]}}</li`)
//     }

//     return resultDisplayArray;
// }

// const resultDisplayArray = makelist(result.success);

// console.log(resultDisplayArray);

// new way to make Constructors

// class SpaceShuttle {
//     constructor (targetPlanet){
//         this.targetPlanet = targetPlanet;
//     }
// }

// var zeus =  new SpaceShuttle('Jupiter');
// var Aphrodite = new SpaceShuttle('Mars');

// console.log(zeus);
// console.log(Aphrodite);

// class Vegetable {
//     constructor(name) {
//         this.name = name;
//     }
// }

// var carrot = new Vegetable('carrot');
// var grape = new Vegetable('grape');

// console.log(carrot);
// console.log(grape);