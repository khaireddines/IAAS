import {USER_DATA} from "@/Constants/ActionsTypes";
import Axios from '@/utils/Axios';

export const getUser = () => {
    return dispatch => {
        Axios
            .get("api/getUser")
            .then(({ data }) => {
                if (data) {
                    dispatch({ type: USER_DATA, payload: data });
                    localStorage.setItem('user',JSON.stringify(data));
                    // We subscribe the current user to his own broadcast room
                }
            })
            .catch(function(error) {
                console.log("Error****:", error.message);
            });

    };
};
