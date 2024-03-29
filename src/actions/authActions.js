// src/actions/authActions.js

export const signIn = (email, password) => {
    return {
      type: 'SIGN_IN',
      payload: {
        email,
        password
      }
    };
  };
  
  export const signInSuccess = (user) => {
    return {
      type: 'SIGN_IN_SUCCESS',
      payload: {
        user
      }
    };
  };
  
  export const signInFailure = (error) => {
    return {
      type: 'SIGN_IN_FAILURE',
      payload: {
        error
      }
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT'
    };
  };