import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up removeExpense action object',()=>{
  const action = removeExpense({id : '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should set up editExpense action object',()=>{
  const action = editExpense('yo',{note:'hello'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id:'yo',
    updates: {
      note:'hello'
    }
  });
});

test('should setup add expense action object with provided values',()=>{
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt:1000,
    note:'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id:expect.any(String)
    }
  })
});

test('should setup add expense action object with default value',()=>{
  const action =addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      id:expect.any(String),
      description: '',
      amount: 0,
      createdAt:0,
      note:'',

    }
  })
});
