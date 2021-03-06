import { combineReducers } from 'redux';
import SubwayReducer from './subway/reducer';

const rootReducer = combineReducers({
  subway: SubwayReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
