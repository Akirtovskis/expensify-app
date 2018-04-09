import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('Should render expense dashboard', () => {
  const wrapper = shallow(<ExpenseDashboardPage/>);
  expect(wrapper).toMatchSnapshot();
});
