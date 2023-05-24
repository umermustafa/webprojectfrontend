import * as at from "../actions/actionTypes";

// Reducer for managing the state of all tasks
const allTasks = (state = [], action) => {
    switch (action.type) {
        case at.FETCH_ALL_TASKS:
            return action.payload; // Update the state with the fetched tasks
        case at.ADD_TASK:
            return [...state, action.payload]; // Add the new task to the state
        case at.DELETE_TASK:
            return state.filter(task => task.id !== action.payload); // Remove the deleted task from the state
        case at.EDIT_TASK:
            return state.map(task => {
                return (
                    task.id === action.payload.id ? action.payload : task // Update the edited task in the state
                );
            });
        default:
            return state; // Return the current state by default
    }
};

export default allTasks;
