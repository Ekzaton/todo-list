import {nanoid} from "nanoid";
import {useState} from "react";
import {useDispatch} from "react-redux";

import {TaskType} from "../../consts/common"

import {addTask} from "../../store/actions"

function TasksForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState(``);
  const [description, setDescription] = useState(``);
  const [type, setType] = useState(TaskType.WORKING);

  return (
    <div className="tasks__form">
      <form
        className="tasks__item"
        onSubmit={(evt) => {
          evt.preventDefault();
          const newTask = {
            id: nanoid(),
            name: name,
            description: description,
            type: type,
            isCompleted: false
          };
          dispatch(addTask(newTask));
          setName(``);
          setDescription(``);
          setType(TaskType.WORKING);
        }}
      >
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Введите название"
          onChange={(evt) => setName(evt.target.value)}
          required
        />
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          placeholder="Добавьте описание"
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
          Добавить
        </button>
        {(!!name || !!description) &&
          <button
            type="reset"
            onClick={() => {
              setName(``);
              setDescription(``);
              setType(TaskType.WORKING);
            }}
          >
            Очистить
          </button>
        }

      </form>
    </div>

  );
}

export default TasksForm;
