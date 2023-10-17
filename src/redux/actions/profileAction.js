import { createAction } from 'redux-actions'

import {SHOW_LOADER,HIDE_LOADER } from '../actionsTypes/authActionsTypes';
import {
    GET_PROFILE_FAILED,
    GET_PROFILE_ERROR,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_REQUEST,
EDIT_PROFILE_FAILED,
EDIT_PROFILE_REQUEST,
EDIT_PROFILE_SUCCESS,
SET_EDIT_PROFILE_ERROR,
} from '../actionsTypes/profileActionTypes';

export const showLoader = createAction(SHOW_LOADER)

export const hideLoader = createAction(HIDE_LOADER)

export const getProfileRequest = createAction(GET_PROFILE_REQUEST)

export const getProfileSuccess = createAction(GET_PROFILE_SUCCESS)

export const getProfileFailure = createAction(GET_PROFILE_FAILED)

export const setProfileError = createAction(GET_PROFILE_ERROR)

export const editProfileRequest = createAction(EDIT_PROFILE_REQUEST)

export const editProfileSuccess = createAction(EDIT_PROFILE_SUCCESS)

export const editProfileFailure = createAction(EDIT_PROFILE_FAILED)

export const setEditProfileError = createAction(SET_EDIT_PROFILE_ERROR)