import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should redner ExpensesSummary correctly with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2350} />);
	expect(wrapper).toMatchSnapshot();
}); 

test('should redner ExpensesSummary correctly with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235453444350} />);
	expect(wrapper).toMatchSnapshot();
});