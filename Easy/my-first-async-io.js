// Import the 'fs' module for file system operations
const fs = require('fs');

// Get the file path from command-line arguments (assumes the file path is provided as the third argument)
const filePath = process.argv[2];

// Define a function to read the file asynchronously and execute a callback with the result
const getFileData = (callback) => {
  // Use 'fs.readFile' to read the file content asynchronously with 'utf-8' encoding
  fs.readFile(filePath, 'utf-8', (err, fileContent) => {
 

    // Split the content based on newline character, creating an array of lines
    const lines = fileContent.split('\n');

    // Count the number of lines (subtract 1 to exclude the last empty line)
    const numberOfLines = lines.length - 1;

    // Invoke the callback with the number of lines as an argument
    callback(numberOfLines);
  });
};

// Define a function to log the number of lines to the console
const logNumLines = (numberOfLines) => {
  console.log(numberOfLines);
};

// Call the 'getFileData' function, passing 'logNumLines' as the callback
getFileData(logNumLines);
