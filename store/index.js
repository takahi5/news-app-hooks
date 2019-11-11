import { createStore, combineReducers } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import userReducer from './reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
