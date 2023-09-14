// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// 

///////////////////////////////////////
// sol1

var createCounter = function(n) {
    return function() {
        return n++
    };
};


// sol2

// var createCounter = n => () => n++;


// sol3

// var createCounter = function(n) {
//   return () => n++
// };