import { HIDE_LOADER, SHOW_LOADER } from '../actionsTypes/rankingActionTypes'
import {
    RANIKNG_REQUESTED,
    RANIKNG_SUCCESS,
    SET_RANIKNG_ERROR,
    SET_RULE_REGULATION_ERROR,
    RULE_REGULATION_SUCCESS,
    SET_ADD_GROUP_ERROR,
    ADD_GROUP_SUCCESS,
    SET_MY_GROUP_ERROR,
    MY_GROUP_SUCCESS,
    ADD_GROUP_SHOW_LOADER,
    My_GROUP_SHOW_LOADER,
    ACCEPT_GROUP_SUCCESS,
    SET_ACCEPT_MY_GROUP_ERROR,
    ACCEPT_GROUP_SHOW_LOADER,
    REJECT_GROUP_SUCCESS,
    SET_REJECT_GROUP_ERROR,
    REJECT_GROUP_SHOW_LOADER,
} from '../actionsTypes/rankingActionTypes'

const initalState = {
    ruleRegulationStatus: false,
    rankingStatus: false,
    isLoading: false,
    rankingError: '',
    addGroupError: '',
    addGroup: false,
    myGroup: false,
    myGroupError: '',
    myGroupLoader: false,
    addGroupLoader: false,
    acceptGroup: false,
    acceptGroupError: '',
    acceptGroupLoader: false,
    rejectGroup: false,
    rejectGroupError: '',
    rejectGroupLoader: false,
    ranking: [],
}

export default function auth(state = initalState, action) {
    switch (action.type) {
        case RANIKNG_SUCCESS:
            return {
                ...state,
                ranking: action.payload,
                rankingStatus: true,
            }
        case SET_RANIKNG_ERROR:
            return { ...state, rankingError: action.payload }
        case RULE_REGULATION_SUCCESS:
            return {
                ...state,
                ruleRegulation: action.payload,
                ruleRegulationStatus: true,
            }
        case SET_RULE_REGULATION_ERROR:
            return { ...state, ruleRegulationError: action.payload }
        case ADD_GROUP_SUCCESS:
            return { ...state, addGroup: action.payload, addGroupError: '' }
        case ADD_GROUP_SHOW_LOADER:
            return { ...state, addGroupLoader: action.payload }
        case SET_ADD_GROUP_ERROR:
            return { ...state, addGroupError: action.payload }
        case MY_GROUP_SUCCESS:
            return { ...state, myGroup: action.payload }
        case My_GROUP_SHOW_LOADER:
            return { ...state, myGroupLoader: action.payload }
        case SET_MY_GROUP_ERROR:
            return { ...state, myGroupError: action.payload }
        case ACCEPT_GROUP_SUCCESS:
            return {
                ...state,
                acceptGroup: action.payload,
                acceptGroupError: '',
            }
        case ACCEPT_GROUP_SHOW_LOADER:
            return { ...state, acceptGroupLoader: action.payload }
        case SET_ACCEPT_MY_GROUP_ERROR:
            return { ...state, acceptGroupError: action.payload }
        case REJECT_GROUP_SUCCESS:
            return {
                ...state,
                rejectGroup: action.payload,
                rejectGroupError: '',
            }
        case REJECT_GROUP_SHOW_LOADER:
            return { ...state, rejectGroupLoader: action.payload }
        case SET_REJECT_GROUP_ERROR:
            return { ...state, rejectGroupError: action.payload }
        case SHOW_LOADER:
            return { ...state, isLoading: true }
        case HIDE_LOADER:
            return { ...state, isLoading: false }
        default:
            return state
    }
}
