import { combineReducers } from "redux";
import userReducer from './reducers';

const rootReducer = combineReducers({
  data: userReducer,
})

export default rootReducer;