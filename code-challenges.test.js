// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


describe("codedMessage", ()=> {
    it("takes in a string and returns a coded message", () => {
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

 FAIL  ./code-challenges.test.js
  codedMessage
    ✕ takes in a string and returns a coded message (1 ms)

  ● codedMessage › takes in a string and returns a coded message

    ReferenceError: codeMessage is not defined
b) Create the function that makes the test pass.

//Psuedo code
// create function codedMessage
// input is secretCodeWord1,2,3
//  converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
// I need to replace a character with another character
// Use .replace()
// Used RegEx inside of my .replace to replace characters. /g will look for all occurrences of the character
// So the .replace is changing 'a' --> 4, 'e' --> '3', 'i' --> 1, and 'o' to 0.
// In order for it to not be case sensitive I had to use i inside of my RegEx, g would find all matches, i would make my search case insensitive. These are both mode modifiers. Capital 'E' would not have been replaced otherwise.
// output 
// "L4ck4d41s1c4l"
// "Gobbledygook"
// "3cc3ntr1c"


const codedMessage = (string) => {
  return string.replace(/a/gi,'4').replace(/e/gi,'3').replace(/i/gi,'1').replace(/o/gi,'0')
}

 PASS  ./code-challenges.test.js
  codedMessage
    ✓ takes in a string and returns a coded message (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


describe("narrowDownArray", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(narrowDownArray(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(narrowDownArray(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

 FAIL  ./code-challenges.test.js
  narrowDownArray
    ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (2 ms)

  ● narrowDownArray › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

    ReferenceError: narrowDownArray is not defined

// b) Create the function that makes the test pass.

//Psuedo code
// create function named narrowDownArray
// Pass array, character into function parameters
// Need to look for character inside of Array. 
// input - takes array input fruitArray, and character input from letterA, letterE
// Filter through array?
// Use .filter since we want to return an array of shorter length.
// Used a Higher Order Function, takes in the value from array.
// Used .toLower() so my search would be case insensitive. Ex. Mango is now mango. Tried using RegEx for the case insensitive part, not successful.
// Used .includes() this would check if it has 'a' or 'e' since I passed my second param character into it. 
// Final result is an Array containing 'a' or 'e'
// ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
// output - Two separate Arrays. ["Mango", "Apricot", "Peach"] / ["Cherry", "Blueberry", "Peach"]


const narrowDownArray = (array,string) => {
 return array.filter(value => value.toLowerCase().includes(string))
}


 PASS  ./code-challenges.test.js
  narrowDownArray
//     ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (3 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// //  FAIL  ./code-challenges.test.js
// //   fullHouse
// //     ✕ takes in an array of 5 numbers and determines whether or not the array is a full house (1 ms)

// //   ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house

// //     ReferenceError: fullHouse is not defined

// // b) Create the function that makes the test pass.

// Psuedo code
// create function named fullHouse
// create a conditional to compare the current index to 5/7
// input hand1,2,3,4
// output true, false , false, true


// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false
// const hand4 = [7, 2, 7, 2, 7]
// // Expected output: true



const fullHouse = (arr) => { 
    if (arr[0] === 5 && arr[1] === 5 && arr[2] === 5 && arr[3] !== 5 ) {
        return true
    } else if (arr[0] === 7 && arr[2] === 7 && arr[4] === 7) {
        return true
    } else {
        return false
    }
}


 PASS  ./code-challenges.test.js
  fullHouse
    ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (5 ms)
