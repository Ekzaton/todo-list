export const ActionType = {
  ADD_TASK: `ADD_TASK`,
  COMPLETE_TASK: `COMPLETE_TASK`,
  EDIT_TASK: `EDIT_TASK`,
  REACTIVATE_TASK: `REACTIVATE_TASK`,
  REMOVE_TASK: `REMOVE_TASK`,
  SET_ALL_TASKS: `SET_ALL_TASKS`,
  SET_FILTERING: `SET_FILTERING`,
  SET_SORTING: `SET_SORTING`
}

export const addTask = (task) => ({
  type: ActionType.ADD_TASK,
  payload: task
});

export const completeTask = (task) => ({
  type: ActionType.COMPLETE_TASK,
  payload: task
});

export const editTask = (task) => ({
  type: ActionType.EDIT_TASK,
  payload: task
});

export const reactivateTask = (task) => ({
  type: ActionType.REACTIVATE_TASK,
  payload: task
});

export const removeTask = (task) => ({
  type: ActionType.REMOVE_TASK,
  payload: task
});

export const setActiveTasks = (tasks) => ({
  type: ActionType.SET_ALL_TASKS,
  payload: tasks
});

export const setFiltering = (filtering) => ({
  type: ActionType.SET_FILTERING,
  payload: filtering
});

export const setSorting = (sorting) => ({
  type: ActionType.SET_SORTING,
  payload: sorting
});

