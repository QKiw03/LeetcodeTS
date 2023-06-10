/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let max = accounts[0].reduce((tong, current) => tong + current, 0);
	for (let i = 1; i < accounts.length; ++i) {
		let max2 = accounts[i].reduce((tong, current) => tong + current, 0);
		if (max2 >= max) max = max2;
	}
	return max;
};

console.log(
	maximumWealth([
		[1, 5],
		[7, 3],
		[3, 5],
	])
);
