// Reproduce the behavior of these array methods with your own functions

    // Callback Example
    // function greeting(name) {
    //     console.log("Hello " + name);
    // }

    // function input() {
    //     name = prompt("What is your name?");
    //     greeting(name);
    // }

    // input();


const letters = ["A", "B", "C", "D", "E"];
const numbers = [1, 4, 15, 3, 9, 11, 6, 1, 0, 13];
const words = ["here", "are", "some", "words", "to", "utilize"];

console.log('Letters Array: ["A", "B", "C", "D", "E"]');
console.log('Numbers Array: [1, 4, 15, 3, 9, 11, 6, 1, 0, 13]');
console.log('Words Array: ["here", "are", "some", "words", "to", "utilize"]');
console.log("");

// 1) forEach()
console.log("forEach():")
function forEachFunction(arrayForEach, callbackForEach) {
    for (let i = 0; i < arrayForEach.length; i++) {
        const currentValue = arrayForEach[i];
        callbackForEach(currentValue, i, arrayForEach);
    }
}

forEachFunction(letters, function (letter, i, arrayForEach) {
    const vowel = letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U";
    const letterType = vowel ? "Vowel" : "Consonant";
    console.log(`The letter '${letter}' at position ${i} of ${arrayForEach} is a ${letterType}.`);
});
console.log("");


// 2) map()
console.log("map():")
function mapFunction(arrayMap, callbackMap){
    for(let i = 0; i < arrayMap.length; i++){
        const currentValue = arrayMap[i];
        callbackMap(currentValue, i, arrayMap);
    }
    return arrayMap;
}

mapFunction(numbers, function(number, index) {
    const mult = numbers.map(number => number * 2);
    console.log(`The number '${number}' in ${numbers} is now ${mult[index]}`);
});
console.log("");


// 3) some()
console.log("some():")
function someFunction(arraySome, callbackSome) {
    for (let i = 0; i < arraySome.length; i++) {
        const currentValue = arraySome[i];
        if (callbackSome(currentValue, i, arraySome)) return true;
    }
    return false;
}
console.log(`Does any item in [${words}] contain more than 4 characters? ${someFunction(words, item => item.length > 4)}`);
console.log("");


// 4) find()
console.log("find():")
function findFunction(arrayFind, callbackFind){
    for (let i = 0; i < arrayFind.length; i++){
        const currentValue = arrayFind[i];
        if (callbackFind(currentValue) === true) return currentValue;
    }
}
console.log(`First item in [${words}] with the letter "O" is "${findFunction(words, item => item.includes("o"))}"`);
console.log("");


// 5) findIndex()
console.log("findIndex():")
function findIndexFunction(arrayFindIndex, callbackFindIndex) {
    for (let i = 0; i < arrayFindIndex.length; i++) {
        const currentValue = arrayFindIndex[i];
        if (callbackFindIndex(currentValue, i, arrayFindIndex)) return i;
    }
    return -1;
}
let x = findIndexFunction(words, item => item.length < 3)
console.log(`The index of [${words}] with fewer than 3 characters is: ${x} and that word is "${words[x]}"`);
console.log("");


// 6) every()
console.log("every():")
function everyFunction(arrayEvery, callbackEvery) {
    for (let i = 0; i < arrayEvery.length; i++) {
        const currentValue = arrayEvery[i];
        if(!callbackEvery(currentValue, i, arrayEvery)) return false;
    } return true;
}
console.log(`Is every number in [${numbers}] less than 13? ${everyFunction(numbers, number => number < 13)}`);
console.log("");


// // 7) filter()
console.log("filter():")
function filterFunction(arrayFilter, callbackFilter) {
    const arrayFilterNew = [];
    for (let i = 0; i < arrayFilter.length; i++) {
        const currentValue = arrayFilter[i];
        if(callbackFilter(currentValue) === true) {
            arrayFilterNew.push(currentValue);
        }
    } return arrayFilterNew;
}
console.log(`Words in [${words}] with the letter "o" are "${filterFunction(words, word => word.includes("o"))}"`);