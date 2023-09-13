//Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

//Examples

//Input: words = ["bella","label","roller"]
//Output: ["e","l","l"]

//Input: words = ["cool","lock","cook"]
//Output: ["c","o"]

//Constraints:
//1 <= words.length <= 100
//1 <= words[i].length <= 100
//words[i] consists of lowercase English letters.

//Solution

var commonChars = function(A) {
    const result = []
    const firstWordArr = [...A[0]]
    for(const letter of firstWordArr) {
        if(A.every(word => word.includes(letter))) {
            result.push(letter)
            A = A.map(word => word.replace(letter, ''))
        }
    }    
    
    return result
}


