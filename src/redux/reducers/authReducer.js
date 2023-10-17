import {
    HIDE_LOADER,
    LOGIN_SUCCESS,
    LOGOUT,
    OTP_SUCCESS,
    REMOVE_AUTH_TOKEN,
    RESEND_OTP_ERROR,
    RESEND_OTP_SUCCESS,
    SET_FORGET_PASSWORD_ERROR,
    SET_FORGET_PASSWORD_LOADER,
    SET_FORGET_PASSWORD_OTP_SUCCESS,
    SET_FORGET_PASSWORD_SUCCESS,
    SET_MOBILE_NUMBER_ERROR,
    SET_MOBILE_NUMBER_LOADER,
    SET_MOBILE_NUMBER_SUCCESS,
    SET_MOBILE_NUMBER_OTP_SUCCESS,
    SET_LOGIN_ERROR,
    SET_OTP_ERROR,
    SET_OTP_LOADER,
    SET_RESEND_OTP_LOADER,
    SET_RESET_PASSWORD_ERROR,
    SET_RESET_PASSWORD_LOADER,
    SET_RESET_PASSWORD_SUCCESS,
    SET_SIGNUP_CREAD,
    SET_SIGNUP_ERROR,
    SET_SIGNUP_LOADER,
    SET_SIGNUP_USER,
    SET_SIGUN_SUCCESS,
    SHOW_LOADER,
    SET_MOBILE_OTP_ERROR,
    SET_MOBILE_OTP_LOADER,
    MOBILE_OTP_VERIFY,
    UPDATE_USER_IMAGE,
    COUNTRY_LIST_SUCCESS,
    SET_COUNTRY_LIST_LOADER,
    SET_COUNTRY_LIST_ERROR,
    SET_LOGIN_CREAD,
} from '../actionsTypes/authActionsTypes'
import { NOTIFICATION_UPDATE_SUCCESS } from '../actionsTypes/settingsActionTypes'

const initalState = {
    token: '',
    user_id: null,
    role: null,
    email: '',
    device_token: null,
    intro: false,
    user: null,
    isLoading: false,
    loginError: '',
    signUpLoading: false,
    signUpError: '',
    signUpCread: null,
    tempUser: null,
    signUpSuccess: false,
    otpLoader: false,
    otpError: '',
    resendOtpLoader: false,
    resendOtpError: '',
    forgetPassword: null,
    forgetOtpSuccess: false,
    resetPasswordSuccess: false,
    forgetPasswordLoader: false,
    forgetPasswordError: '',
    mobileNumberSuccess: false,
    mobileNumber: null,
    mobileNumberLoader: false,
    mobileNumberError: '',
    mobileOtpError: '',
    mobileOtpLoader: false,
    resetPasswordLoader: false,
    otpVerifySuccess: false,
    resetPasswordError: '',
    countryList: [],
    countryListLoader: false,
    countryListError: '',
    loginCread: null,
}

export default function auth(state = initalState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                token: action.payload.authToken,
            }
        case REMOVE_AUTH_TOKEN:
            return {
                ...state,
                token: '',
            }
        case SHOW_LOADER:
            return { ...state, isLoading: true }
        case HIDE_LOADER:
            return { ...state, isLoading: false }
        case SET_SIGNUP_LOADER:
            return { ...state, signUpLoading: action.payload }
        case SET_SIGNUP_ERROR:
            return { ...state, signUpError: action.payload }
        case SET_SIGNUP_CREAD:
            return { ...state, signUpCread: action.payload }
        case SET_LOGIN_ERROR:
            return { ...state, loginError: action.payload }
        case SET_SIGUN_SUCCESS:
            return { ...state, signUpSuccess: action.payload }
        case SET_SIGNUP_USER:
            return { ...state, tempUser: action.payload }
        case SET_OTP_ERROR:
            return { ...state, otpError: action.payload }
        case SET_OTP_LOADER:
            return { ...state, otpLoader: action.payload }
        case OTP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                token: action.payload.authToken || null,
                tempUser: null,
            }
        case LOGOUT:
            return { ...state, user: null, token: null }
        case SET_RESEND_OTP_LOADER:
            return { ...state, resendOtpLoader: action.payload }
        case RESEND_OTP_ERROR:
            return { ...state, resendOtpError: action.payload }
        case RESEND_OTP_SUCCESS:
            return {
                ...state,
                tempUser: {
                    ...state.tempUser,
                    otpCode: action.payload?.otpCode,
                },
            }
        case SET_FORGET_PASSWORD_SUCCESS:
            return { ...state, forgetPassword: action.payload }
        case SET_FORGET_PASSWORD_LOADER:
            return { ...state, forgetPasswordLoader: action.payload }
        case SET_FORGET_PASSWORD_ERROR:
            return { ...state, forgetPasswordError: action.payload }
        case SET_RESET_PASSWORD_SUCCESS:
            return { ...state, resetPasswordSuccess: action?.payload }
        case SET_RESET_PASSWORD_LOADER:
            return { ...state, resetPasswordLoader: action?.payload }
        case SET_RESET_PASSWORD_ERROR:
            return { ...state, resetPasswordError: action?.payload }
        case SET_FORGET_PASSWORD_OTP_SUCCESS: {
            return { ...state, forgetOtpSuccess: action.payload }
        }

        case SET_MOBILE_NUMBER_SUCCESS:
            return { ...state, mobileNumber: action.payload }
        case SET_MOBILE_NUMBER_LOADER:
            return { ...state, mobileNumberLoader: action.payload }
        case SET_MOBILE_NUMBER_ERROR:
            return { ...state, mobileNumberError: action.payload }
        case SET_MOBILE_NUMBER_OTP_SUCCESS: {
            return { ...state, mobileNumberSuccess: action.payload }
        }
        case SET_MOBILE_OTP_ERROR:
            return { ...state, mobileOtpError: action.payload }

        case SET_MOBILE_OTP_LOADER:
            return { ...state, mobileOtpLoader: action.payload }

        case MOBILE_OTP_VERIFY:
            return {
                ...state,
                user: action.payload,
                otpVerifySuccess: true,
            }
        case UPDATE_USER_IMAGE:
            return {
                ...state,
                user: { ...state.user, imageUrl: action?.payload },
            }
        case SET_COUNTRY_LIST_LOADER: {
            return { ...state, countryListLoader: action?.payload }
        }
        case SET_COUNTRY_LIST_ERROR: {
            return { ...state, countryListError: action?.payload }
        }
        case COUNTRY_LIST_SUCCESS: {
            return { ...state, countryList: action?.payload }
        }
        case NOTIFICATION_UPDATE_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    setting: action?.payload?.receiveNotification,
                },
            }
        case SET_LOGIN_CREAD:
            return { ...state, loginCread: action?.payload }
        default:
            return state
    }
}
