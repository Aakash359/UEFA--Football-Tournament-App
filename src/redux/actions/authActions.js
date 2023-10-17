import { createAction } from 'redux-actions'
import {
    FORGET_PASSWORD,
    HIDE_LOADER,
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    OTP_SUCCESS,
    OTP_VERIFY,
    RESEND_OTP,
    RESEND_OTP_ERROR,
    RESEND_OTP_SUCCESS,
    RESET_PASSWORD,
    SET_FORGET_PASSWORD_ERROR,
    SET_FORGET_PASSWORD_LOADER,
    SET_FORGET_PASSWORD_OTP_SUCCESS,
    SET_FORGET_PASSWORD_SUCCESS,
    SET_LOGIN_DETAILS,
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
    SIGNUP,
    MOBILE_NUMBER__REQUEST,
    SET_MOBILE_NUMBER_SUCCESS,
    SET_MOBILE_NUMBER_ERROR,
    SET_MOBILE_NUMBER_LOADER,
    SET_MOBILE_NUMBER_OTP_SUCCESS,
    MOBILE_OTP_VERIFY,
    SET_MOBILE_OTP_ERROR,
    SET_MOBILE_OTP_LOADER,
    MOBILE_OTP_SUCCESS,
    COUNTRY_LIST,
    SET_COUNTRY_LIST_LOADER,
    SET_COUNTRY_LIST_ERROR,
    COUNTRY_LIST_SUCCESS,
    SET_LOGIN_CREAD,
} from '../actionsTypes/authActionsTypes'

export const setLoginDetails = createAction(SET_LOGIN_DETAILS)

export const showLoader = createAction(SHOW_LOADER)

export const hideLoader = createAction(HIDE_LOADER)

export const login = createAction(LOGIN)

export const logout = createAction(LOGOUT)

export const loginSuccess = createAction(LOGIN_SUCCESS)

export const loginFailure = createAction(LOGIN_FAILURE)

export const signUpAction = createAction(SIGNUP)

export const setSignUpLoader = createAction(SET_SIGNUP_LOADER)

export const setSignUpError = createAction(SET_SIGNUP_ERROR)

export const setSignUpCread = createAction(SET_SIGNUP_CREAD)

export const setLoginError = createAction(SET_LOGIN_ERROR)

export const setSignUpSuccess = createAction(SET_SIGUN_SUCCESS)

export const setSignUpUser = createAction(SET_SIGNUP_USER)

export const setOtpLoader = createAction(SET_OTP_LOADER)

export const setOtpError = createAction(SET_OTP_ERROR)

export const otpSuccess = createAction(OTP_SUCCESS)

export const otpVerify = createAction(OTP_VERIFY)

export const resendOtp = createAction(RESEND_OTP)

export const setResendOtpLoader = createAction(SET_RESEND_OTP_LOADER)

export const resendOtpError = createAction(RESEND_OTP_ERROR)

export const resendOtpSuccess = createAction(RESEND_OTP_SUCCESS)

export const resetPassword = createAction(RESET_PASSWORD)

export const setResetPasswordLoader = createAction(SET_RESET_PASSWORD_LOADER)

export const setResetPasswordError = createAction(SET_RESET_PASSWORD_ERROR)

export const setResetPasswordSuccess = createAction(SET_RESET_PASSWORD_SUCCESS)

export const forgetPassword = createAction(FORGET_PASSWORD)

export const setForgetPasswordError = createAction(SET_FORGET_PASSWORD_ERROR)

export const setForgetPasswordLoader = createAction(SET_FORGET_PASSWORD_LOADER)

export const setForgetPasswordSuccess = createAction(
    SET_FORGET_PASSWORD_SUCCESS
)

export const setForgetPasswordOtpSuccess = createAction(
    SET_FORGET_PASSWORD_OTP_SUCCESS
)

export const MobileNumberRequest = createAction(MOBILE_NUMBER__REQUEST)

export const setMobileNumberError = createAction(SET_MOBILE_NUMBER_ERROR)

export const setMobileNumberLoader = createAction(SET_MOBILE_NUMBER_LOADER)

export const setMobileNumberSuccess = createAction(SET_MOBILE_NUMBER_SUCCESS)

export const setMobileNumberOtpSuccess = createAction(
    SET_MOBILE_NUMBER_OTP_SUCCESS
)

export const setMobileOtpLoader = createAction(SET_MOBILE_OTP_LOADER)

export const setMobileOtpError = createAction(SET_MOBILE_OTP_ERROR)

export const mobileOtpSuccess = createAction(MOBILE_OTP_SUCCESS)

export const mobileOtpVerify = createAction(MOBILE_OTP_VERIFY)

export const countryList = createAction(COUNTRY_LIST)

export const setCountryListLoader = createAction(SET_COUNTRY_LIST_LOADER)

export const setCountryListError = createAction(SET_COUNTRY_LIST_ERROR)

export const countryListSuccess = createAction(COUNTRY_LIST_SUCCESS)

export const setLoginCread = createAction(SET_LOGIN_CREAD)
