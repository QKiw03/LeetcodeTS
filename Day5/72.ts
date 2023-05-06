function searchMatrix(matrix: number[][], target: number): boolean {
	const rows = matrix.length;
	const cols = matrix[0].length;
	var p = 0; // set position
	for (let i = 0; i < rows; ++i) {
		if (matrix[i][cols - 1] >= target) {
			// The first row may be appear the target
			p = i;
			break; // break out loop
		}
	}
	for (let i = 0; i < cols; ++i) {
		// Check values of row just was fined.
		if (matrix[p][i] === target) {
			return true; // If find, return true
		}
	}
	return false;
}

console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		3
	)
);
