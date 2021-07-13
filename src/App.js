import React from "react";
import "./App.css";
import { Provider } from "react-redux";
// import store from "./store";
import store from "./storeToDo";
import Ball from "./components/Ball";
import Todo from "./components/Todo.js";

function App() {
  return (
    //step 4
    <Provider store={store}>
      <div className="App">
        {/* <Ball></Ball> */}
        <Todo></Todo>
      </div>
    </Provider>
  );
}

export default App;
