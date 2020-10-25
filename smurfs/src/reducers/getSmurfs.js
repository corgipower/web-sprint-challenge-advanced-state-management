export const initialState = [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ];

export const START_GETTING_SMURF = "START_GETTING_SMURF";
export const SUCCESS_GETTING_SMURF = "SUCCESS_GETTING_SMURF";
export const ERROR_GETTING_SMURF = "ERROR_GETTING_SMURF";

export const getSmurfs = (state = initialState, action) => {
    switch(action.type) {
        case START_GETTING_SMURF:
            return {
                ...state,
            };
        case SUCCESS_GETTING_SMURF: 
        console.log(action.payload)
            return action.payload.map(el => {
                return {
                    name: el.name,
                    age: el.age,
                    height: el.height,
                    id: el.id
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