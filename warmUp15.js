/// write a function that takes a string as an argument 
// and returns the string reversed word by word 

// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .


// function reverseStr(str) {
//     var arrayOfStr = str.split(' ');
//     var reversedarray = [];    
//     for (i = arrayOfStr.length; i >= 0; i--) {
//         console.log(arrayOfStr[i])
//         reversedarray.push(arrayOfStr[i]);
//     }
//     return reversedarray.join(' ');
// }
    array = [];
    secondArray = [];
function reverseStr(str) {
//     array = [];
//     secondArray = [];
    string = ''; //return undefined when passed in for: fixed!!
    console.log(string)
    for (i=0; i < str.length; i++){ //returns word by word.
        if (str[i] !== ' ') {
            array[i] = str[i];
        }else {
             secondArray += array; // var a = ['h'] var b = ['e'] , a + b = he
             reversedStr()
        }
    }
//     for (i = array.length; i >= 0; i--) {
//     string += array[i];
//     }
return secondArray;
}
