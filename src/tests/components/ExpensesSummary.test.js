import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render ExpensesSummary correctly with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary correctly with 1 expense', () => {
  const wrapper= shallow(<ExpensesSummary expenseCount={1} expensesTotal={125}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseSummary correctly with multiple expenses', () => {
  const wrapper= shallow(<ExpensesSummary expenseCount={3} expensesTotal={5000}/>);
  expect(wrapper).toMatchSnapshot();
});
