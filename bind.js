

function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
  }
  
  const person = { name: 'Alice' };
  
  const boundGreet = bind(greet, person, 'Hello');
  console.log(boundGreet('!'));  // Output: Hello, Alice!
  //In this example, the bind function takes three arguments: 
  //the function to be bound (greet), the context (person), 
  //and any initial arguments you want to pre-fill ('Hello' and 'Hi', '!!!'). 
  //It returns a new function that, when called, 
  //invokes the original function with the specified context and arguments.





