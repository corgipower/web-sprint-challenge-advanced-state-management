
export const initialState = []

export const START_POSTING_SMURF = "START_POSTING_SMURF";
export const SUCCESS_POSTING_SMURF = "SUCCESS_POSTING_SMURF";
export const ERROR_POSTING_SMURF = "ERROR_POSPostSING_SMURF";

export const postSmurfs = (state = initialState, action) => {
    switch(action.type) {
        case START_POSTING_SMURF:
            return {
                ...state
            };
        case SUCCESS_POSTING_SMURF:
            return {
                ...state,
                state: action.payload,
            }
        case ERROR_POSTING_SMURF:
            return {
                ...state,
            }
        default:
            return state;
    }
}