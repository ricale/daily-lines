import { combineReducers } from 'redux';

import writingsReducer from './writings/reducer';

const rootReducer = combineReducers({
    writings: writingsReducer,
});

export default rootReducer;
