/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counterFunction = n
    return function() {
        return counterFunction++;
    };
};
let counter = createCounter(10)
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */