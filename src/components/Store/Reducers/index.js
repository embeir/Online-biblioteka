import logged from './auth';
import procitano from './procitano';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    logged: logged,
    procitano: procitano
});


export default rootReducer;