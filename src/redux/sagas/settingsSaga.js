import {
    all,
    call,
    put,
    takeEvery,
    takeLatest,
    takeLeading,
} from 'redux-saga/effects'

import httpClient from './http-client'
import {
    ABOUT_US_REQUEST,
    PRIVACY_POLICY_REQUEST,
    TERMS_CONDITION_REQUEST,
    CONTACT_US,
    NOTIFICATION_REQUEST,
    CHANGE_PASSWORD_REQUEST,
    TRANSACTIONS_LIST_REQUEST,
    NOTIFICATION_UPDATE_REQUEST,
    PROFILE_UPLOAD_REQUEST,
    NOTIFICATION_COUNT,
    CLEAR_NOTIFICATION,
} from '../actionsTypes/settingsActionTypes'
import {
    hideLoader,
    showLoader,
    aboutUsFailure,
    aboutUsSuccess,
    setAboutUsError,
    privacyPolicyFailure,
    privacyPolicySuccess,
    setPrivacyPolicyError,
    termsConditionError,
    termsConditionFailure,
    termsConditionSuccess,
    notificationError,
    notificationFailure,
    notificationSuccess,
    setContactUsLoader,
    setContactUsError,
    setContactUsDetails,
    contactUsSuccess,
    setChangePasswordError,
    changePasswordFailure,
    changePasswordSuccess,
    setChangePasswordLoader,
    transactionListError,
    transactionListFailure,
    transactionListSuccess,
    setTransactionListLoader,
    notificationUpdateError,
    notificationUpdateFailure,
    notificationUpdateSuccess,
    profileUploadError,
    profileUploadFailure,
    profileUploadSuccess,
    setProfileUploadLoader,
    notificationCountSuccess,
} from '../actions/settingsActions'
import { logout } from '../actions/authActions'

//==============================Conatct-Api================

export function* contactUs(data) {
    yield put(setContactUsLoader(true))
    const { messsage, subject } = data.payload
    yield put(setContactUsDetails({ messsage, subject }))
    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/contact_us',
            },
            false,
            true
        )

        if (error) {
            yield put(setContactUsLoader(false))
            yield put(setContactUsError(error?.message))
        }

        if (result.code === 200) {
            yield put(setContactUsLoader(false))
            yield put(contactUsSuccess(result.message))
        } else {
            yield put(setContactUsLoader(false))
            yield put(setContactUsError(result.message))
        }
    } catch (error) {
        yield put(setContactUsLoader(false))
        yield put(
            setContactUsError('Something went wrong, Please try again later')
        )
    }
}
//==============================About-US-Api================

export function* aboutUs(data) {
    yield put(showLoader())

    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/fetch_content',
        })

        if (error) {
            yield put(aboutUsFailure(error))
            yield put(hideLoader())
        }

        if (result.code === 200) {
            yield put(aboutUsSuccess(result.data))
            yield put(hideLoader())
        } else {
            yield put(hideLoader())

            yield put(aboutUsFailure(error))
            yield put(setAboutUsError(result.message))
        }
    } catch (error) {
        yield put(hideLoader())
        yield put(
            setAboutUsError(`Something went wrong, Please try again later`)
        )
    }
}

//==============================Privacy-Policy-Api================

export function* privaryPolicy(data) {
    yield put(showLoader())

    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/fetch_content',
        })

        if (error) {
            yield put(privacyPolicyFailure(error))
            yield put(hideLoader())
        }

        if (result.code === 200) {
            yield put(privacyPolicySuccess(result.data))
            yield put(hideLoader())
        } else {
            yield put(hideLoader())

            yield put(privacyPolicyFailure(error))
            yield put(setPrivacyPolicyError(result.message))
        }
    } catch (error) {
        yield put(hideLoader())
        yield put(
            setPrivacyPolicyError(
                `Something went wrong, Please try again later`
            )
        )
    }
}

//==============================Terms & Conditions-Api================

export function* termsCondition(data) {
    yield put(showLoader())

    try {
        const { error, result } = yield call(httpClient, {
            data: data.payload,
            method: 'post',
            url: '/fetch_content',
        })

        if (error) {
            yield put(termsConditionFailure(error))
            yield put(hideLoader())
        }

        if (result.code === 200) {
            yield put(termsConditionSuccess(result.data))
            yield put(hideLoader())
        } else {
            yield put(hideLoader())

            yield put(termsConditionFailure(error))
            yield put(termsConditionError(result.message))
        }
    } catch (error) {
        yield put(hideLoader())
        yield put(
            termsConditionError(`Something went wrong, Please try again later`)
        )
    }
}

//==============================Notification-Api================

