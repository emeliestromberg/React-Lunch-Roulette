import React from "react";
import ReactDOM from "react-dom";
import WelcomePage from "./components/WelcomePage";
//import RemovePersonPage from "./components/RemovePersonPage"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  useParams,
} from "react-router-dom";

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/test" element={<p>hej</p>}></Route>
        <Route path="/" element={<WelcomePage />}></Route>
      {/*  <Route path="/RemovePerson" element={<RemovePersonPage />}></Route> */}
      </Switch>
    </Router>
  );
};
export default Routes;
