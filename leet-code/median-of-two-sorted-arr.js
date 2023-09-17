// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
// sol

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2];
    let sortedArr = nums.sort((a,b)=>{return a-b});
    if(sortedArr.length % 2 == 0){
        // even [01234567]; len 8
        let median = (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 - 1])/2
        return median
    }else {
        // odd [01234]; len 5, [012345678]; len 9
        let median = sortedArr[Math.floor(sortedArr.length / 2)]
        return median
    }
};

console.log(findMedianSortedArrays([1,3],[2]))
console.log(findMedianSortedArrays([1,2],[3,4]))

//sol2
var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArr = nums1.concat(nums2).sort((a,b)=>{return a-b});
    if(sortedArr.length % 2 == 0){
        return (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 - 1])/2
    }else {
        return sortedArr[Math.floor(sortedArr.length / 2)]
    }
};