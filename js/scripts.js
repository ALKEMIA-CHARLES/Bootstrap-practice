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
var contacts = [{
        "firstName": "Charles",
        "lastName": "Mtawali",
        "number": "0722541165",
        "likes": ["football", "coding", "Running"]
    },
    {
        "firstName": "Cynthia",
        "lastName": "Kasambuli",
        "number": "12344567",
        "likes": ["public speaking", "coding", "netflix"]

    },
    {
        "firstName": "Nora",
        "lastName": "Saul",
        "number": "5678903",
        "likes": ["football", "music", "art"]
    },
    {
        "firstName": "Daisy",
        "lastName": "Kimutai",
        "number": "0705134801",
        "likes": ["Tae Kwon Do", "Singing", "Music"]
    },
]

function lookupprofile(name, prop) {
    for (var i = 0; i < contacts.length; i++)
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
}

var data = lookupprofile("Cynthia", "number");

console.log(data);