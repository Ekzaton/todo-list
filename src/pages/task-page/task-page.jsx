import {useDispatch, useSelector} from "react-redux";
import {useParams, Link} from "react-router-dom";

import {setFiltering} from "../../store/actions"
import {selectAllTasks} from "../../store/selectors";

function TaskPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);

  const task = tasks.find((task) => task.id === id);

  return (
    <div className="container">
      <h1>
        <Link to={`/`}>Список задач</Link>
      </h1>

      <div
        className="task-type"
        onClick={() => dispatch(setFiltering(task.type))}
      >
        <Link to={`/`}>{task.type}</Link>
      </div>

      <section className="task-info">
        <h2 className="task-info__name">
          {task.name}
        </h2>
        <div className="task-info__description">
          {task.description}
        </div>
      </section>
    </div>
  );
}

export default TaskPage;
