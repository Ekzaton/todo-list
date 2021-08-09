import {SortingType, TaskType} from "../consts/common"

export const addTask = (tasks, addedTask) => {
  return [...tasks, addedTask];
};

export const editTask = (tasks, editedTask) => {
  const index = tasks.findIndex((task) => task.id === editedTask.id);
  return [...tasks.slice(0, index), editedTask, ...tasks.slice(index + 1)];
};

export const filterTasks = (tasks, filtering) => {
  if (filtering === TaskType.ALL) {
    return tasks;
  } else {
    return tasks.filter((task) => task.type === filtering);
  }
};

export const removeTask = (tasks, removedTask) => {
  const index = tasks.findIndex((task) => task.id === removedTask.id);
  return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
};

export const sortTasks = (tasks, sorting) => {
  if (sorting === SortingType.DEFAULT) {
    return [...tasks.sort((task1, task2) => (task1.id > task2.id) ? 1 : ((task2.id > task1.id) ? -1 : 0))];
  } else {
    return [...tasks.sort((task1, task2) => (task1.name > task2.name) ? 1 : ((task2.name > task1.name) ? -1 : 0))];
  }
};

  
