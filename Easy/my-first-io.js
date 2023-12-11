const fs = require('fs');

// Get the file path from command-line arguments
const filePath = process.argv[2];

// Read the file synchronously
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Split the content based on newline character
const lines = fileContent.split('\n');

// Count the number of lines
const numberOfLines = lines.length - 1; // Subtract 1 to exclude the last empty line

// Print the result
console.log(numberOfLines);