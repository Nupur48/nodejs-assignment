

function greet(message1, message2) {
    console.log(`${message1}, ${this.name}! ${message2}`);
}

const person = { name: 'Alice' };

greet.apply(person, ['Hello', 'How are you?']);  // Output: Hello, Alice! How are you?

  //In this example, the apply method is used to invoke the greet function with person as the this context and an array ['Hello', 'How are you?'] as the arguments.
  //This allows you to use the name property of the person object inside the greet function and pass multiple arguments as an array.
