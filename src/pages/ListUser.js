
import React, { useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { AddModal } from '../components/AddModal';
import CardUser from '../components/CardUser';
import Navbar from '../shared/Navbar';
import Loader from '../components/Loader';
import Message from '../components/Message';

import List from './ListUser.css';
import { isEmpty } from "lodash";
import { getUsers, createUsers} from "../redux/User/Action";

const ListUser = () => {
  const listUsers = useSelector((state) => state.listUsers);
  const { loading, error, users } = listUsers; 
  const deleteUser = useSelector((state) => state.deleteUser);
  const { loading:loadingDelete, error:errorDelete, success:successDelete } = deleteUser;
  const [productList, setProductList] = useState([]);
  const createUser = useSelector((state) => state.createUser);

  const { loading:loadingAdduser, error:errorAdduser, success:successAdduser } = createUser;
  
  const dispatch = useDispatch();
   const [modal_list, setmodal_list] = useState(false);
    function tog_list() {
      setmodal_list(!modal_list);
    }
  useEffect(() => {
    if (!isEmpty(users)) 
   
    setProductList(users);
  }, [users]);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  useEffect(() => {
   dispatch(getUsers())
  
}, [successDelete,successAdduser]);
/* Add User */
const registre =async (form) =>{ 
  
  dispatch(createUsers(form));
   };
  return (
 <div >
    <Navbar />
    <div  className ="mt-5 " style={{width:'100%',display:'flex',justifyContent:'center'}}>
    <h1 className="styleh1" >   قائمة المشتركين  </h1>
  
    </div>
    <div >
    <button className="
    
    
    ml-5 btnAdd" 
    
    onClick={() => tog_list()}
    >+</button>
  
    </div>
    
  
    {loadingDelete &&<Loader/>}
      {errorDelete &&<Message variant='danger'>{errorDelete}</Message>}
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant="danger">{error}</Message>

    ) : ( 
      <>
     

    
      {users.length>0 ? ( 
 
    <div className="row mt-5" >
    {users.map((item,key)=>(

     <CardUser  item={item} />
 
     ))}
     </div>):(
      
        <div className="row mt-5" >
        <Message variant='danger'>لا يوجد شيء </Message>

         </div>
      )}    
     
  
      </>
   
  )}
    <AddModal
     isOpen={modal_list}
     toggle={() => {
        tog_list();
     }}
     registre={registre}
      onClose={() => {
       setmodal_list(false);
     }}
   />
    </div>
  )
}

export default ListUser;
