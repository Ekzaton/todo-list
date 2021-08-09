import {createSelector} from "reselect";

import {filterTasks, sortTasks} from "../utils/common";

export const selectActiveTasks = (state) => state.activeTasks;
export const selectCompletedTasks = (state) => state.completedTasks;
export const selectFiltering = (state) => state.filtering;
export const selectSorting = (state) => state.sorting;

export const selectAllTasks = createSelector(
  [selectActiveTasks, selectCompletedTasks],
  (tasks1, tasks2) => [...tasks1, ...tasks2]
);

export const selectFilteredActiveTasks = createSelector(
  [selectActiveTasks, selectFiltering],
  (tasks, filtering) => filterTasks(tasks, filtering)
);

export const selectSortedActiveTasks = createSelector(
  [selectFilteredActiveTasks, selectSorting],
  (tasks, sorting) => sortTasks(tasks, sorting)
);

export const selectFilteredCompletedTasks = createSelector(
  [selectCompletedTasks, selectFiltering],
  (tasks, filtering) => filterTasks(tasks, filtering)
);