//child_removed
database.ref('Expenses').on('child_removed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('Expenses').on('child_changed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('Expenses').on('child_added', (snapshot)=> {
  console.log(snapshot.key, snapshot.val());
});
// database.ref('Expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('Expenses').on('value', (snapshot)=>{
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=> {
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// })

database.ref('Expenses').push({
  description: 'Kafija',
  note: '',
  amount: 195,
  createdAt: 105943,
});

// database.ref('notes/-L9solkpV9J50gTv2FSu').remove();

// database.ref('notes').push({
//   title:'Course Topics',
//   body:'React Native, Angular, Python'
// });



// database.ref().on('value', (snapshot)=>{
//   const val = snapshot.val();
//   const {name} = val;
//   const {title, company} = val.job;
//   console.log(name + " is a " + title + " at " + company);
// });
//
// setTimeout(()=>{
//   database.ref('job/company').set('Netflix');
// }, 3500);
//
// setTimeout(()=>{
//   database.ref('job/company').set('Uber');
// }, 7000);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot)=> {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e)=> {
//     console.log('Error fetching data ', e);
//   });

// database.ref().set({
//   name : 'Arturs Kirtovskis',
//   age : 27,
//   stressLevel : 6,
//   job : {
//     title : 'Software Developer',
//     company : 'Google'
//   },
//   location : {
//     city : 'Riga',
//     country : 'Latvia'
//   }
// }).then(()=>{
//   console.log('Data is saved!');
// }).catch((e)=>{
//   console.log('This failed',e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company':'Amazon',
//   'location/city':'Seattle'
// });

// database.ref('isSingle').remove()
// .then(()=>{
//   console.log('isSingle removed');
// }).catch((e)=>{
//   console.log('Failed to remove because: ', e);
// });
