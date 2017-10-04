import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => {
	return {
		type:'INCREMENT',
		incrementBy
	};
};

const decrementCount = ({decrementBy = 1} = {}) => {
	return {
		type:'DECREMENT',
		decrementBy
	};
};

const setCount = ({count}) => {
	return {
		type:'SET',
		count
	};
};

const resetCount = () => {
	return {
		type:'RESET'
	};
};

// Reducers
// 1. Reducers are pure functions - output only determined by input (if you are interacting out side score then it's not pure)
// 2. Never change state or action (reassigning or mutating)

const countReducer = store = createStore((state = {count:0}, action) =>  {
	switch (action.type){
		case 'INCREMENT': 
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return {
				count: state.count + incrementBy
			};
		case 'DECREMENT': 
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				count: state.count - decrementBy
			};
		case 'SET': 
			return {
				count: action.count
			};
		case 'RESET': 
			return {
				count: 0
			};
		default: 
			return state;
	}
};



const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

const store = createStore(countReducer);


// Action - an object that gets sent to the store
// walk, stop_walking, sit , work, stop_working

// increment, decrement, reset

// increment the count

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 16230}));


