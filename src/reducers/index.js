/**
 * Created by rpowar on 8/11/18.
 */
import { combineReducers } from  'redux';
import fetchReducer from './fetchReducers'

export default combineReducers({
    data: fetchReducer
})