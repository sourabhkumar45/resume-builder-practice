import React from "react";
// import Ball from "./components/Ball";
// import Bat from "./components/Bat";
// import User from "./components/User";
import { Provider } from "react-redux";
import store from "./cartPOC/store";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Ecommerce from "./cartPOC/components/Ecommerce";
import Cart from "./cartPOC/components/Cart";
import Product from "./cartPOC/components/Product";
function App() {
  return (
    // 4
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/" component={Ecommerce}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
