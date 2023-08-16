//Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned.
//It is guaranteed there is at least one word that is not banned, and that the answer is unique.
//The words in paragraph are case-insensitive and the answer should be returned in lowercase.

//Examples

//Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
//Output: "ball"
//Explanation: 
//"hit" occurs 3 times, but it is a banned word.
//"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
//Note that words in the paragraph are not case sensitive, that punctuation is ignored (even if adjacent to words, such as "ball,"), and that "hit" isn't the answer even though it occurs more because it is banned.

//Input: paragraph = "a.", banned = []
//Output: "a"

//Constraints:
//1 <= paragraph.length <= 1000
//paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
//0 <= banned.length <= 100
//1 <= banned[i].length <= 10
//banned[i] consists of only lowercase English letters.

//Solution

var mostCommonWord = function(paragraph, banned) {
        
    let para = paragraph.replace(/[\p{P}$+<=>^`|~]/gu, " ");
    
    para = para.toLowerCase().split(/[, ]/g);
        
    let freqMap = {};
    let mostfreq = "";
    
    for(let word of para){
        if(!banned.includes(word) && word !== ""){
            if (!freqMap[word]) {
                freqMap[word] = 0;
            }
                freqMap[word] += 1;
        }
    }
    
    let max = 0;
    let maxKey = "";
    
    for(let key in freqMap){
        if(freqMap[key] > max){
            max = freqMap[key];
            maxKey = key;
        }
    }
    return maxKey;
}

