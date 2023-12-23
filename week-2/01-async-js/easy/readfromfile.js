// Reading from a file

const fs = require('fs')

fs.readFile("3-read-from-file.md", "utf-8", (err, data) => {
    console.log(data)
})

let sum = 0;
for (let index = 0; index < 100000000000; index++) {
    sum = sum + index    
}

console.log(sum)