
  import axios from "axios";
  
  export const getContact = () => async (dispatch) => {
    try {
      dispatch({ type: "CONTACT_LIST_REQUEST" });
  
     
      const { data } =  await axios.get("http://localhost:4000/Atlantis/Contacts/getAll");
      dispatch({
        type: "CONTACT_LIST_SUCCESS",
        //I need to fill payload with data because as mentiond in the reducer
        //our CONTACTs will be fetched from the payload itself
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "CONTACT_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  

  
  export const deleteContact = (_id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "CONTACT_DELETE_REQUEST", 
      });
      const config = {
        headers: {
         
     
      }};
      await axios.delete(`http://localhost:4000/Atlantis/Contact/delete/${_id}`);
      dispatch({
        type: "CONTACT_DELETE_SUCCESS",
      });
    } catch (error) {
      dispatch({
        // type: USER_LOGIN_FAIL,
        type: "CONTACT_DELETE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