export function* notification(data) {
    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/notifications',
            },
            false,
            true
        )

        if (error) {
            yield put(notificationFailure(error))
        }
        if (result.code === 200) {
            yield put(notificationSuccess(result.data))
        } else {
            yield put(notificationFailure(error))
            yield put(notificationError(result.message))
        }
    } catch (error) {
        yield put(
            notificationError(`Something went wrong, Please try again later`)
        )
    }
}

//==============================Change-Password-Api================

export function* changePassword(data) {
    yield put(setChangePasswordLoader(true))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/change_password',
            },
            false,
            true
        )

        if (error) {
            yield put(setChangePasswordLoader(false))
            yield put(changePasswordFailure(error))
        }

        if (result.code === 200) {
            yield put(setChangePasswordLoader(false))
            yield put(logout())
            yield put(changePasswordSuccess(result.data))
        } else {
            yield put(setChangePasswordLoader(false))
            yield put(changePasswordFailure(error))
            yield put(setChangePasswordError(result.message))
        }
    } catch (error) {
        yield put(setChangePasswordLoader(false))
        yield put(
            setChangePasswordError(
                `Something went wrong, Please try again later`
            )
        )
    }
}

//==============================Transaction-List-Api================

export function* transactionList(data) {
    yield put(setTransactionListLoader(true))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/transaction_list',
            },
            false,
            true
        )

        if (error) {
            yield put(setTransactionListLoader(false))
            yield put(transactionListFailure(error))
            yield put(hideLoader())
        }

        if (result.code === 200) {
            yield put(setTransactionListLoader(false))
            yield put(transactionListSuccess(result.data))
        } else {
            yield put(setTransactionListLoader(false))
            yield put(transactionListFailure(error))
            yield put(transactionListError(result.message))
        }
    } catch (error) {
        yield put(setTransactionListLoader(false))
        yield put(
            transactionListError(`Something went wrong, Please try again later`)
        )
    }
}
//=============================Notification-Update-Api================

function* notificationUpdate(data) {
    yield put(showLoader())

    try {
        const { receive_notification } = data.payload

        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'POST',
                url: '/update/notification/settings',
            },
            false,
            true
        )

        if (error) {
            yield put(notificationUpdateFailure(error))
        }
        if (result.code === 200) {
            yield put(notificationUpdateSuccess(result.data))
        } else {
            yield put(notificationUpdateFailure(error))
            yield put(notificationUpdateError(result.message))
        }
    } catch (error) {
        yield put(hideLoader())
        yield put(
            notificationUpdateError(
                `Something went wrong, Please try again later`
            )
        )
    }
}

//=============================Profile-Update-Api===================

export function* profileUpdate(data) {
    yield put(setProfileUploadLoader(true))
    try {
        const { image_url, image_name } = data.payload

        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'POST',
                url: 'update_profile_image',
            },
            false,
            true
        )

        if (error) {
            yield put(setProfileUploadLoader(false))
            yield put(profileUploadFailure(error))
        }
        if (result.code === 200) {
            yield put(setProfileUploadLoader(false))
            yield put(profileUploadSuccess(result.data))
        } else {
            yield put(profileUploadFailure(error))
            yield put(profileUploadError(result.message))
        }
    } catch (error) {
        yield put(setProfileUploadLoader(false))
        yield put(
            profileUploadError(`Something went wrong, Please try again later`)
        )
    }
}

function* notificationCount() {
    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: {},
                method: 'POST',
                url: '/unread_counts',
            },
            false,
            true
        )

        if (error) {
        }
        if (result.code === 200) {
            yield put(
                notificationCountSuccess(result.data?.unreadNotificationCount)
            )
        }
    } catch (error) {}
}

function* clearNotification() {
    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: {},
                method: 'POST',
                url: '/read_all_notification',
            },
            false,
            true
        )

        if (error) {
        }
        if (result.code === 200) {
            yield put(notificationCountSuccess(0))
        }
    } catch (error) {}
}

function* Setting() {
    yield all([
        takeLatest(ABOUT_US_REQUEST, aboutUs),
        takeLatest(PRIVACY_POLICY_REQUEST, privaryPolicy),
        takeLatest(TERMS_CONDITION_REQUEST, termsCondition),
        takeLatest(NOTIFICATION_REQUEST, notification),
        takeLatest(CHANGE_PASSWORD_REQUEST, changePassword),
        takeLatest(TRANSACTIONS_LIST_REQUEST, transactionList),
        takeLatest(NOTIFICATION_UPDATE_REQUEST, notificationUpdate),
        takeLatest(PROFILE_UPLOAD_REQUEST, profileUpdate),
        takeLatest(CONTACT_US, contactUs),
        takeEvery(NOTIFICATION_COUNT, notificationCount),
        takeLatest(CLEAR_NOTIFICATION, clearNotification),
    ])
}

export default Setting
