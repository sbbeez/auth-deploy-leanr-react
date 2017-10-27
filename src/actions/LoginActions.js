import { LOGIN_USER } from "../FetchApi";

export const loginUser = (email, password, callback) => {
  return async dispatch => {
    const responseData = await fetch(LOGIN_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    if (responseData.status === 401) {
      dispatch({
        type: "SHOW_ERROR_MESSAGE",
        payload: "Please enter a valid email and password"
      });
    } else if (responseData.status === 422) {
      dispatch({
        type: "SHOW_ERROR_MESSAGE",
        payload: "Please enter a valid email and password"
      });
    }else {
      const resJson = await responseData.json();
      if (resJson.token) {
        localStorage.setItem("email", email);
        localStorage.setItem("token", resJson.token);
        callback();
      }
    }
  };
};
