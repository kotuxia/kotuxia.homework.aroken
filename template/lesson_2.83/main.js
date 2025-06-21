// 1.

// const myProfile = {
//     firstName: 'Kate',
//     lastName: 'Kulyak',
//     age: 20,
//     favoriteColor: 'sky blue'
// }

// console.log(myProfile.favoriteColor)

// 2.

// const myProfile = {
//     firstName: 'Kate',
//     lastName: 'Kulyak',
//     age: 20,
//     favoriteColor: 'sky blue',
//     sayHello(name) {
//         console.log(`Hello, ${name}`)
//     }
// }

// myProfile.sayHello('Albert')

// 3.


// Я не знаю ваши возраста, извиняюсь за рандом. Надеюсь я собрала всех кураторов (ну и Максима, конечно же))
const arokenUsers = [
    {
        name: 'Vitaliy',
        age: 24,
        isAdmin: false
    },
    {
        name: 'Svatoslav',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Maksim',
        age: 25,
        isAdmin: true
    },
    {
        name: 'Albert',
        age: 22,
        isAdmin: false
    },
    {
        name: 'Ilya',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Daniil',
        age: 27,
        isAdmin: false
    },
]

let users = 0;

for (let i = 0; i < arokenUsers.length; i++) {
    if (arokenUsers[i].isAdmin === false) {
        users++
    }
}

console.log(users)