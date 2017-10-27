import { GET_REWARDS,ADD_REWARDS} from '../FetchApi';

export const getRewards = (callback) => {
  return async dispatch => {
    const resData = await fetch(GET_REWARDS,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "authorization":localStorage.getItem("token")
      }
    });
    if (resData.status !== 200) {
      callback();
    }
    const resJson = await resData.json();
    dispatch({type:"SHOW_LOADER",payload:false});
    dispatch({type:"SHOW_REWARDS",payload:resJson});
  }
}

export const addRewards = (reward) => {
  return async dispatch => {
    dispatch({type:"SHOW_LOADER",payload:true})
    const resData = await fetch(ADD_REWARDS,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "authorization":localStorage.getItem("token")
      },
      body: JSON.stringify({
        "rewards":reward
      })
    });
    const resJson = await resData.json();
    dispatch({type:"SHOW_LOADER",payload:false});
    dispatch({type:"SHOW_REWARDS",payload:resJson});
  }
}
