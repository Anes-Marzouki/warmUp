// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.


//use regular expressions ??
function balloon(stringOfText) {
    var array;
    var balloonArray = [];
    var lcount = 0;
    var ocount = 0;
    
    if(stringOfText < 1 || stringOfText > 10000) {
    return 'Text out of bound';
    }
    
    if (Array.isArray(stringOfText)) {
        array = stringOfText;
    }else {
        array = stringOfText.split('');
    }
    for (i=0; i < array.length; i++) {
        if (array[i] == 'b' || array[i] == 'a' || array[i] == 'l' || array[i] == 'o' || array[i] == 'n') { //check for the letters 'b' 'a' 'l' 'o' 'n'
            balloonArray.push(array[i]);
        }else {
            return 0;
        }
         console.log(balloonArray);
        for (j=0; j < balloonArray; i++) { // counting the letters. e.g : 'b' 'a' 'b' ==> two 'b's.
            if (balloonArray[j] == 'l') {
                lcount += 1;
            } else if (balloonArray[j] == 'o') {
                ocount += 1;
            }
            if (lcount >= 2 && ocount >= 2) {
                return true;
            }
        } //if counts > 2 delete 'balloon' from ballonArray and run a recursion!!
       
    }
}