// const obj1 = {
//     id : 33,
//     firstname : 'heydar',
//     lastname : 'valiyev',
//     age : 23,
//     adress: {
//         street : 'Razin',
//         city :'Baku',
    
//     },
//     position:'Sabunchu',
//     info : {
//         qualification : '123hesoyam',
//         isAdmin : 'True',
//     }
// }

// obj1.firstname = 'rafig'
// obj1.lastname = 'mammadzade'
// obj1.adress.city = 'vasmoy'
// obj1.adress.street = 'sedmoy'
// obj1.age = 20
// obj1.info.isAdmin = 'yaxchi qaqasimizdi'
// obj1.info.qualification = '666'
// obj1.position = '8 ci MK'
// delete obj1.adress.street

// console.log(obj1);
// console.log(obj1.firstname);
// console.log(obj1.lastname);
// console.log(obj1.age);
// console.log(obj1.adress.street);
// console.log(obj1.adress.city);
// console.log(obj1.position);
// console.log(obj1.info.isAdmin);
// console.log(obj1.info.qualification);
// console.log(obj1.id * obj1.age);
// console.log(obj1.id + obj1.age);

// const arr1 =['heydar', 23, undefined, null, 55565n, true]
// console.log(arr1[1]);
// console.log(arr1[arr1.length-2]);
// console.log(arr1.at(1));
// console.log(arr1.at(-2));


// const data = [23, false, ]
// data.push(47867n, 'heyder' , undefined , 898, 'oracle')
// data.unshift(true, null, 'cracking', 9990078n)
// console.log(data)
// data.shift(null)
// console.log(data);

const students = [
    {
        id : 1,
        age : 232,
        name : 'heyder',
        surname : 'veliyev'
    },
    {
        id : 2,
        age : 242,
        name : 'heyder',
        surname : 'qarayev'
    }
    
]
// students.map((item,index) =>console.log(item))
// students.map((item,index) =>console.log(item.name))
// students.map((item,index) =>console.log(item.surname))
// students.map((item,index) =>console.log(index))
// students.map((item,index) =>console.log(item.age+item.id))
// students.map((item,index) =>console.log(index+item.id))

// const result = students.filter(item => item.age > 22 && item.age <26)
// console.log(result);

// let sum = 1
// const result = students.map((item) => sum += item.age)
// const result = students.map((item) => sum = sum + item.age)
// console.log(result);
// console.log(sum);


// const result = students.map((item) => sum *= item.age) 
// console.log(sum);


// const result = students.findLast(item => item.name === 'heyder')
// console.log(result);