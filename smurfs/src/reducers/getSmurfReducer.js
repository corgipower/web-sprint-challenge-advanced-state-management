export const initialState = [{
    name: "",
    age: "",
    height: "",
    id: "",
}]

export const START_GETTING_SMURF = "START_GETTING_SMURF";
export const SUCCESS_GETTING_SMURF = "SUCCESS_GETTING_SMURF";
export const ERROR_GETTING_SMURF = "ERROR_GETTING_SMURF";

export const getSmurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_GETTING_SMURF:
            return {
                ...state,
            };
        case SUCCESS_GETTING_SMURF: 
        console.log(action.payload)
            return action.payload.map(e => {
                return {
                    name: e.name,
                    age: e.age,
                    height: e.height,
                    id: e.id
                }
            });
        case ERROR_GETTING_SMURF:
            return {
                ...state,
            }
        default:
            return state;
    }
}