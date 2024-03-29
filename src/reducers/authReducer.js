const initialState = {
    user: null,
    error: null,
    loading: false,
  };
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...state,
          loading: true,
        };
      case "SIGN_IN_SUCCESS":
        return {
          ...state,
          user: action.payload.user,
          error: null,
          loading: false,
        };
      case "SIGN_IN_FAILURE":
        return {
          ...state,
          error: action.payload.error,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  