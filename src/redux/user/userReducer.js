let initialState = {
  users: [],
  error: "",
  loading: true,
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "error_users":
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    case "success_users":
      return {
        users: action.payload,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
}
export default userReducer;
