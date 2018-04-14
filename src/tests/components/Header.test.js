import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render header correctly', ()=> {
  const wrapper = shallow(<Header startLogout={()=>{}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should startLogout on button click', ()=> {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout}/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});

//should call startlogout on button onClick
//should call startlogin on button click
