import { combineReducers } from 'redux';
import gsOutPutReducer from './gsOutputReducer';
const rootReducer = combineReducers({ gsoutput: gsOutPutReducer })

export default rootReducer;