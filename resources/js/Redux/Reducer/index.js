import {combineReducers} from "@reduxjs/toolkit";
import Auth from "@/Redux/Reducer/Auth";

export default () => combineReducers({
    settings: 'Settings',
    auth: Auth,
    commonData: 'Common',
    commonQuery:'CommonQuery'
});
