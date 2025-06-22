//practice question 1
    const price = [30,45,20,60,10]
    const TeroTaka = price.map(item=> item+13)
    console.log(TeroTaka)

//practice question 2
    const footballer = ['Messi', 'Ronaldo', 'Neymar', 'Maradona', 'Salah','Pele']
    const fl = footballer.filter(item => item.length>5)
    console.log(fl)

//practice question 3
    const numbers = [10,15,20,25,30,35,40,45,50]
    const n20 = numbers.find(item=> item>20)
    console.log(n20)

//practice question 4
    const height = [65, 70, 68, 72, 68, 73]
    const h69 = height.filter(item => item>69)
    console.log(h69)

//practice question 5
    const nm = [7,10,15,20,25,30,35,40,45,50]
    const n3 = nm.map(item => (item / 3).toFixed(2))
    console.log(n3)

//practice question 6
    const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve','no']
    const f3 = friends.map(item => item[2])
    console.log(f3)

//practice question 7
    const name = ['Tom','Harry','Hasan','Sam','Sakib','Shakib']
    const me = name.find(item=> item[0]==='H')
    console.log(me)

//practice question 8
    const n2 = [2,4,6,8,10,12,14,16,18]
    n2.forEach(item=>console.log(item))

//practice question 9
const animals = ['Dog', 'Cat', 'Elephant', 'Lion', 'Tiger']
animals.forEach(item=>console.log(item))