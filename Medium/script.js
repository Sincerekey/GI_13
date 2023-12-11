const fs = require('fs')
const planetsBuffer = fs.readFileSync('Planets.txt', 'utf-8'); // Read data from the file
console.log(planetsBuffer)