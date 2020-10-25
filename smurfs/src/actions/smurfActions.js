import { START_GETTING_SMURF, SUCCESS_GETTING_SMURF, ERROR_GETTING_SMURF } from "../reducers/getSmurfs"
import Axios from "axios";
import { START_POSTING_SMURF, SUCCESS_POSTING_SMURF, ERROR_POSTING_SMURF } from "../reducers/postSmurfs";

export const getSmurfs = () => (dispatch) => {
    dispatch({type: START_GETTING_SMURF});
    Axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({
                type: SUCCESS_GETTING_SMURF,
                payload: res.data,
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR_GETTING_SMURF,
            });
            console.log(err);
        });
}

export const postSmurfs = (smurf) => (dispatch) => {
    dispatch({type: START_POSTING_SMURF});
    Axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({
                type: SUCCESS_POSTING_SMURF,
                payload: res.data,
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR_POSTING_SMURF,
            })
        })
}