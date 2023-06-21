#!/usr/bin/env node

const readline = require('readline');

// Create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user to enter two numbers
rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    // Parse the entered numbers
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);

    // Determine the largest and smallest numbers
    let x, y;
    if (a > b) {
      x = a;
      y = b;
    } else {
      x = b;
      y = a;
    }

    // Calculate the standard deviation
    const SD = x - y;

    // Prompt the user to enter the value of 'n'
    rl.question("Enter the value of 'n': ", (n) => {
      // Parse the value of 'n'
      const numN = parseInt(n);

      // Generate the ascending order range
      const ascendingRange = [];
      for (let i = 1; i <= numN; i++) {
        const r = i * SD + numN;
        ascendingRange.push(r);
      }

      // Generate the descending order range
      const descendingRange = [];
      for (let i = numN; i >= 1; i--) {
        const r = i * SD - numN;
        descendingRange.push(r);
      }

      // Output the resulting ranges
      console.log('Ascending Order Range:', ascendingRange);
      console.log('Descending Order Range:', descendingRange);

      // Close the readline interface
      rl.close();
    });
  });
});
