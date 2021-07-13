import { createStore } from "redux";
let intialState = {
  taskList: [],
};
function todoReducer(state = intialState, action) {
  switch (action.type) {
    case "add_task": {
      console.log("add_task", action.payload);
      let arr = state.taskList;
      arr.push(action.payload);
      return {
        taskList: arr,
      };
    }
    case "remove_task": {
      let arr = state.taskList.filter((task) => task !== action.payload);
      console.log("remove_task", action.payload);
      return {
        taskList: arr,
      };
    }
    default:
      return state;
  }
}
const store = createStore(todoReducer);
export default store;
