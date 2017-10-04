import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set up default state', () => {
	const state = expensesReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove exponeses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: -1
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

//should add an expense
test('should add expense to expeneses array', () => {
	const expense = {
		id: '4',
		description: 'Gas',
		note: '',
		createdAt: 20000,
		amount: 295
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

//should edit expense when id exits
test('should edit expense by id', () => {
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].amount).toBe(amount);
});

// should not edit when not exits
test('should not edit expense by id if invald ID is given', () => {
	const amount = 122000;
	const action = {
		type: 'EDIT_EXPENSE',
		id: -1,
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});