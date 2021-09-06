import {configureStore} from "@reduxjs/toolkit";
import {createStore} from "@reduxjs/toolkit";
import CreateRootReducers from '../Reducer'
const preloadedState = {
    auth:{
        name:'name'
    }
};
export default  configureStore({
    reducer: CreateRootReducers()
})
