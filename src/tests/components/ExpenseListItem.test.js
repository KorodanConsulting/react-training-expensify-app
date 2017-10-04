import React from 'react';
import { shallow } from 'enzyme';
import ExponseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should redner ExpenseListItem correctly', () => {
	// const expense = expenses[1];
	const wrapper = shallow(<ExponseListItem {...expenses[0]}/>);
	expect(wrapper).toMatchSnapshot();
}); 
