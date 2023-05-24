import * as at from './actionTypes'

// All the actions based on at Type

// Action creator for fetching all employees
export const fetchAllEmployees = (employees) => {
    return {
        type: at.FETCH_ALL_EMPLOYEES,
        payload: employees,
    };
};

// Action creator for fetching a single employee
export const fetchEmployee = (employee) => {
    return {
        type: at.FETCH_EMPLOYEE,
        payload: employee,
    };
};

// Action creator for fetching all tasks
export const fetchAllTasks = (tasks) => {
    return {
        type: at.FETCH_ALL_TASKS,
        payload: tasks,
    };
};

// Action creator for adding a task
export const addTask = (task) => {
    return {
        type: at.ADD_TASK,
        payload: task,
    };
};

// Action creator for deleting a task
export const deleteTask = (taskId) => {
    return {
        type: at.DELETE_TASK,
        payload: taskId,
    };
};

// Action creator for editing a task
export const editTask = (task) => {
    return {
        type: at.EDIT_TASK,
        payload: task,
    };
};


// Action creator for fetching a single task
export const fetchTask = (task) => {
    return {
        type: at.FETCH_TASK,
        payload: task,
    };
};