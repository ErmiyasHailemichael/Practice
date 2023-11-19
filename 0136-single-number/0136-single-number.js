/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let counter = {}
    
    for (let num of nums){
        if(counter[num]){
            counter[num]++;
            
        } else {
            counter[num] = 1;
        }
    }
    for (let num in counter){
        if (counter[num] === 1){
            return parseInt(num)
        }
    }
};