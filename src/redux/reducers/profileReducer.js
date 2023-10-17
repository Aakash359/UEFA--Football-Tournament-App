import { SHOW_LOADER, HIDE_LOADER } from '../actionsTypes/authActionsTypes';
import {
    GET_PROFILE_SUCCESS,
    GET_PROFILE_ERROR,
    EDIT_PROFILE_SUCCESS,
    SET_EDIT_PROFILE_ERROR,
} from '../actionsTypes/profileActionTypes';


const initialState = {
    isLoading: false,
    getProfileError: '',
    getProfileStatus: false,
    editProfileError: '',
    editProfile: false,
};

export default function ProfileReducer(state = initialState, action) {
    switch (action.type) {

        case GET_PROFILE_SUCCESS:
            return { ...state, getProfile: action.payload, getProfileStatus: true, };
        case GET_PROFILE_ERROR:
            return { ...state, getProfileError: action.payload }
        case SHOW_LOADER:
            return { ...state, isLoading: true };
        case HIDE_LOADER:
            return { ...state, isLoading: false };
            case EDIT_PROFILE_SUCCESS:
                return { ...state, editProfile: action.payload,  };
            case SET_EDIT_PROFILE_ERROR:
                return { ...state, editProfileError: action.payload }
            

        default:
            return state;
    }
}
