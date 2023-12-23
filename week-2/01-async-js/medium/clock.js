// Clock using setInterval

setInterval(() => {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours() <= 12 ? "AM" : "PM"}`)
}, 1000)

// Clock using setTimeout

function timer() {
    const dt = new Date()
    console.log(`${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} ${dt.getHours() <= 12 ? "AM" : "PM"}`)
    setTimeout(timer, 1000)
}

timer()