import React, { useState } from "react";
// pull state from store
import { connect } from "react-redux";
function Todo(props) {
  console.log(props.taskList);
  const [curTask, setTask] = useState("");
  return (
    <div>
      <input
        placeholder="add task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          console.log(curTask);
          props.addTask(curTask);
          setTask("");
        }}
      >
        Submit
      </button>
      {props.taskList.map((task) => {
        return <div>{task}</div>;
      })}
    </div>
  );
}

const mapStateToDispatch = (dispatch) => {
  return {
    addTask: (curTask) => {
      return dispatch({ type: "add_task", payload: curTask });
    },
    RemoveTask: () => {
      return dispatch({ type: "remove_task", payload: "" });
    },
  };
};
const mapStateToProps = (store) => {
  return store;
};
export default connect(mapStateToProps, mapStateToDispatch)(Todo);
