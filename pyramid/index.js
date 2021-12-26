// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//col length = n + n-1
//when to print #
//each row has x many #
//always starts with 1 #
// each step increase by previous step + 2 more

function pyramid(n) {
	let column = n + n - 1;
	for (let i = 0; i < n; i++) {
		let level = '';
		for (let j = 0; j < column; j++) {
			if (j >= Math.floor(column / 2 - i) && j <= Math.floor(column / 2 + i)) {
				level += '#';
			} else {
				level += ' ';
			}
		}
		console.log(level);
	}
}

module.exports = pyramid;
