// Given an integer array nums, find the subarray with the largest sum, and return its sum.

function maxSubArray(nums: number[]): number {
	var max_here, max_farthest;
	max_here = max_farthest = nums[0];

	for (let i = 1; i < nums.length; i++) {
		max_here = Math.max(nums[i], max_here + nums[i]);
		max_farthest = Math.max(max_here, max_farthest);
	}

	return max_farthest;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
