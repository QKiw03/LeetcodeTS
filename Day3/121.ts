// Solve : O(n^2)
function maxProfit1(prices: number[]): number {
	var result: number[] = [];
	for (let i = 0; i < prices.length - 1; ++i) {
		for (let j = i + 1; j < prices.length; j++) {
			var profit: number = prices[j] - prices[i];
			if (profit > 0) {
				result.push(profit);
			}
		}
	}
	if (result.length > 0) {
		return Math.max(...result);
	}
	return 0;
}

console.log(maxProfit1([7, 6, 4, 3, 1]));

// Solve2: Dynamic Programing
function maxProfit(prices: number[]): number {
	const n = prices.length;
	if (n === 0) {
		return 0;
	}
	const dp: number[] = new Array(n).fill(0); // Save max profit until day i;
	let min_price = prices[0]; // Price min util day i;
	for (let i = 1; i < n; ++i) {
		dp[i] = Math.max(prices[i] - min_price, dp[i - 1]); // Profit till today, Profit till yesterday
		min_price = Math.min(prices[i], min_price); // Check price today vs min price are choiced
	}
	return dp[n - 1];
}

console.log(maxProfit([7, 6, 4, 3, 1]));
