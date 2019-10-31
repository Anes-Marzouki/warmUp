/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '15 6 8 14 12 9 11 10137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
//--------------------------------------------------------------------->
//Turn the string into an array.split()
/*
str.split(); =====> []
*/
//if array[index] is 1 === array[index] += array[index + 1]
//str = '124615'

/*
while (strarray.length > 0) {
    if(strarray[0] === 1) {
            arrayOfNumbs.push(strarray[0] + strarray[1]); // eg [123] pushes 12 to array.
            strarray.splice(0, 2);
    }else {
    arrayOfNums.push(strarray[0]);
    strarray.splice(0, 1);
    }
}
*/

// returns max and min 
/*
func min and max ====> array[] and a const max and min // eg if array[0] > const === max = array[0]
*/
//----------------------------------------------------------------------->


function mysteryRange(str, range) {
    if (range < 100 && range > 0) {
        var strArray = Array.from(str);
        var arrayOfNumbs = [];
        var result = [];
        while (strArray.length > 0) {
            if(strArray[0] == 1) {
                arrayOfNumbs.push(strArray[0] + strArray[1]); // eg [123] pushes 12 to array.
                strArray.splice(0, 2);
            }else {
                arrayOfNumbs.push(strArray[0]);
                strArray.splice(0, 1);
            }
        }
        //console.log(arrayOfNumbs);


        for (i = 0; i < range - 1; i++) {
            var max = arrayOfNumbs[0];
            var min = arrayOfNumbs[0];
            if (arrayOfNumbs[i] >= max) {
                max = arrayOfNumbs[i];
                } else if (arrayOfNumbs[i] < min) {
                min = arrayOfNumbs[i];
                }
           result.push(max, min);
           
        }
        return result;
    }
}
