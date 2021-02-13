import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./ScoringTask.css";

import ScoringPreview from "./ScoringPreview";
import ScoringMain from "./ScoringMain";
import ScoringAll from "./ScoringAll";

export default function Scoring() {
  return (
    <div className="scoring">
      <div
        onClick={() => {
          window.history.go(-1);
          return false;
        }}
        className="btn-back btn-green"
      >
        Back
      </div>
      <h1 className="main-heading">Scoring Tasks</h1>
      <Router>
        <Switch>
          <Route path="/score" exact component={ScoringMain} />
          <Route path="/score/all" exact component={ScoringAll} />
          <Route path="/score/:id" component={ScoringPreview} />
        </Switch>
      </Router>
    </div>
  );
}
