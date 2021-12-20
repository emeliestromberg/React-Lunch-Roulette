import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import WelcomePage from "./components/WelcomePage";
import MainMenuNavigation from "./components/MainMenuNavigation";
import SeeListPage from "./components/SeeListPage";
import SpinTheWheelPage from "./components/SpinTheWheelPage";
import RemovePersonPage from "./components/RemovePersonPage";
import AddPersonPage from "./components/AddPersonPage";

import {
  BrowserRouter,
  Route as Switch,
  Route,
  useParams,
  Routes as ReactRouterDomRoutes,
} from "react-router-dom";

const Routes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ReactRouterDomRoutes>
        <Route path="/Home" element={<WelcomePage />}></Route>
        <Route path="/List" element={<SeeListPage />}></Route>
        <Route path="/SpinTheWheel" element={<SpinTheWheelPage />}></Route>
        <Route path="/RemovePerson" element={<RemovePersonPage />}></Route>
        <Route path="/AddPerson" element={<AddPersonPage />}></Route>
        <Route path="/MainMenu" element={<MainMenuNavigation />}></Route>
      </ReactRouterDomRoutes>
    </BrowserRouter>
  );
};

export default Routes;

/*


<Router>
      <Switch>
        <Route path="/home">
          <WelcomePage />
        </Route>
        <Route path="/SeeList">
          <SeeListPage />
        </Route>
        <Route path="/SpinTheWheel">
          <SpinTheWheelPage />
        </Route>
        <Route path="/RemovePerson">
          <RemovePersonPage />
        </Route>
        <Route path="/AddPerson">
          <AddPersonPage />
        </Route>
      </Switch>
    </Router>


*/
