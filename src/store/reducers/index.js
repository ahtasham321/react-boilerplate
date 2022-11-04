// Root Reducer

import { combineReducers } from 'redux';
import authUserReducer from './authUser';
import movieReducer from './movieReducer';

export let rootReducer = combineReducers({
	authUser: authUserReducer,
	movie: movieReducer,
});

export default rootReducer;
