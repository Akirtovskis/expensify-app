import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render ExpensesSummary correctly with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary correctly with 1 expense', () => {
  const wrapper= shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseSummary correctly with multiple expenses', () => {
  const wrapper= shallow(<ExpensesSummary expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});
