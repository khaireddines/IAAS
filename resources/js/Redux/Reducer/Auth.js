import {INIT_URL} from "@/Constants/ActionsTypes";

const INIT_STATE = {
    tokens: JSON.parse(localStorage.getItem('tokens')),
    initURL: 'sdsa',
    authUser: JSON.parse(localStorage.getItem('user')),
};
export default (state = INIT_STATE, action) =>{
    switch (action) {
        case INIT_URL: {
            return {...state, initURL: action.payload};
        }
        default:
            return state;
    }
}
