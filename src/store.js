import { createStore } from "redux";
// step 1
let intialState = {
  balls: 5,
  bats: 10,
};
//step 2 - > reducer funtion
function ballReducer(state = intialState, action) {
  // update
  // nothing
  // n type of changes
  console.log("In store", action);
  switch (action.type) {
    case "buy_ball":
      return {
        balls: state.balls - 1,
      };
    case "sell_ball":
      return {
        balls: state.balls + 1,
      };
    default:
      return state;
  }
}
//step 3
const store = createStore(ballReducer);
export default store;
