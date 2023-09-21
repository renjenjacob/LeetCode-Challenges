//Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
//We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
//You must solve this problem without using the library's sort function.

//Examples

//Input: nums = [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]

//Input: nums = [2,0,1]
//Output: [0,1,2]

//Constraints:
//n == nums.length
//1 <= n <= 300
//nums[i] is either 0, 1, or 2.

//Solution

var sortColors = function(nums) {
    //first we create two pointers one will always mark the location of last zero in our array and the second will always mark the location of first two in our array. To initalize we can assign them first and last numbers.
    let zeroPointer = 0;
    let twoPointer = nums.length - 1;
    //iteration pointer i for the loop
    let i = 0;
    while(i < nums.length){
        
        //Shifting pointers
        
        //for each iteration we want our pointers to be shifted to the correct position. we shift zeroPointer to the right unless we see a non zero number.
        while(nums[zeroPointer] == 0){
            zeroPointer++;
        }
        //we shift twoPointer to left unless we see a non two number.
        while(nums[twoPointer] == 2){
            twoPointer--;
        }
        
        //Swapping
        
        //if we see a number which is 0 but its index is larger than zeroPointer, we swap the number with the number at zeroPointer

        //else if we see a number which is 2 but its index is smaller than twoPointer, we swap the number with the number at twoPointer
        
        //else the number is at correct position. so, we can increment i
        if(nums[i] == 0 && i > zeroPointer){
            let temp = nums[i];
            nums[i] = nums[zeroPointer];
            nums[zeroPointer] = temp;
        } else if(nums[i] == 2 && i < twoPointer){
            let temp = nums[i];
            nums[i] = nums[twoPointer];
            nums[twoPointer] = temp;    
        } else {
            i++;
        }
    }
}


