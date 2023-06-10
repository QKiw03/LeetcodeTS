function generate(numRows: number): number[][] {
	const mt: number[][] = new Array(numRows) // create matrix simulation
		.fill(0)
		.map(() => new Array(numRows).fill(0));
	mt[0][0] = 1; // the firt value
	for (let i = 1; i < numRows; ++i) {
		//
		for (let j = 0; j < numRows; ++j) {
			if (j === 0) {
				mt[i][j] = 1;
			} else {
				mt[i][j] = mt[i - 1][j - 1] + mt[i - 1][j];
			}
		}
	}
	const pascalTringle: number[][] = mt.map((subArr: number[]) =>
		subArr.filter((num: number, index: number) => num !== 0 || index === 0)
	);
	return pascalTringle;
}

console.log(generate(5));

// Shortcut
function generate1(numRows: number): number[][] {
	var pascalTringle = new Array(numRows);
	for (let i = 0; i < numRows; ++i) {
		pascalTringle[i] = new Array(i + 1);
		pascalTringle[i][0] = 1;
		pascalTringle[i][i] = 1;
		for (let j = 1; j < i; ++j) {
			pascalTringle[i][j] =
				pascalTringle[i - 1][j - 1] + pascalTringle[i - 1][j];
		}
	}
	return pascalTringle;
}

console.log(generate1(5));
