// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let strArr = str.split('');
	return strArr.reduce((reversed, char) => {
		return char + reversed;
	});
}

// function reverse(str) {
// 	let strArr = str.split('');
// 	return strArr.reverse().join('');
// }

// function reverse(str) {
// 	let reversed = '';
// 	for (char of str) {
// 		reversed = char + reversed;
// 	}
// 	return reversed;
// }

module.exports = reverse;
