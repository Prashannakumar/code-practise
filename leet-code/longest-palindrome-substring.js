// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.


// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// sol1
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = "";
    let max = 0;

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j <= 1; j++){
            let l = i;
            let r = i + j;

            while(l >= 0 && r < s.length && s[l] === s[r]){
                let len = r - l + 1;
                if(len > max){
                    res = s.substring(l, r + 1);
                    max = len;
                }
                l--;
                r++;
            }
        }
    }
    return res;
};

//sol2:

const isPalindrome = (s) => {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

var longestPalindrome = function(s) {
    if (isPalindrome(s)) return s;
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const candidate = s.slice(i, j + 1);
            if (isPalindrome(candidate) && candidate.length > longest.length) {
                longest = candidate;
            }
        }
    }
    return longest;
};