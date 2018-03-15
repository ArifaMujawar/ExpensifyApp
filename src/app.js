

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

store.dispatch(addExpense({description:'Water bill', amount:500, createdAt:34000}));
store.dispatch(addExpense({description:'Gas Bill', createdAt:230909, amount:290}));

store.dispatch(setTextFilter('water'));
setTimeout(()=>{
    store.dispatch(setTextFilter('bill'));
},2000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store ={store}>
    <AppRouter />
    </Provider >
);



ReactDOM.render(jsx, document.getElementById('app'));

