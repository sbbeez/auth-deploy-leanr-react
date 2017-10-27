import { SIGN_UP_USER } from '../FetchApi';

export const signUpUser = (email,password,callback) => {
  return async dispatch => {
    const responseData = await fetch(SIGN_UP_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const resJson = await responseData.json();
    if (responseData.status === 422) {
      dispatch({
        type: "SHOW_ERROR_MESSAGE",
        payload: "Please enter a valid email and password"
      });
    }else{
      if (resJson.token) {
        localStorage.setItem("token", resJson.token);
        callback();
      }
    }
  }
}
