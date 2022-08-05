//a callback function is a function which is passed into another function as an argument,
//which is then invoked inside the outer function to complete some kimd of routine or action


function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);