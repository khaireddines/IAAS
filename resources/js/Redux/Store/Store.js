import {configureStore} from "@reduxjs/toolkit";
import {createStore} from "@reduxjs/toolkit";
import CreateRootReducers from '../Reducer'

export default  configureStore({
    reducer: CreateRootReducers(),
    devTools:true
})
