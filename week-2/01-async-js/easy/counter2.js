// Implementing a counter using setTimeout

let count = 0;
function increment() {
    count++;
    console.log(count);
    setTimeout(increment, 1000)
}

increment()
console.log("Logged After Increment")
let sum = 0;
for(let i = 0; i < 10000000000; i++) {
    sum = sum + i;
}
console.assert(sum)