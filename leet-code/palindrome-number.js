// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?


// sol1 - converting to string

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    return x.toString().split('').reverse().join('') == x
};

// sol2 - converting to string
var isPalindrome = function(x) {
    return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));
};

// sol3 - without converting to string
var isPalindrome = function(x) {
    if(x<0) return false;
  let rev = 0;
  let temp = x;
  while(temp>0){
    rev = (rev*10)+(temp%10);
    temp = Math.floor(temp/10);
  }
  return (x === rev)?true:false;
};

// sol4 - without to string
var isPalindrome = function(x) {
    let rev = 0
    let original = x

    if(x < 0) x = Math.abs(0 - x)

    while( x > 0)
    {
      let rem = x % 10
      rev = rev *10 +rem
      x = Math.floor( x / 10)
    }
    if(rev == original) return true
    return false
};