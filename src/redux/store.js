import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import pessoaReducer from "./reducers/PessoaReducer";

const reducers = combineReducers({
    pessoaState: pessoaReducer
});

const localState = localStorage.getItem('applicationState')
 ? JSON.parse(localStorage.getItem('applicationState'))
 : {};

 const store = createStore(
    reducers,
    localState,
    applyMiddleware(thunk)
 );

 store.subscribe( function () {
    localStorage.setItem('applicationState', JSON.stringify(store.getState()));
});

export default store;