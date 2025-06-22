// practice question 1
    const name = ['Tom', 'Harry', 'Hasan', 'Sam', 'Sakib', 'Shakib'];
    name.reverse()
    console.log(name);

// practice question emnitei
    const names = ['Tom', 'Harry', 'Hasan', 'Sam', 'Sakib', 'Shakib'];
    const reversedNames = names.map(item => item.split('').reverse().join(''));
    //we need to split each name into characters, reverse the characters, and then join them back together, otherwise it will not work
    //map is used to apply the function to each element in the array
    console.log(reversedNames);

// practice question 2
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const ans = numbers.reverse()
    console.log(ans);

// practice question 3
const users = [
    { name: 'Tom', age: 25 },
    { name: 'Harry', age: 30 },
    { name: 'Hasan', age: 22 },
    { name: 'Sam', age: 28 },
    { name: 'Sakib', age: 35 },
    { name: 'Shakib', age: 27 }
]
const reversedUsers = users.map(user=>{
    return {
        name:user.name.split('').reverse().join(''),
        age: user.age
    }
})
console.log(reversedUsers);
console.log(users.reverse());

const answer = users.map(user => `${user.name},${user.age}`.split(',').reverse().join(','));
console.log(answer);