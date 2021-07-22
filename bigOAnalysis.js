//What is the Big O of the following problem? 

function biggestTwoSum(nums) {
    let max = -Infinity;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum > max) max = sum;
        }
    }

    return max
}

console.log(biggestTwoSum([1, 5, -10, 20])) //=> 25 
