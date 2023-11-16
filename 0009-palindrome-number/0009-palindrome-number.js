/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Palindrome is a word, phrase or sequence (in this case a number) that reads the same backward as forward.
    // for example - LEVEL, MOM, 101, 121
    const strConverted = x.toString(); // convert the number to string
    
    // compare the two characters from the beginning to end
    let left = 0;
    let right = strConverted.length - 1; 
    
    while(left < right){
        if(strConverted[left] !== strConverted[right]){
            return false;
        }
        
        left++;
        right--;
    }
    return true;
};

console.log( isPalindrome(121))