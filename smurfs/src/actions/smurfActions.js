import { START_GETTING_SMURF, SUCCESS_GETTING_SMURF, ERROR_GETTING_SMURF } from "../reducers/getSmurfReducer"
import Axios from "axios";

export const getSmurfs = () => (dispatch) => {
    dispatch({type: START_GETTING_SMURF});
    Axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
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

export const postSmurfs = () => (dispatch) => {

}