/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function delayPromise(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}

function wait1(t) {
   return delayPromise(t)
}

function wait2(t) {
    return delayPromise(t)
}

function wait3(t) {
    return delayPromise(t)
}

function calculateTime(t1, t2, t3) {
    let time1 = new Date().getTime()

    const promises = [wait1(t1), wait2(t2), wait3(t3)]

    return Promise.all(promises)
    .then(() => {
        const endTime = new Date().getTime()
        return endTime - time1
    })
    .catch(err => console.error("One of the promises rejected", err))
}

console.log(calculateTime(1,2,3).then(res => console.log(res)))
module.exports = calculateTime;
