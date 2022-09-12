// 1- create a redux store 
import { configureStore, combineReducers,applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
/*import * as reducers from './reducers'*/

// 3- ajouter un reducer au store
import cartReducer from "./cartRedux";
import productReducer from "./productRedux";

/*const reducer = combineReducers(reducers)
*/
export default configureStore(

{
    reducer : {  
        // 4- add all yours Redux here 
        cart : cartReducer ,
        product : productReducer 
     }
}

,applyMiddleware(thunk)

);

