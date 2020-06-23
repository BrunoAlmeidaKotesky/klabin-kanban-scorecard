import { scorecardReducer } from './reducers/scorecardReducer';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxImmutableStateInvariant from  'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import {toastsReducer as toasts} from 'react-toastify-redux';
import { IStore } from '../models/interfaces/IStore';

//Boilerplate de configurações do Redux, abaixo habilita a extensão redux dev tools
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const initialState:IStore = {data: []};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    scorecardReducer,
    toasts
});

export type RootState = ReturnType<typeof rootReducer>;

function configureStore(){
    return createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant(), thunkMiddleware)));
}

let store = configureStore;
export default store;