/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	if (s.length <= 1) {
		return true;
	}
	s = s.toLowerCase();
	s = s.replace(/[^a-zA-Z0-9]/g, '');
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== s[s.length - i - 1]) {
			return false;
		}
	}
	return true;
};

console.log(isPalindrome('race a car'));
