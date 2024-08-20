let BASE_URL = "http://numbersapi.com"

// 1.

let fav_num = 7
$.get(`${BASE_URL}/${fav_num}/?json`)
.then(data => {console.log(data)})

// 2.

let fav_nums = [1,2,3]
$.get(`${BASE_URL}/${fav_nums}?json`)
.then(data => {console.log(data)})

// 3.

Promise.all(
    Array.from({length:4}, () => {
        return $.get(`${BASE_URL}/${fav_num}`)
    })
).then(facts => {facts.forEach(data => $('body').append(`<p>${data}</p>`))})