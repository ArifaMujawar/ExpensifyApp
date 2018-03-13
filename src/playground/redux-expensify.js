import { createStore, combineReducers } from  'redux';

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer =( state = expensesReducerDefaultState, action) => {
     
    switch( action.type){
        default: 
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate:undefined,
    endDate: undefined
};

//Filters Reducer
const filtersReducer = (state= filtersReducerDefaultState, action) => {
    switch( action.type){
        default: 
            return state;

    }

};

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses : [{
        id: 'shdsjkhcsjkhcks',
        description: 'Jan rent',
        note: 'thjisa aedw admkja ',
        amount : 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy:'amount', //date or amount
        startDate: undefined,
        endDate: undefined

    }
};