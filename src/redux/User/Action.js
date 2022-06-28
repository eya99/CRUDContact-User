
  import axios from "axios";
  
  export const getUsers = () => async (dispatch) => {
    try {
      dispatch({ type: "USER_LIST_REQUEST" });
  
     
      const { data } =  await axios.get("http://localhost:4000/Atlantis/users/getAll");
 console.log(data)
      dispatch({
        type: "USER_LIST_SUCCESS",
        //I need to fill payload with data because as mentiond in the reducer
        //our CONTACTs will be fetched from the payload itself
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "USER_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const createUsers = (users) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "USER_CREATE_REQUEST", 
      });
    
       
      const config={
        headers:{
            'Content-Type':'application/json'
        } 
    }
     const {data}= await axios.post(`http://localhost:4000/Atlantis/user/add`,users,{config});
     console.log(data)  
         dispatch({
        type: "USER_CREATE_SUCCESS",payload:data
      });
      
    } catch (error) {
      console.error(error+"hey")
      dispatch({
        // type: USER_LOGIN_FAIL,
        type: "USER_CREATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const deleteUser = (_id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "USER_DELETE_REQUEST", 
      });
      const config = {
        headers: {
         
     
      }};
      await axios.delete(`http://localhost:4000/Atlantis/user/delete/${_id}`);
      dispatch({
        type: "USER_DELETE_SUCCESS",
      });
    } catch (error) {
      dispatch({
        // type: USER_LOGIN_FAIL,
        type: "USER_DELETE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
