import {ActionType} from "./actions";

import {SortingType, TaskType} from "../consts/common";

import {tasks} from "../mocks/tasks";

import {addTask, editTask, removeTask} from "../utils/common";

const initialState = {
  activeTasks: tasks,
  completedTasks: [],
  filtering: TaskType.ALL,
  sorting: SortingType.DEFAULT
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return {...state, activeTasks: addTask(state.activeTasks, action.payload)};
    case ActionType.COMPLETE_TASK:
      return {...state, 
        activeTasks: removeTask(state.activeTasks, action.payload), 
        completedTasks: addTask(state.completedTasks, action.payload)
      };
    case ActionType.EDIT_TASK:
      return {...state, activeTasks: editTask(state.activeTasks, action.payload)};
    case ActionType.REACTIVATE_TASK:
      return {...state, 
        activeTasks: addTask(state.activeTasks, action.payload), 
        completedTasks: removeTask(state.completedTasks, action.payload)
      };
    case ActionType.REMOVE_TASK:
      return {...state, activeTasks: removeTask(state.activeTasks, action.payload)};
    case ActionType.SET_ALL_TASKS:
      return {...state, activeTasks: action.payload};
    case ActionType.SET_FILTERING:
      return {...state, filtering: action.payload};
    case ActionType.SET_SORTING:
      return {...state, sorting: action.payload};
    default:
      return state;
  }
};
