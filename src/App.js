import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col m min-w-[250px]">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/popular" exact>
            <Popular />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
