// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaavar obj = {};

//------------code----------------
function replaceWithNumb(input) {
    var array = input.split('');
    for (var i = 0; i  <array.length; i++){
				if (obj.hasOwnProperty(array[i])){
					obj[array[i]] += 1;
				}else {
					obj[array[i]] = 1;
				}
            }
	return obj;
}aaa"
// result  =  "123456789101112"


