import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import {ListContactReducer,contactDeleteReducer} from './Contact/Reducer'
import {ListUsersReducer,createUserReducer,userDeleteReducer} from './User/Reducer'


const all = combineReducers({
    listContact:ListContactReducer,
    contactDeleted: contactDeleteReducer,
    listUsers:ListUsersReducer,
    createUser:createUserReducer,
    deleteUser:userDeleteReducer
    
})
const store = createStore(all,applyMiddleware(thunk))
export default store