import {useSelector} from "react-redux";

import MainNav from "../../components/main-nav/main-nav";
import TasksForm from "../../components/tasks-form/tasks-form";
import TasksList from "../../components/tasks-list/tasks-list";

import {selectSortedActiveTasks, selectFilteredCompletedTasks} from "../../store/selectors"

function MainPage() {
  const activeTasks = useSelector(selectSortedActiveTasks);
  const completedTasks = useSelector(selectFilteredCompletedTasks);

  return (
    <div className="container">
      <h1>Список задач</h1>
      <MainNav/>

      <h2>Новая задача</h2>
      <div className="tasks__list">
        <TasksForm/>
      </div>

      <h2>Активные задачи</h2>
      <TasksList
        tasks={activeTasks}
        isActiveList={true}
      />

      <h2>Завершённые задачи</h2>
      <TasksList
        tasks={completedTasks}
        isActiveList={false}
      />
    </div>
  );
}

export default MainPage;
