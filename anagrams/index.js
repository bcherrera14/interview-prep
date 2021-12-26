// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let charsA = stringA.replace(/[^\w]/g, '').toLowerCase().split('');
	let charsB = stringB.replace(/[^\w]/g, '').toLowerCase().split('');
	let charMapA = {};
	let charMapB = {};
	if (charsA.length !== charsB.length) {
		return false;
	}

	for (let char of charsA) {
		if (!charMapA[char]) {
			charMapA[char] = 1;
		} else {
			charMapA[char] += 1;
		}
	}

	for (let char of charsB) {
		if (!charMapB[char]) {
			charMapB[char] = 1;
		} else {
			charMapB[char] += 1;
		}
	}

	for (let char in charMapA) {
		if (charMapA[char] !== charMapB[char]) {
			return false;
		}
	}
	return true;
}

anagrams('His there', 'Bye there');

module.exports = anagrams;
