/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D': 500, 'M':1000
    }
     let converted = 0;
    for (let i=0; i < s.length; i++){
        const indexOfRoman = roman[s[i]];
        const nextList = roman[s[i + 1]];
        
        if (nextList > indexOfRoman) {
            converted += (nextList - indexOfRoman);
            i++;
        }
        else {
            converted += indexOfRoman
        }
    }
    return converted;
};

