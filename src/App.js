import React, { Suspense } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import Spinner from "./UI/Spinner/Spinner";

const Home = React.lazy(() => import("./Views/Home"));

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route
          path="/home"
          render={() => (
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
