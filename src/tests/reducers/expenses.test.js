import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id : expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id : '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//ADD expense
test('should add expense', () => {
  const expense = {
    id:'109',
    description:'Laptop',
    note:'',
    createdAt:20000,
    amount:29500
  };
  const action = {
    type:'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    expense
  ]);
});

//EDIT expense
test('should edit expense', () => {
  const amount = 122000;
  const action = {
    type:'EDIT_EXPENSE',
    id:expenses[1].id,
    updates:{
      amount
    }
  }
  const state= expensesReducer(expenses, action);
  expect(state[1].amount).toBe(122000);
});
//EDIT when id not exist
test('should leave array the same when trying to edit nonexistant id', ()=> {
  const amount = 122000;
  const action = {
    type:'EDIT_EXPENSE',
    id:'-1',
    updates:{
      amount
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//SET EXPENSES

test('should set expenses', ()=>{
  const action = {
    type:'SET_EXPENSES',
    expenses:[expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
