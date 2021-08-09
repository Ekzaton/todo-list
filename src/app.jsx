import {BrowserRouter, Route, Switch} from "react-router-dom";

import MainPage from "./pages/main-page/main-page"
import TaskPage from "./pages/task-page/task-page"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={MainPage}/>
        <Route exact path={`/:id`} component={TaskPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;