import React, { useState } from "react";
// pull state from store
import { connect } from "react-redux";
function Todo(props) {
  //console.log(Array.isArray(props.taskList), typeof props.taskList);
  const [remTask, setRTask] = useState("");
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
        return (
          <div>
            <input
              type="checkbox"
              onClick={() => {
                setRTask(task);
                props.RemoveTask(remTask);
              }}
            ></input>
            {task}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToDispatch = (dispatch) => {
  return {
    addTask: (curTask) => {
      return dispatch({ type: "add_task", payload: curTask });
    },
    RemoveTask: (remTask) => {
      return dispatch({ type: "remove_task", payload: remTask });
    },
  };
};
const mapStateToProps = (store) => {
  return store;
};
export default connect(mapStateToProps, mapStateToDispatch)(Todo);
