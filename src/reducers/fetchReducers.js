/**
 * Created by rpowar on 8/11/18.
 */
import {FETCH_DATA} from '../actions/types';

const initialState = {
    data: []

};
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return Object.assign({}, {data: action.payload});
        default:
            return state
    }
}