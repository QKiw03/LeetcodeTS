// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

function containsDuplicate(nums: number[]): boolean {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				// Check, if any value appears at least twice => return true
				return true;
			}
		}
	}
	return false; // If not true
}

console.log(containsDuplicate([1, 2, 3, 4]));
