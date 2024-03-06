// setTimeout(() => console.log('Hi'), 2000)
// setTimeout(() => console.log('there!'), 2000)
// setTimeout(() => console.log('How'), 2000)
// setTimeout(() => console.log('are'), 2000)
// setTimeout(() => console.log('you?'), 2000)

// setTimeout(() => {
//     console.log('Hi')
//     setTimeout(() => {
//         console.log('there!')
//         setTimeout(() => {
//             console.log('How')
//             setTimeout(() => {
//                 console.log('are')
//                 setTimeout(() => {
//                     console.log('you?')
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

// const printAfterDelay = seconds => (message, callback) => {
//     setTimeout(() => {
//         console.log(message)
//         if (callback) callback()
//     }, seconds * 1000)
// }

// const printAfter1s = printAfterDelay(1)

// printAfter1s('Hi', () =>
//     printAfter1s('there!', () =>
//         printAfter1s('How', () =>
//             printAfter1s('are', () =>
//                 printAfter1s('you?')))))


//  const log = message => {
//      const promise = new Promise((resolve) => {
//          setTimeout(() => {
//              console.log(message),
//              resolve()
//          }, 1000)
//      })
//      return promise
//  }

// log('hi')
//     .then(() => log('there'))
//     .then(() => log('how'))
//     .then(() => log('are'))
//     .then(() => log('you?'))

// IIFE -- immediately invoked function expression

const https = require('https')

const getDataFromUrl = async (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, response => {
            let body = ''
            response.on('data', data => body += data.toString())
            response.on('end', () => resolve(JSON.parse(body)))
            response.on('error', reject)
        })
    })
}

(async() => {

    const url = 'https://swapi.dev/api/people/3'
    const swData = await getDataFromUrl(url)
    console.log(swData)

})()