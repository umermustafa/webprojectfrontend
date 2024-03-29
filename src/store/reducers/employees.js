import * as at from "../actions/actionTypes";

// Reducer

const allEmployees = (state = [], action) => {
    switch (action.type) {
        case at.FETCH_ALL_EMPLOYEES:
            return action.payload;
        default:
            return state;
    }
};

export default allEmployees;