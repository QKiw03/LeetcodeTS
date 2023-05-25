function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
	let size = candies.length;
	const arr: boolean[] = new Array(size);
	const max_Candies: number = Math.max(...candies);
	for (let i = 0; i < size; ++i) {
		if (candies[i] + extraCandies >= max_Candies) {
			arr[i] = true;
		} else {
			arr[i] = false;
		}
	}
	return arr;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
