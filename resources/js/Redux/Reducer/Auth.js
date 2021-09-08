import {INIT_URL, USER_DATA} from "@/Constants/ActionsTypes";

const INIT_STATE = {
    tokens: JSON.parse(localStorage.getItem('tokens')),
    initURL: 'sdsa',
    authUser: JSON.parse(localStorage.getItem('user')),
};
export default (state = INIT_STATE, action) =>{
    switch (action.type) {
        case INIT_URL: {
            return {...state, initURL: action.payload};
        }
        case USER_DATA:{
            return {...state,authUser: action.payload}
        }
        default:
            return state;
    }
}
