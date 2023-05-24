import * as ac from './actions/actionCreators';
const axios = require('axios');

// Localhost server path
let path = "http://localhost:5001/api";

// Thunks

// Fetch all employees from the server
export const fetchAllEmployeesThunk = () => async (dispatch) => {
    try {
        let response = await axios.get(`${path}/employees`);
        dispatch(ac.fetchAllEmployees(response.data)); // Dispatch action to store the retrieved employees
    } catch (err) {
        console.error(err);
    }
};

// Fetch a single employee by ID from the server
export const fetchEmployeeThunk = (id) => async (dispatch) => {
    try {
        let response = await axios.get(`${path}/employees/${id}`);
        dispatch(ac.fetchEmployee(response.data)); // Dispatch action to store the retrieved employee
    } catch (err) {
        console.error(err);
    }
}

// Fetch all tasks from the server
export const fetchAllTasksThunk = () => async (dispatch) => {
    try {
        let response = await axios.get(`${path}/tasks`);
        dispatch(ac.fetchAllTasks(response.data)); // Dispatch action to store the retrieved tasks
    } catch (err) {
        console.error(err);
    }
};

// Add a new task to the server
export const addTaskThunk = (task) => async (dispatch) => {
    try {
        let response = await axios.post(`${path}/tasks`, task);
        dispatch(ac.addTask(response.data)); // Dispatch action to add the new task
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

// Delete a task from the server by ID
export const deleteTaskThunk = (taskId) => async (dispatch) => {
    try {
        await axios.delete(`${path}/tasks/${taskId}`);
        dispatch(ac.deleteTask(taskId)); // Dispatch action to delete the task
    } catch (err) {
        console.error(err);
    }
};

// Edit a task on the server
export const editTaskThunk = (task) => async (dispatch) => {
    try {
        let response = await axios.put(`${path}/tasks/${task.id}`, task);
        dispatch(ac.editTask(response.data)); // Dispatch action to update the task
    } catch (err) {
        console.error(err);
    }
};

// Fetch a single task by ID from the server
export const fetchTaskThunk = (id) => async (dispatch) => {
    try {
        let response = await axios.get(`${path}/tasks/${id}`);
        dispatch(ac.fetchTask(response.data)); // Dispatch action to store the retrieved task
    } catch (err) {
        console.error(err);
    }
};
