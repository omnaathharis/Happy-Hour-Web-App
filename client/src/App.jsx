import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import RestaurantAdd from "./routes/RestaurantAdd";
import RestaurantUpdate from "./routes/RestaurantUpdate";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/restaurants/add" component={RestaurantAdd} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={RestaurantUpdate}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
