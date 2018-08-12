/**
 * Created by rpowar on 8/11/18.
 */
import {FETCH_DATA} from './types';
import util from '../util/utilities';
import mockData from '../mockData';

export function fetchData() {
    return function(dispatch){
        //stub the mock data here
        let response = util.readApi(mockData);
        dispatch({
            type: FETCH_DATA,
            payload: response
        })
    }
}
