import { combineReducers } from "redux";
import {getSmurfReducer} from './getSmurfReducer';
import {postSmurfReducer} from './postSmurfReducer'

export const rootReducer = combineReducers({
    getSmurfReducer,
    postSmurfReducer,
});