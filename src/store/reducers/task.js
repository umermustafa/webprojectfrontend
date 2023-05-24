import { FETCH_TASK } from "../actions/actionTypes";

const initialState = {
    employee: {},
}

// Reducer for managing the state of a single task
const task = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASK:
            return action.payload; // Update the state with the fetched task
        default:
            return state; // Return the current state by default
    }
};

export default task;
