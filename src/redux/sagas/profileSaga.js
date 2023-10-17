import { all, call, put, takeLatest, } from 'redux-saga/effects'

import httpClient from './http-client'

import {
    GET_PROFILE_REQUEST,
    EDIT_PROFILE_REQUEST,
} from '../actionsTypes/profileActionTypes'
import {
    hideLoader,
    showLoader,
    getProfileFailure,
    getProfileSuccess,
    setProfileError,
    editProfileFailure,
    editProfileSuccess,
    setEditProfileError,
    getProfileRequest
} from '../actions/profileAction'
import{loginSuccess } from '../actions/authActions';
export function* profile(data) {
    yield put(showLoader())

    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/my_account',
        }, false,true)

        if (error) {
            yield put(getProfileFailure(error))
            yield put(hideLoader())
        }

        if (result.code === 200) {
            yield put(getProfileSuccess(result.data))
            yield put(hideLoader())
        } else {
            yield put(hideLoader())

            yield put(getProfileFailure(error))
            yield put(setProfileError(result.message))
        }
    } catch (error) {
        yield put(hideLoader())
        yield put(setProfileError(`Something went wrong, Please try again later`))
    }
}
export function* editProfile(data) {
    yield put(showLoader())

    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/edit_user_profile',
        },false,true)

        if (error) {
            yield put(editProfileFailure(error))
            yield put(hideLoader())
        }

        if (result.code === 200) {
            yield put(editProfileSuccess(result.data))
         yield put(loginSuccess(result.data))
            yield put(hideLoader())
        } else {
            yield put(hideLoader())

            yield put(editProfileFailure(error))
            yield put(setEditProfileError(result.message))
        }
    } catch (error) {
        yield put(hideLoader())
        yield put(setEditProfileError(`Something went wrong, Please try again later`))
    }
}

function* Profile() {
    yield all([
        takeLatest(GET_PROFILE_REQUEST, profile) ,
        takeLatest(EDIT_PROFILE_REQUEST, editProfile) ,
 ])
}

export default Profile
