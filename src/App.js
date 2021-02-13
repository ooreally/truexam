import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatingTask from "./components/CreatingTask/CreatingTask";
import Instructor from "./components/Instructor/Instructor";
import ScoringTask from "./components/ScoringTask/ScoringTask";
import Auxi from "./HOC/Auxi";
import './App.css';

function App() {
  return (
    <div className="app">
      <Auxi>
        <Router>
          <Switch>
            <Route path="/" exact component={Instructor} />
            <Route path="/add" component={CreatingTask} />
            <Route path="/score" component={ScoringTask} />
          </Switch>
        </Router>
      </Auxi>
    </div>
  );
}

export default App;
