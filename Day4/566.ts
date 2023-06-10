function matrixReshape(mat: number[][], r: number, c: number): number[][] {
	const rows = mat.length;
	const cows = mat[0].length;
	if (r * c != rows * cows) return mat;
	const arr: number[] = mat.flat();
	const newMat: number[][] = new Array(r)
		.fill(0)
		.map(() => new Array(c).fill(0));
	var p = 0;
	for (let i = 0; i < r; ++i) {
		for (let j = 0; j < c; ++j) {
			newMat[i][j] = arr[p++];
		}
	}
	return newMat;
}

console.log(
	matrixReshape(
		[
			[1, 2, 3, 4, 5],
			[6, 7, 8, 9, 10],
		],
		2,
		5
	)
);
