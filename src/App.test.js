import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
constructor(props) {
      super(props);
  const navBar = navBarFR;
  const mainBody = mainBodyFR;
  const about = aboutFR;
  const repos = reposFR;
  const leadership = leadershipFR;
  const skills = skillsFR;
  const getInTouch = getInTouchFR;
  const experiences = experiencesFR;
  const parcours = parcoursFR;
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
