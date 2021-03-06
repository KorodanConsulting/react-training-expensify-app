import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

// should render ExpenseFrom with expense data
test('should render ExpenseForm correctly with expense data', () => {
	const wrapper = shallow(<ExpenseForm expenses={expenses[1]}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', {
		preventDefault: () => { }
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'New description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
	const value = 'New note value';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('note')).toBe(value);
});

//should set amount if valid input
// 23.50
test('should set amount on input area change', () => {
	const value = '23.50';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('amount')).toBe(value);
});

//should not set amount if invalid input
//12.122
test('should set amount on input area change', () => {
	const value = '12.122';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn(); //creating new spy with a brand new set of assertions
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
		wrapper.find('form').simulate('submit', {
		preventDefault: () => { }
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt
	});
});
//test date change
test('should set new date on date change', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange')(now)
	expect(wrapper.state('createdAt')).toEqual(now);
});
//test on fucsed change
test('should set calendar on fucsed change', () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
	expect(wrapper.state('calandarFocused')).toEqual(focused);
});





























