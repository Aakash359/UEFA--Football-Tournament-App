import { SHOW_LOADER, HIDE_LOADER } from '../actionsTypes/authActionsTypes'
import {
    ABOUT_US_SUCCESS,
    PRIVACY_POLICY_SUCCESS,
    SET_ABOUT_US_ERROR,
    PRIVACY_POLICY_ERROR,
    TERMS_CONDITION_ERROR,
    TERMS_CONDITION_SUCCESS,
    CONTACT_US_SUCCESS,
    SET_CONTACT_US_ERROR,
    SET_CONTACT_US_LOADER,
    NOTIFICATION_ERROR,
    CHANGE_PASSWORD_SUCCESS,
    SET_CHANGE_PASSWORD_ERROR,
    CHANGE_PASSWORD_LOADER,
    TRANSACTIONS_LIST_SUCCESS,
    TRANSACTIONS_LIST_ERROR,
    TRANSACTIONS_LIST_LOADER,
    NOTIFICATION_UPDATE_SUCCESS,
    NOTIFICATION_UPDATE_ERROR,
    PROFILE_UPLOAD_SUCCESS,
    PROFILE_UPLOAD_ERROR,
    SET_PROFILE_UPLOAD_LOADER,
    NOTIFICATION_COUNT_SUCCESS,
    NOTIFICATION_SUCCESS,
} from '../actionsTypes/settingsActionTypes'

const initialState = {
    isLoading: false,
    aboutUsStatus: false,
    aboutUsError: '',
    privaryPolicyError: '',
    privaryPolicyStatus: false,
    termsConditionError: '',
    termsConditionStatus: false,
    contactUsError: '',
    contactUsLoading: false,
    contactUsSuccess: false,
    notificationError: '',
    notificationStatus: false,
    changePasswordError: '',
    changePasswordStatus: false,
    changePasswordLoder: false,
    transactioListError: '',
    transactioListStatus: false,
    transactionListResponse: { transactionList: [], winningAmount: 0 },
    transactionListLoader: false,
    notificationUpdateError: '',
    notificationUpdateStatus: false,
    notificationUpdateResponse: {},
    notification: false,
    profileUploadError: '',
    profileUploadStatus: false,
    profileUploadResponse: {},
    profileUploadLoader: false,
    notificationCount: 0,
    notiCount: 0,
    notificationList: [],
}

export default function settings(state = initialState, action) {
    switch (action.type) {
        case CONTACT_US_SUCCESS:
            return {
                ...state,
                contactUsSuccess: action.payload,
                token: action.payload.authToken,
            }
        case SET_CONTACT_US_LOADER:
            return { ...state, contactUsLoading: action.payload }
        case SET_CONTACT_US_ERROR:
            return { ...state, contactUsError: action.payload }
        case ABOUT_US_SUCCESS:
            return { ...state, aboutUs: action.payload, aboutUsStatus: true }
        case SET_ABOUT_US_ERROR:
            return { ...state, aboutUsError: action.payload }
        case PRIVACY_POLICY_SUCCESS:
            return {
                ...state,
                privaryPolicyStatus: true,
                privaryPolicyResponse: action.payload,
            }
        case PRIVACY_POLICY_ERROR:
            return { ...state, privaryPolicyError: action.payload }
        case TERMS_CONDITION_SUCCESS:
            return { ...state, termsConditionResponse: action.payload }
        case TERMS_CONDITION_ERROR:
            return { ...state, termsConditionError: action.payload }

        case NOTIFICATION_ERROR:
            return { ...state, notificationError: action.payload }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                changePasswordStatus: false,
                changePasswordResponse: action.payload,
            }
        case SET_CHANGE_PASSWORD_ERROR:
            return { ...state, changePasswordError: action.payload }
        case CHANGE_PASSWORD_LOADER:
            return { ...state, changePasswordLoder: action.payload }
        case TRANSACTIONS_LIST_SUCCESS:
            return {
                ...state,
                transactioListStatus: false,
                transactionListResponse: action.payload,
            }
        case TRANSACTIONS_LIST_ERROR:
            return { ...state, transactioListError: action.payload }
        case TRANSACTIONS_LIST_LOADER:
            return { ...state, transactionListLoader: action.payload }
        case NOTIFICATION_UPDATE_SUCCESS:
            return {
                ...state,
                notificationUpdateStatus: false,
                notificationUpdateResponse: action.payload,
                notification:
                    action.payload.receiveNotification === 'A' ? true : false,
            }
        case NOTIFICATION_UPDATE_ERROR:
            return { ...state, notificationUpdateError: action.payload }
        case PROFILE_UPLOAD_SUCCESS:
            return {
                ...state,
                profileUploadStatus: false,
                profileUploadResponse: action.payload,
            }
        case PROFILE_UPLOAD_ERROR:
            return { ...state, profileUploadError: action.payload }
        case SET_PROFILE_UPLOAD_LOADER:
            return { ...state, profileUploadLoader: action.payload }
        case SHOW_LOADER:
            return { ...state, isLoading: true }
        case HIDE_LOADER:
            return { ...state, isLoading: false }
        case NOTIFICATION_COUNT_SUCCESS:
            return {
                ...state,
                notificationCount: action?.payload,
                notiCount: action?.payload,
            }
        case NOTIFICATION_SUCCESS:
            return { ...state, notificationList: action?.payload }
        default:
            return state
    }
}
