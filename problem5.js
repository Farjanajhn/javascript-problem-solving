const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// take the operator input
rl.question('Enter operator ( either +, -, * or / ): ', (operator) => {
  // take the operand input
  rl.question('Enter first number: ', (number1Str) => {
    rl.question('Enter second number: ', (number2Str) => {
      const number1 = parseFloat(number1Str);
      const number2 = parseFloat(number2Str);

      let result;

      // using if...else if... else
      if (operator === '+') {
        result = number1 + number2;
      } else if (operator === '-') {
        result = number1 - number2;
      } else if (operator === '*') {
        result = number1 * number2;
      } else {
        result = number1 / number2;
      }

      // display the result
      console.log(`${number1} ${operator} ${number2} = ${result}`);

      // Close the readline interface
      rl.close();
    });
  });
});
