import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { MAX_NUMBER_OF_TASKS } from "./index";

const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_START = "FETCH_DATA_START";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
const ADD_TASKS = "ADD_TASKS";
const DELETE_TASK = "DELETE_TASK";
const CHANGE_TASK_TO_COMPLETED = "CHANGE_TASK_TO_COMPLETED";

const initialStoreState = {
  todos: [],
  isMaxNumberOfTasks: false,
  dataStatus: {
    isDataLoading: false,
    isDataLoaded: false,
    isDataError: false
  }
};

const todoAppReducer = (state = initialStoreState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        dataStatus: {
          isDataLoaded: true,
          isDataLoading: false,
          isDataError: false
        }
      };
    case FETCH_DATA_START:
      return {
        ...state,
        dataStatus: {
          isDataLoaded: false,
          isDataLoading: true,
          isDataError: false
        }
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        dataStatus: {
          isDataLoaded: false,
          isDataLoading: false,
          isDataError: true
        }
      };
    case ADD_TASKS:
      return {
        ...state,
        isMaxNumberOfTasks:
          state.todos.length + action.payload.length >= MAX_NUMBER_OF_TASKS,
        todos: [...action.payload, ...state.todos]
      };
    case DELETE_TASK:
      return {
        ...state,
        ...state.todos.splice(action.payload, 1),
        todos: [...state.todos],
        isMaxNumberOfTasks: false
      };
    case CHANGE_TASK_TO_COMPLETED:
      return {
        ...state,
        ...(state.todos[action.payload].completed = true),
        todos: [...state.todos]
      };
    default:
      return state;
  }
};

export const loadedDataActionCreator = () => {
  return {
    type: FETCH_DATA_SUCCESS
  };
};

export const loadingDataActionCreator = () => {
  return {
    type: FETCH_DATA_START
  };
};

export const errorDataLoadingActionCreator = () => {
  return {
    type: FETCH_DATA_FAILURE
  };
};

export const addTaskActionCreator = tasks => {
  return {
    type: ADD_TASKS,
    payload: tasks
  };
};

export const deleteTaskActionCreator = index => {
  return {
    type: DELETE_TASK,
    payload: index
  };
};

export const changeTaskStatusDone = index => {
  return {
    type: CHANGE_TASK_TO_COMPLETED,
    payload: index
  };
};

const middlewareEnhancer = applyMiddleware();

export const store = createStore(
  todoAppReducer,
  initialStoreState,
  composeWithDevTools(middlewareEnhancer)
);
