function canConstruct(ransomNote: string, magazine: string): boolean {
	if (ransomNote.length > magazine.length) return false;

	for (let i = 0; i < ransomNote.length; ++i) {
		let letter: string = ransomNote[i];
		if (magazine.indexOf(letter) === -1) {
			return false;
		}
		magazine = magazine.replace(letter, '');
	}
	return true;
}

console.log(canConstruct('aa', 'aab'));
