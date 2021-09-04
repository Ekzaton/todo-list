import {useDispatch, useSelector} from "react-redux";

import TasksItem from "../tasks-item/tasks-item";

import {SortingType} from "../../consts/common"

import {setSorting} from "../../store/actions"
import {selectSorting} from "../../store/selectors"

function TasksList({tasks, isActiveList}) {
  const dispatch = useDispatch();
  const sorting = useSelector(selectSorting);

  return (
    <ul className="tasks__list">
      <li className="tasks__item tasks__item--header">
        {isActiveList
          ? <div className="tasks__sorting"
            onClick={() => {
              if (sorting === SortingType.DEFAULT) {
                dispatch(setSorting(SortingType.NAME))
              } else {
                dispatch(setSorting(SortingType.DEFAULT))
              }
            }}
          >
            Название
          </div>
          : <div className="tasks__sorting">Название</div>
        }

        <div>Описание</div>
        <div>Тип</div>
      </li>
      {!tasks.length
        ? isActiveList
            ? <li className="tasks__item">Активных задач пока нет</li>
            : <li className="tasks__item">Завершённых задач пока нет</li>
        : tasks.map((task) =>
          <TasksItem
            key={task.id}
            task={task}
            isActiveList={isActiveList}
          />
        )
      }
    </ul>
  );
}

export default TasksList;
