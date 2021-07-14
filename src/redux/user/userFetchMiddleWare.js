export async function userFetchMiddleWare(dispatch) {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    console.log(users);
    dispatch({
      type: "success_users",
      payload: users,
    });
  } catch (err) {
    dispatch({
      type: "error_users",
      payload: err.message,
    });
  }
}
