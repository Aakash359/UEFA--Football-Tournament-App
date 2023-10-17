import { all, call, put, takeLatest, takeLeading } from 'redux-saga/effects'

import httpClient from './http-client'
import { setAuthToken, setUserId } from '../../utils/helpers/AuthHelper'
import {
    hideLoader,
    loginFailure,
    loginSuccess,
    setSignUpLoader,
    showLoader,
    login as loginAction,
    setSignUpError,
    setLoginError,
    setSignUpCread,
    setSignUpSuccess,
    setSignUpUser,
    setOtpLoader,
    setOtpError,
    otpSuccess,
    setResendOtpLoader,
    resendOtpError,
    resendOtpSuccess,
    setForgetPasswordLoader,
    setForgetPasswordError,
    setForgetPasswordSuccess,
    setForgetPasswordOtpSuccess,
    setMobileNumberError,
    setMobileNumberLoader,
    setMobileNumberSuccess,
    setMobileNumberOtpSuccess,
    setMobileOtpError,
    setMobileOtpLoader,
    mobileOtpSuccess,
    setResetPasswordError,
    setResetPasswordSuccess,
    setResetPasswordLoader,
    setCountryListLoader,
    setCountryListError,
    countryListSuccess,
    countryList as getCountryList,
    setLoginCread,
} from '../actions/authActions'
import {
    FORGET_PASSWORD,
    LOGIN,
    OTP_VERIFY,
    RESEND_OTP,
    RESET_PASSWORD,
    SIGNUP,
    MOBILE_NUMBER__REQUEST,
    MOBILE_OTP_VERIFY,
    COUNTRY_LIST,
} from '../actionsTypes/authActionsTypes'

export function* login(data) {
    yield put(showLoader())
    yield put(setLoginCread(data?.payload))
    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/sign_in',
        })

        if (error) {
            yield put(loginFailure(error))
            yield put(hideLoader())
        }

        if (result.code === 200) {
            setAuthToken(result.data.authToken)
            setUserId(result.data.userId.toString())
            yield put(loginSuccess(result.data))
            yield put(getCountryList())
            yield put(hideLoader())
        } else {
            yield put(hideLoader())

            yield put(loginFailure(error))
            yield put(setLoginError(result.message))
        }
    } catch (error) {
        yield put(hideLoader())
        yield put(setLoginError(`Something went wrong, Please try again later`))
    }
}

export function* signUp(data) {
    yield put(setSignUpLoader(true))
    const { email, password } = data.payload
    yield put(setSignUpCread({ email, password }))
    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/sign_up',
        })

        if (error) {
            yield put(setSignUpLoader(false))
            yield put(setSignUpError(error?.message))
        }

        if (result.code === 200) {
            setAuthToken(result?.data?.authToken)
            yield put(setSignUpLoader(false))
            yield put(setSignUpUser(result.data))
            yield put(setSignUpSuccess(true))
        } else {
            yield put(setSignUpLoader(false))

            yield put(setSignUpError(result.message))
        }
    } catch (error) {
        yield put(setSignUpLoader(false))
        yield put(
            setSignUpError('Something went wrong, Please try again later')
        )
    }
}

export function* verifyOtp(data) {
    yield put(setOtpLoader(true))
    yield put(setForgetPasswordOtpSuccess(false))
    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/verify_otp',
        })

        if (error) {
            yield put(setOtpLoader(false))
            yield put(setOtpError(error?.message))
        }

        if (result.code === 200) {
            setAuthToken(result?.data?.authToken)
            yield put(setOtpLoader(false))
            if (data?.payload?.forgetPassword) {
                yield put(setForgetPasswordOtpSuccess(true))
                yield put(setSignUpUser(result.data))
            } else {
                yield put(otpSuccess(result.data))
            }
        } else {
            yield put(setOtpLoader(false))

            yield put(setOtpError(result.message))
        }
    } catch (error) {
        yield put(setOtpLoader(false))
        yield put(setOtpError('Something went wrong, Please try again later'))
    }
}

export function* resendOtp(data) {
    yield put(setResendOtpLoader(true))
    yield put(resendOtpError(''))
    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/resend_otp',
        })

        if (error) {
            yield put(setResendOtpLoader(false))
            yield put(resendOtpError(error?.message))
        }

        if (result.code === 200) {
            yield put(setResendOtpLoader(false))
            yield put(resendOtpSuccess(result.data))
        } else {
            yield put(setResendOtpLoader(false))

            yield put(resendOtpError(result.message))
        }
    } catch (error) {
        yield put(setResendOtpLoader(false))
        yield put(
            resendOtpError('Something went wrong, Please try again later')
        )
    }
}

