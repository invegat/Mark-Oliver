import { combineReducers } from 'redux';
import gsinputReducer from './gsinputReducer';
const rootReducer = combineReducers({ gsinput: gsinputReducer })

export default rootReducer;