import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type:'ADD_EXPENSE',
  expense : {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ({id}={}) => ({
  type:'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type:'EDIT_EXPENSE',
  id,
  updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type:'SET_TEXT_FILTER',
  text
})
//SORT_BY_DATE
const sortByDate = () => ({
  type:'SORT_BY_DATE',
});
//SORT_BY_AMOUNT
const sortByAmount = () =>({
  type:'SORT_BY_AMOUNT',
});
//SET_START_DATE
const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate
})
//SET_END_DATE
const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate
})
//Expense Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id!==action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id===action.id){
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
}

//Filters Reducer
const filterReducerDefaultState = {
  text:'',
  sortBy : 'date',
  startDate : undefined,
  endDate : undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text:action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy:'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy:'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate : action.startDate
            }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate : action.endDate
      }
    default:
      return state;
  }
}

//timestamps (miliseconds)
//January 1st 1970 (unix, epoch)
//33400, 10, -203

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !=='number'|| expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !=='number'|| expense.createdAt <= startDate;
    const textMatch = (expense.description).toLowerCase().includes(text.toLowerCase());

    return startDateMatch &&  endDateMatch  &&  textMatch;
  }).sort((a, b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortBy ==='amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

//Store Creation
const store = createStore(
  combineReducers({
    expenses : expensesReducer,
    filters : filterReducer,
  })
);

store.subscribe(()=>{
  const state = store.getState();
  const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(VisibleExpenses);
});

const expenseOne =store.dispatch(addExpense({ description:'Rent', amount:100, createdAt:-21000}));
const expenseTwo =store.dispatch(addExpense({ description:'Coffee', amount:300, createdAt:-1000}));
//
// store.dispatch(removeExpense({id : expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount());  //amount
// store.dispatch(sortByDate());   //date

// store.dispatch(setStartDate(0)); // start date 125
// store.dispatch(setStartDate());   // start date undefined
// store.dispatch(setEndDate(-1000)); // end date 1250



const demoState = {
  expenses : [{
    id:'4jsdfasdiu',
    description:'January Rent',
    note:'This was the final payment for that address',
    amount:54500,
    createdAt: 0
  }],
  filters : {
    text:'',
    sortBy:'amount', //Date or amount
    startDate : undefined,
    endDate: undefined,
  }
};


const user = {
  name : 'Jen',
  age : 24
}

// console.log({
//   ...user,
//   location:'Philadelphia',
//   age:27
// })
