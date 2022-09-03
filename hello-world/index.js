import _ from "lodash";

//const user = { name: 'Vasya', married: true, age: 25 };
//console.log("Исходное значение user");
//console.log(user);

//user.married = false;
//user.surname = 'Petrov';
//user.age = 40;

//console.log("Модифицированное значение user");
//console.log(user);

//const filepath = '/path/to/index.js';

//const getFileInfo = (filepath) => {
//    const parts = filepath.split('/');
//    const filename = _.last(parts); 
//    const extension = _.last(filename.split('.'));
  
    // В значения вместо переменных подставятся нужные значения
 //   const info = { filename: filename, extension: extension };
  
 //   return info;
 // }

//  const average = (...params) => {
//    if(params.length === 0) return null;
//    let avg = 0;
//    avg = _.sum(params)/params.length;
//    return avg;

 // }

//  const convert = (...dates) => {
//   const convertedDates = []; 
//   for (let date of dates) {
//   convertedDates.push(new Date(...date).toDateString());
//   }
//    return convertedDates;
//  }

  //console.log(average());
  //console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]));

//   const users = [
//     { name: 'Tirion', birthday: 'Nov 19, 1988' },
//     { name: 'Sam', birthday: 'Nov 22, 1999' },
//     { name: 'Rob', birthday: 'Jan 11, 1975' },
//     { name: 'Sansa', birthday: 'Mar 20, 2001' },
//     { name: 'Tisha', birthday: 'Feb 27, 1992' },
//     { name: 'Chris', birthday: 'Dec 25, 1995' },
// ];

// const takeOldest = (people,numViewOut = 1) => {
  
//   for(let peopl of people)
//   {
//     console.log(peopl);
//     peopl.birthday = Date.parse(peopl.birthday);
//     console.log(peopl);    
//   }  
//   people.sort((a, b) => {
//     if (a.age === b.age) {
//       return 0;
//     }
//     return a.age > b.age ? 1 : -1;
//   }
//   )  
//   console.log(_.sortBy(people, [function(o) { return o.birthday; }]));
//   return _.sortBy(people, [function(o) { return o.birthday; }]).slice(0,numViewOut);
// }

// console.log(takeOldest(users,2));

// const users = [
//   {
//     name: 'Tirion',
//     children: [
//       { name: 'Mira', birthday: '1983-03-23' },
//     ],
//   },
//   { name: 'Bronn', children: [] },
//   {
//     name: 'Sam',
//     children: [
//       { name: 'Aria', birthday: '2012-11-03' },
//       { name: 'Keit', birthday: '1933-05-14' },
//     ],
//   },
//   {
//     name: 'Rob',
//     children: [
//       { name: 'Tisha', birthday: '2012-11-03' },
//     ],
//   },
// ];

// const users = [
//   {
//     name: 'Tirion',
//     friends: [
//       { name: 'Mira', gender: 'female' },
//       { name: 'Ramsey', gender: 'male' },
//     ],
//   },
//   { name: 'Bronn', friends: [] },
//   {
//     name: 'Sam',
//     friends: [
//       { name: 'Aria', gender: 'female' },
//       { name: 'Keit', gender: 'female' },
//     ],
//   },
//   {
//     name: 'Rob',
//     friends: [
//       { name: 'Taywin', gender: 'male' },
//     ],
//   },
// ];
 
// const getGirlFriends = (people) =>{
//   const friends  = (people.map((peopl)=> peopl.friends)).flat();
//   const filteredFriends = friends.filter((friend) => friend.gender === 'female');
//   return filteredFriends;
// };

// const getChildren = (people) => {

//   const child  = (people.map((peopl)=> peopl.children)).flat();
//   return child;
// }

// console.log(getGirlFriends(users));

// const users = [
//   { name: 'Petr', age: 4 },
//   { name: 'Igor', age: 19 },
//   { name: 'Vovan', age: 4 },
//   { name: 'Matvey', age: 16 },
// ];

// const summAge = (people) => {
  
//   const summ = people.reduce(((accum, peopl) => accum + peopl.age),0);
//   return summ;
// }

// console.log(summAge(users));

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

const groupName = (acc, item) => {
  if (!_.has(acc, item.name)) {
    acc[item.name] = [];
  }
  acc[item.name].push(item);
  return acc; 
};
const groupClass = (acc, item) => {
  if (!_.has(acc, item.class)) {
    acc[item.class] = [];
  }
  acc[item.class].push(item);
  return acc; 
};
const groupMark = (acc, item) => {
  if (!_.has(acc, item.mark)) {
    acc[item.mark] = [];
  }
  acc[item.mark].push(item);
  return acc; 
};

const myGroupBy = (arr, property) => {
switch (property){
  case 'name':
    return arr.reduce(groupName, {});    
  case 'class':
    return arr.reduce(groupClass, {});
  case 'mark':
    return arr.reduce(groupMark, {});
  default:
    return {}; 
}
}

console.log(myGroupBy(students, 'mark'));