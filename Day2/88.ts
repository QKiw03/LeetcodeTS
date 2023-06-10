/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	var m1: number = m - 1;
	var m2: number = n - 1;
	var k: number = n + m - 1;
	while (m2 >= 0) {
		if (nums1[m1] > nums2[m2]) {
			nums1[k] = nums1[m1];
			m1--;
		} else {
			nums1[k] = nums2[m2];
			m2--;
		}
		k--;
	}
}
