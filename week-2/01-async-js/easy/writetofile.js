// Writing to file using fs

const { log } = require('console')
const fs = require('fs')

const content = "Hello There! Writing some stuff in 4-write-to-file.md"
const filePath = "4-write-to-file.md"

let originalContent = ""
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        throw new Error(err)
    }
    originalContent = data;
    log(originalContent)
})

// fs.writeFile(filePath, content, (err) => {
//     if (err) {
//         console.error("Error writing to file:",err)
//     }
//     else {
//         log("Successfully wrote to file: ", filePath)
//     }
// })
setTimeout(() => console.log(originalContent), 1000)
// Write File removes all existing content and puts the new content