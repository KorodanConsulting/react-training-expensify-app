import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

//should return 0 if no expenses
test('expense total should return 0', () => {
	const res = selectExpensesTotal([]);
	expect(res).toBe(0);
});

//should correctly add up a single expense
test('expense total should be correct with one expense', () => {
	const total = 195;

	const res = selectExpensesTotal([expenses[0]]);
	expect(res).toBe(total);
});
//should correctly add up multiple expenses
test('expense total should be correct with a single expense', () => {
	const total = 114195;

	const res = selectExpensesTotal(expenses);
	expect(res).toBe(114195);
});