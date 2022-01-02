// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

//queue is first in first out
//adds to beginning of array
//removes last item in array
//peek shows last item in array

//stack is first in last out
//push adds to end of array
//pop removes last item in array
//peek returns last item in array

const Stack = require('./stack');

class Queue {
	constructor() {
		this.stackOne = new Stack();
		this.stackTwo = new Stack();
	}

	add(record) {
		this.stackOne.push(record);
	}

	remove() {
		while (this.stackOne.peek()) {
			this.stackTwo.push(this.stackOne.pop());
		}

		let record = this.stackTwo.pop();

		while (this.stackTwo.peek()) {
			this.stackOne.push(this.stackTwo.pop());
		}
		return record;
	}

	peek() {
		while (this.stackOne.peek()) {
			this.stackTwo.push(this.stackOne.pop());
		}

		let record = this.stackTwo.peek();

		while (this.stackTwo.peek()) {
			this.stackOne.push(this.stackTwo.pop());
		}
		return record;
	}
}

module.exports = Queue;
