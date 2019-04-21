import {combineReducers} from 'redux';

import tableReducer from './table';
import storageReducer from './storage';
import dataTreeReducer from './dataTree';

export default combineReducers({
    storage: storageReducer,
    table: tableReducer,
    dataTree: dataTreeReducer,
})
