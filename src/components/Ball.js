import React from "react";
// pull state from store
import { connect } from "react-redux";

function Ball(props) {
  console.log(props);
  // state -> props (redux)
  // prop -> function
  // step 6
  return (
    <div>
      <h1>Number of balls {props.balls}</h1>
      <button onClick={props.buyBall}>Buy balls</button>
      <button onClick={props.sellBall}>Sell balls</button>
    </div>
  );
}
// step 5 - provide state variable from store
const mapStateToDispatch = (dispatch) => {
  return {
    buyBall: () => {
      return dispatch({ type: "buy_ball" });
    },
    sellBall: () => {
      return dispatch({ type: "sell_ball" });
    },
  };
};
const mapStateToProps = (store) => {
  console.log("In map state to prop", store);
  return store;
};
//step 7
//dispath an action, action is any descriptive string

// higher order function
export default connect(mapStateToProps, mapStateToDispatch)(Ball);
