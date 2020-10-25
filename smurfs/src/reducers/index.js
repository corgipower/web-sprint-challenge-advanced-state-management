import { combineReducers } from "redux";
import {getSmurfs} from './getSmurfs';
import {postSmurfs} from './postSmurfs'

export const rootReducer = combineReducers({
    getSmurfs,
    postSmurfs,
});