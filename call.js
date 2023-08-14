

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello');  // Output: Hello, Alice!

//In this example, the call method is used to invoke the greet function with person as the
//this context and 'Hello' as the argument.
//This allows you to use the name property of the person object inside the greet function