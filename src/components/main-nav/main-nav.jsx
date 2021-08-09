import {useDispatch, useSelector} from "react-redux";

import {TaskType} from "../../consts/common";

import {setFiltering} from "../../store/actions"
import {selectFiltering} from "../../store/selectors"

function MainNav() {
  const dispatch = useDispatch();
  const filtering = useSelector(selectFiltering);

  return (
    <nav className="main-nav">
      {Object.values(TaskType).map((type, i) =>
        <button 
          key={`type-${i}`}
          className={`main-nav__item ${filtering === type && `main-nav__item--active`} `}
          onClick={() => dispatch(setFiltering(type))}
        >
          <span>{type}</span>
        </button>
      )}
    </nav>
  );
}

export default MainNav;