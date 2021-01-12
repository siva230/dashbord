import {createStore,applyMiddleware,combineReducer} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers'

const store = createStore(loginReducer,applyMiddleware(thunk));

export default store