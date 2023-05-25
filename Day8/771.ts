function numJewelsInStones(jewels: string, stones: string): number {
	let count: number = 0;
	for (let i = 0; i < stones.length; ++i) {
		if (jewels.includes(stones[i])) {
			count++;
		}
	}
	return count;
}

console.log(numJewelsInStones('aA', 'aAAAbcc'));
