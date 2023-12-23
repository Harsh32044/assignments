// Removing extra empty spaces from text
// Step1 - Get the data from file
// Step2 - Remove extra white spaces and write back to the same file

const fs = require("fs")
const filePath = "newFile.txt"

let originalContent = fs.readFileSync(filePath, "utf-8")

originalContent = originalContent.toString().trim().split(" ").filter(e => e != '').join(" ")

fs.writeFile(filePath, originalContent, (err) => {
    if (err) {
        console.error(err)
    }
    else {
     console.log("Writing to file successfull")  
    }
})