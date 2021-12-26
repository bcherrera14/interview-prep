// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let chars = str.split('');
	let charDict = {};
	let max = 0;
	let maxChar = '';
	for (let char of chars) {
		if (!charDict[char]) {
			charDict[char] = 1;
		} else {
			charDict[char]++;
		}
	}

	for (let char in charDict) {
		if (charDict[char] > max) {
			max = charDict[char];
			maxChar = char;
		}
	}
	return maxChar;
}

module.exports = maxChar;
