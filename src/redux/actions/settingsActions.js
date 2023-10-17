import { createAction } from 'redux-actions'

import { SHOW_LOADER, HIDE_LOADER } from '../actionsTypes/authActionsTypes'
import {
    ABOUT_US_REQUEST,
    ABOUT_US_SUCCESS,
    ABOUT_US_FAILED,
    SET_ABOUT_US_DETAILS,
    SET_ABOUT_US_ERROR,
    PRIVACY_POLICY_REQUEST,
    PRIVACY_POLICY_SUCCESS,
    PRIVACY_POLICY_FAILED,
    PRIVACY_POLICY_ERROR,
    TERMS_CONDITION_ERROR,
    TERMS_CONDITION_REQUEST,
    TERMS_CONDITION_FAILED,
    TERMS_CONDITION_SUCCESS,
    CONTACT_US,
    CONTACT_US_FAILURE,
    CONTACT_US_SUCCESS,
    SET_CONTACT_US_DETAILS,
    SET_CONTACT_US_ERROR,
    SET_CONTACT_US_LOADER,
    NOTIFICATION_REQUEST,
    NOTIFICATION_SUCCESS,
    NOTIFICATION_ERROR,
    NOTIFICATION_FAILED,
    NOTIFICATION_DETAILS,
    CHANGE_PASSWORD_LOADER,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    SET_CHANGE_PASSWORD_ERROR,
    CHANGE_PASSWORD_FAILED,
    TRANSACTIONS_LIST_REQUEST,
    TRANSACTIONS_LIST_SUCCESS,
    TRANSACTIONS_LIST_ERROR,
    TRANSACTIONS_LIST_FAILED,
    TRANSACTIONS_LIST_LOADER,
    NOTIFICATION_UPDATE_REQUEST,
    NOTIFICATION_UPDATE_SUCCESS,
    NOTIFICATION_UPDATE_ERROR,
    NOTIFICATION_UPDATE_FAILED,
    PROFILE_UPLOAD_REQUEST,
    PROFILE_UPLOAD_SUCCESS,
    PROFILE_UPLOAD_ERROR,
    PROFILE_UPLOAD_FAILED,
    SET_PROFILE_UPLOAD_LOADER,
    NOTIFICATION_COUNT,
    NOTIFICATION_COUNT_SUCCESS,
    CLEAR_NOTIFICATION,
} from '../actionsTypes/settingsActionTypes'

// ================= ABOUT_US_REQUEST =================
export const setAboutDetails = createAction(SET_ABOUT_US_DETAILS)

export const showLoader = createAction(SHOW_LOADER)

export const hideLoader = createAction(HIDE_LOADER)

export const aboutUsRequest = createAction(ABOUT_US_REQUEST)

export const aboutUsSuccess = createAction(ABOUT_US_SUCCESS)

export const aboutUsFailure = createAction(ABOUT_US_FAILED)

export const setAboutUsError = createAction(SET_ABOUT_US_ERROR)

// ================= PRIVACY_US_REQUEST =================
export const privacyPolicyRequest = createAction(PRIVACY_POLICY_REQUEST)

export const privacyPolicySuccess = createAction(PRIVACY_POLICY_SUCCESS)

export const privacyPolicyFailure = createAction(PRIVACY_POLICY_FAILED)

export const setPrivacyPolicyError = createAction(PRIVACY_POLICY_ERROR)

// ================= TERMS_REQUEST =================
export const termsConditionRequest = createAction(TERMS_CONDITION_REQUEST)

export const termsConditionSuccess = createAction(TERMS_CONDITION_SUCCESS)

export const termsConditionFailure = createAction(TERMS_CONDITION_FAILED)

export const termsConditionError = createAction(TERMS_CONDITION_ERROR)

// ================= CONTACT_US_REQUEST =================
export const contactUs = createAction(CONTACT_US)
export const contactUsSuccess = createAction(CONTACT_US_SUCCESS)
export const contactUsFailure = createAction(CONTACT_US_FAILURE)
export const setContactUsError = createAction(SET_CONTACT_US_ERROR)
export const setContactUsLoader = createAction(SET_CONTACT_US_LOADER)
export const setContactUsDetails = createAction(SET_CONTACT_US_DETAILS)

// ================= NOTIFICATION_LIST_REQUEST =================
export const notificationRequest = createAction(NOTIFICATION_REQUEST)

export const notificationSuccess = createAction(NOTIFICATION_SUCCESS)

export const notificationFailure = createAction(NOTIFICATION_FAILED)

export const notificationError = createAction(NOTIFICATION_ERROR)

export const notificationDetails = createAction(NOTIFICATION_DETAILS)

// ================= TRANSACTIONS_LIST_REQUEST =================
export const transactionListRequest = createAction(TRANSACTIONS_LIST_REQUEST)

export const transactionListSuccess = createAction(TRANSACTIONS_LIST_SUCCESS)

export const transactionListFailure = createAction(TRANSACTIONS_LIST_FAILED)

export const transactionListError = createAction(TRANSACTIONS_LIST_ERROR)

export const setTransactionListLoader = createAction(TRANSACTIONS_LIST_LOADER)

// ================= CHANGE_PASSWORD_REQUEST =================
export const changePasswordRequest = createAction(CHANGE_PASSWORD_REQUEST)

export const setchangePasswordSuccess = createAction(CHANGE_PASSWORD_SUCCESS)

export const changePasswordFailure = createAction(CHANGE_PASSWORD_FAILED)

export const setChangePasswordError = createAction(SET_CHANGE_PASSWORD_ERROR)

export const setChangePasswordLoader = createAction(CHANGE_PASSWORD_LOADER)

// ================= NOTIFICATION_UPDATE_REQUEST =================
export const notificationUpdateRequest = createAction(
    NOTIFICATION_UPDATE_REQUEST
)

export const notificationUpdateSuccess = createAction(
    NOTIFICATION_UPDATE_SUCCESS
)

export const notificationUpdateFailure = createAction(
    NOTIFICATION_UPDATE_FAILED
)

export const notificationUpdateError = createAction(NOTIFICATION_UPDATE_ERROR)

// ================= PROFILE_UPLOAD_REQUEST =================
export const profileUploadRequest = createAction(PROFILE_UPLOAD_REQUEST)

export const profileUploadSuccess = createAction(PROFILE_UPLOAD_SUCCESS)

export const profileUploadFailure = createAction(PROFILE_UPLOAD_FAILED)

export const profileUploadError = createAction(PROFILE_UPLOAD_ERROR)

export const setProfileUploadLoader = createAction(SET_PROFILE_UPLOAD_LOADER)

export const notificationCount = createAction(NOTIFICATION_COUNT)

export const notificationCountSuccess = createAction(NOTIFICATION_COUNT_SUCCESS)

export const clearNotification = createAction(CLEAR_NOTIFICATION)
