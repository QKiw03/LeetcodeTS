function twoSum(nums: number[], target: number): number[] {
	const sMap = new Map();
	var numberD = 0;

	for (let i = 0; i < nums.length; i++) {
		numberD = target - nums[i];
		if (sMap.has(numberD)) {
			return [sMap.get(numberD), i];
		}
		sMap.set(nums[i], i);
	}
}
