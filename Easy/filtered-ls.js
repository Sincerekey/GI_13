const fs = require('fs');
const path = require('path');


// Specify the directory path (change 'your_directory_path' to the actual path)
const directoryPath = process.argv[2];

// Read the contents of the directory asynchronously
fs.readdir(directoryPath, (err,files) => {

  // Print the list of files in the directory
  files.forEach((file, index,fileExt) => {
    fileExt = '.'+process.argv[3]
    if(fileExt == path.extname(file)){
    console.log(file);}
  });
});