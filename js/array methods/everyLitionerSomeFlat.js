// practice question 1
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const hae = numbers.some(item=>item>5)
    console.log(hae);

// practice question 2
    const arr = [25, 30, 35, 40, 45, 50];
    const arr2 =[ 10, 15, 20, 25, 30, 35, 40, 45,47, 50];
    const ans = arr.every(item=> item%5===0)
    const ans2 = arr2.every(item=> item%5===0)
    console.log("ans1:", ans);
    console.log("ans2:", ans2);

// practice question 3
    const name = ['Tom', 'Harry', 'Hasan', 'Sam', 'Sakib', 'Shakib'];
    const result = name.some(item=>item=='Hasan');
    console.log(result);

// practice question 4
    const age =  [18, 20, 22, 24, 26, 28, 30];
    const age2 = [17, 19, 21, 23, 25, 27, 29];
    const a1 = age.every(item=>item>=18)
    const a2 = age2.every(item=>item>=18)
    console.log("Age array 1:", a1);
    console.log("Age array 2:", a2);