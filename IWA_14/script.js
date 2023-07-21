// CHALLENGE 1


firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  console.log(parameter)
  console.log(parameter)
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

hobby()


// CHALLENGE 2

function add(a, b)  {
   a + b
   }

function multiply(a, b) { 
  a - b 
}

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()