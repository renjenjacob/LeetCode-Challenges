//Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

//Examples

//Input: arr = [1,2,2,1,1,3]
//Output: true
//Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

//Input: arr = [1,2]
//Output: false

//Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
//Output: true

//Constraints:
//1 <= arr.length <= 1000
//-1000 <= arr[i] <= 1000

//Solution

var uniqueOccurrences = function(arr) {
    let count = 1;
    let countArr = [];

    //counter of each digit
    for (let i = 0; i < arr.length;){
        for (let j = i; j < arr.length;){
            if (arr[i] == arr[j] & i != j){
                count++;
                arr.splice(j, 1);
            }else j++;
        }
        countArr.push(count);
        count = 1;
        arr.splice(i, 1);
    }

    countArr.sort();

    //check for repetition of counter values
    //since the array was sorted, the duplicate values ​​will be next
    for (let k = 0; k < countArr.length - 1; k++){
        if (countArr[k] == countArr[k + 1]) return false;
    }
    return true;
}

