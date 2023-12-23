// const users = [
//     {
//         id : 1,
//         name : 'heyder',
//         surname : 'valiyev',
//         age : 23,
//         adress : {
//             street : 'razin',
//             city : 'baku',
//             country : 'azerbaijan',
//         }
//     },
//     {
//         id : 2,
//         name : 'matin',
//         surname : 'qurbanov',
//         age : 43,
//         adress : {
//             street : 'kruq',
//             city : 'baku',
//             country : 'aze',
//         }
//     },
//     {
//         id : 3,
//         name : 'haci',
//         surname : 'esgerov',
//         age : 26,
//         adress : {
//             street : 'razin',
//             city : 'baku',
//             country : 'azerbaijan',
//         }
//     },    
//     {
//         id : 4,
//         name : 'eli',
//         surname : 'aliyev',
//         age : 23,
//         adress : {
//             street : 'sabunchu',
//             city : 'baku',
//             country : 'aze',
//         }
//     },    
//     {
//         id : 5,
//         name : 'ceyhun',
//         surname : 'sadiqli',
//         age : 53,
//         adress : {
//             street : 'razin',
//             city : 'baku',
//             country : 'azer',
//         }
//     },    
//     {
//         id : 6,
//         name : 'huseyn',
//         surname : 'vali',
//         age : 83,
//         adress : {
//             street : 'razinnech',
//             city : 'baku',
//             country : 'azerbn',
//         }
//     },    
//     {
//         id : 7,
//         name : 'hecer',
//         surname : 'valiyeva',
//         age : 20,
//         adress : {
//             street : 'razin',
//             city : 'baku',
//             country : 'azerbaijan',
//         }
//     },    
//     {
//         id : 8,
//         name : 'hafiz',
//         surname : 'valeovv',
//         age : 23,
//         adress : {
//             street : 'rin',
//             city : 'sumqayit',
//             country : 'azejan',
//         }
//     },    
//     {
//         id : 9,
//         name : 'azer',
//         surname : 'vadatov',
//         age : 29,
//         adress : {
//             street : 'sedmoy',
//             city : 'seki',
//             country : 'azeran',
//         }
//     },
//     {
//         id : 10,
//         name : 'abbas',
//         surname : 'abbasov',
//         age : 33,
//         adress : {
//             street : 'netciler',
//             city : 'semkir',
//             country : 'azerbaijan',
//         }
//     }
// ]
// //2
// const result = users.reduce((acc,item,index) => acc + index ,0)
// console.log(result);

// //3
// const result2 =users.sort((a,b) => a.age - b.age)
// console.log(result2);

// //4
// const result3 =users.sort((a, b) => a.adress.street.localeCompare(b.adress.street))
// console.log(result3);

// //5
// const answer =users.reverse()
// console.log(answer);

// //6
// const answer2 =users.filter((item,index) => item.name.length >=6)
// console.log(answer2);

// //7
// const son = users.find((item,index) => item.age >25)
// console.log(son);

// //8
// const son1 = users.map((name =>'myAge ' + name.age))
// console.log(son1);


// let user = 'heyder'
// console.log(user.slice(0,5).toLocaleLowerCase() + user.slice(-1).toLocaleUpperCase());
// const cavab = user.slice(1).toLocaleUpperCase() + user.slice(15).toLocaleUpperCase()
// console.log(cavab);
// const cavab2 = user.slice(0,2).toLocaleLowerCase() + user.slice(2,3).toLocaleUpperCase() + user.slice(3,6).toLocaleLowerCase()
// console.log(cavab2);

// let ad = 'heyder veliyev'
// const cvb = ad.slice(0,1).toUpperCase() + ad.slice(1,7).toLowerCase() + ad.slice(7,8).toUpperCase() + ad.slice(8).toLowerCase()
// console.log(cvb);
// const cvb2 = ad.slice(0,7).toLowerCase() + ad.slice(7,14).toUpperCase(0)
// console.log(cvb2);

// let user = 'nicat qasimov'
// const result1 = user.split('i')
// console.log(result1);
// const result2 = user.split(',')
// console.log(result2);
// const result3 = user.split('')
// console.log(result3);
// const result4 = user.split(' ')
// console.log(result4);

// const studentsArr = ['Yusif', 'Reshad', 'Nihad', 'Nezire', 'Metin', 'Heyder', 'Rafiq', 'Eli', 'Nizam', 'Xeyale', 'Abbas', 'Anar', 'Ulfat']
// console.log(`user: ${studentsArr}`);
// const studentsText = studentsArr.join(' ')
// console.log(studentsText);