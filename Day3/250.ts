function intersect(nums1: number[], nums2: number[]): number[] {
	const mapArr: number[] = Array(1000 + 1).fill(0); // 1<=length,value <=1000
	const result: number[] = [];
	for (const num of nums1) {
		mapArr[num] += 1; // insert value at index i of nums,fake as key-value
	}

	for (const num of nums2) {
		if (mapArr[num] > 0) {
			// check nums2 has element of nums1 ?
			result.push(num);
			mapArr[num] -= 1; // delete the same
		}
	}
	return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
