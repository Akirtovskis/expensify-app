// OBJECT DESTRUCTURING

// const person = {
//   name:'Arturs',
//   age : 28,
//   location : {
//     city:'Riga',
//     temp : 23
//   }
// };
//
// const {name:firstName ='Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${age}.`);
//
// const {temp:temperature, city} = person.location;
//
// if(temperature && city){
//     console.log(`It's ${temperature} in ${city}`);
//   }
//
// const book = {
//   title:'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name:'Penguin'
//   }
// }
//
// const {name:publisherName = 'Self-Published'} = book.publisher
//
// console.log(publisherName); //Publisher or Self - Published

// ARRAY DESTRUCTURING


const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [,city , state='New York' ] = address
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (ice)', '$3.00', '$3.50', '$3.75'];
const [itemName, ,msize] = item
console.log(`A medium ${itemName} costs ${msize}`);
