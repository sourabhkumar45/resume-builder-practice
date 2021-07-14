import React, { useEffect } from "react";
import { userFetchMiddleWare } from "../redux/user/userFetchMiddleWare.js";
import { connect } from "react-redux";

function User(props) {
  const { loading, error, users } = props;
  console.log(users);
  useEffect(() => {
    props.fetchUser();
    console.log("will make async request");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h2>User List</h2>
          {users.map((user) => {
            return (
              <li style={{ listStyle: "none" }} key={user.id}>
                {user.name}
              </li>
            );
          })}
        </>
      )}
    </div>
  );
}
function mapStateToProps(store) {
  return store;
}
function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => {
      return dispatch(userFetchMiddleWare);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
