//Given an integer numRows, return the first numRows of Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it.

//Examples

//Input: numRows = 5
//Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

//Input: numRows = 1
//Output: [[1]]

//Constraints

//1 <= numRows <= 30

//Solution

var generate = function(numRows) {
    let triangle=[[1]]
    for (let i = 1; i < numRows; i++){
        const newArr = [1]
        for (let j = 1; j < i; j++){
            newArr.push(triangle[i-1][j] + triangle[i-1][j-1])
        }
        newArr.push(1)
        triangle.push(newArr)
    }
    return triangle
}


