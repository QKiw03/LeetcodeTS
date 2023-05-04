const arr: number[][] = [
	[1, 0, 0, 0],
	[1, 2, 1, 0],
];

const result1: number[][] = arr.map(
	(subArr: number[]) => subArr.filter((num: number) => num !== 0)[0]
);

console.log(result);
// Output: [[1], [1, 2, 1]]x