export function* forgetPassword(data) {
    yield put(setForgetPasswordLoader(true))
    yield put(setForgetPasswordError(''))
    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/forget_password',
        })

        if (error) {
            yield put(setForgetPasswordLoader(false))
            yield put(setForgetPasswordError(error?.message))
        }

        if (result.code === 200) {
            yield put(setForgetPasswordLoader(false))
            yield put(setForgetPasswordSuccess(result.data))
        } else {
            yield put(setForgetPasswordLoader(false))

            yield put(setForgetPasswordError(result.message))
        }
    } catch (error) {
        yield put(setForgetPasswordLoader(false))
        yield put(
            setForgetPasswordError(
                'Something went wrong, Please try again later'
            )
        )
    }
}

export function* mobileNumber(data) {
    yield put(setMobileNumberLoader(true))
    yield put(setMobileNumberError(''))
    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/send_otp_for_login',
        })

        if (error) {
            yield put(setMobileNumberLoader(false))
            yield put(setMobileNumberError(error?.message))
        }

        if (result.code === 200) {
            yield put(setMobileNumberLoader(false))
            yield put(setMobileNumberSuccess(result.data))
        } else {
            yield put(setMobileNumberLoader(false))

            yield put(setMobileNumberError(result.message))
        }
    } catch (error) {
        yield put(setMobileNumberLoader(false))
        yield put(
            setMobileNumberError('Something went wrong, Please try again later')
        )
    }
}

export function* mobileVerifyOtp(data) {
    yield put(setMobileOtpLoader(true))
    yield put(setMobileNumberOtpSuccess(false))
    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/mobile_otp_login',
        })

        if (error) {
            yield put(setMobileOtpLoader(false))
            yield put(setMobileNumberError(error?.message))
        }

        if (result.code === 200) {
            yield put(setMobileOtpLoader(false))

            yield put(setMobileNumberOtpSuccess(true))
            yield put(loginSuccess(result.data))
            setAuthToken(result?.data?.authToken)
            yield put(mobileOtpSuccess(result.data))
        } else {
            yield put(setMobileOtpLoader(false))

            yield put(setMobileNumberError(result.message))
        }
    } catch (error) {
        yield put(setMobileOtpLoader(false))
        yield put(
            setMobileNumberError('Something went wrong, Please try again later')
        )
    }
}

export function* resetPassword(data) {
    yield put(setResetPasswordLoader(true))
    yield put(setResetPasswordError(''))
    yield put(setResetPasswordSuccess(false))
    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/reset_password',
            },
            false,
            true
        )

        if (error) {
            yield put(setResetPasswordLoader(false))
            yield put(setResetPasswordError(error?.message))
        }

        if (result.code === 200) {
            yield put(setResetPasswordLoader(false))
            yield put(setResetPasswordSuccess(true))
        } else {
            yield put(setResetPasswordLoader(false))

            yield put(setResetPasswordError(result.message))
        }
    } catch (error) {
        yield put(setResetPasswordLoader(false))
        yield put(
            setResetPasswordError(
                'Something went wrong, Please try again later'
            )
        )
    }
}

export function* countryList(data) {
    yield put(setCountryListLoader(true))
    yield put(setCountryListError(''))
    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'get',
            url: '/country_list',
        })

        if (error) {
            yield put(setCountryListLoader(false))
            yield put(setCountryListError(error?.message))
        }

        if (result.code === 200) {
            yield put(setCountryListLoader(false))
            yield put(countryListSuccess(result?.data))
        } else {
            yield put(setCountryListLoader(false))

            yield put(setCountryListError(result.message))
        }
    } catch (error) {
        yield put(setCountryListLoader(false))
        yield put(
            setCountryListError('Something went wrong, Please try again later')
        )
    }
}

function* Auth() {
    yield all([
        takeLatest(LOGIN, login),
        takeLatest(SIGNUP, signUp),
        takeLatest(OTP_VERIFY, verifyOtp),
        takeLatest(RESEND_OTP, resendOtp),
        takeLatest(FORGET_PASSWORD, forgetPassword),
        takeLatest(RESET_PASSWORD, resetPassword),
        takeLatest(MOBILE_NUMBER__REQUEST, mobileNumber),
        takeLatest(MOBILE_OTP_VERIFY, mobileVerifyOtp),
        takeLatest(COUNTRY_LIST, countryList),
    ])
}

export default Auth
