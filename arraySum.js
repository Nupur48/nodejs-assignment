var twoSum = function (nums, target) {
    let n = nums.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(i, j);
                return nums[i, j];

            }
        }

    }
    throw new Error('No solution found.');


};
const nums = [2, 7, 11, 15];
const target = 9;


try {
    console.log(twoSum(nums, target));
    //console.log
} catch (err) {
    console.error(err.message);
}