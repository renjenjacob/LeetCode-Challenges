//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
//Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
//Letters are case sensitive, so "a" is considered a different type of stone from "A".

//Examples

//Input: jewels = "aA", stones = "aAAbbbb"
//Output: 3

//Input: jewels = "z", stones = "ZZ"
//Output: 0

//Constraints:
//1 <= jewels.length, stones.length <= 50
//jewels and stones consist of only English letters.
//All the characters of jewels are unique.

//Solution

var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let i in jewels){
        for(let j in stones){
            if(jewels[i]==stones[j]) count++
        }
    }
    return count;
}

