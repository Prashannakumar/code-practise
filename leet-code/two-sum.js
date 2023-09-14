// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


//sol1

var twoSum = function(nums, target) {
    for(let index = 0; index<nums.length; index++){
      for(let i = index+1; i<nums.length; i++){
        if(nums[i]+nums[index] == target){
          return [index,i]
        }
      }
    }
};



//Sample 32 ms submission



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndex = {}; // A map to store numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in numToIndex) {
            return [numToIndex[complement], i];
        }
        
        numToIndex[nums[i]] = i;
    }
    
    return []; // Return an empty array if no solution is found
};

//Sample 40.7 MB submission



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
   
    for (let i = 0; i< nums.length; i++) {
        for(j = i + 1; j < nums.length; j++) {
            if ( nums[i] + nums[j] ===target ){
                return [i, j]
 
            }
        }
        
    }
 };