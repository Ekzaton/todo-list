import {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {TaskType} from "../../consts/common"

import {editTask, completeTask, reactivateTask, removeTask} from "../../store/actions"

function TasksItem({task, isActiveList}) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [type, setType] = useState(task.type);

  return (
    isEditing
      ? <form 
        className="tasks__item"
        onSubmit={(evt) => {
          evt.preventDefault();
          const editedTask = {
            id: task.id, 
            name: name, 
            description: description, 
            type: type, 
            isCompleted: task.isCompleted
          };
          dispatch(editTask(editedTask));
          setIsEditing(false);
        }}
      >
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          required
        />
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
          required
        />
        <select 
          value={type}
          onChange={(evt) => setType(evt.target.value)}
        >
          {Object.values(TaskType).slice(1).map((type) => 
            <option>{type}</option>
          )}
        </select>
        <button
          type="submit"
        >
          Сохранить
        </button>
        <button
          type="reset"
          onClick={() => setIsEditing(false)}
        >
          Отмена
        </button>
      </form>
      : <li className="tasks__item">
        <Link to={`/${task.id}`}>
          {task.name}
        </Link>
        <div>
          {task.description.slice(0, 50)}
        </div>
        <div>
          {task.type}
        </div>
        {isActiveList &&
          <>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
            >
              Изменить
            </button>
            <button
              type="button"
              onClick={() => dispatch(removeTask(task))}
            >
              Удалить
            </button>
          </>
        }
        {isActiveList 
          ? <button
            type="button"
            onClick={() => dispatch(completeTask(task))}
          >
            Завершить
          </button>
          : <button
            type="button"
            onClick={() => dispatch(reactivateTask(task))}
          >
            Вернуть
          </button>
        }

      </li>
  );
}

export default TasksItem;