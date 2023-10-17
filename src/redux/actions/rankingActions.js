import { createAction } from 'redux-actions'
import {
    RANIKNG_SUCCESS,
    RANIKNG_REQUESTED,
    RANIKNG_FAILURE,
    RANIKNG,
    SET_RANIKNG_ERROR,
    RULE_REGULATION_FAILED,
    RULE_REGULATION_REQUEST,
    RULE_REGULATION_SUCCESS,
    SET_RULE_REGULATION_ERROR,
    ADD_GROUP_FAILED,
    ADD_GROUP_REQUEST,
    ADD_GROUP_SUCCESS,
    SET_ADD_GROUP_ERROR,
    MY_GROUP_FAILED,
    MY_GROUP_REQUEST,
    MY_GROUP_SUCCESS,
    SET_MY_GROUP_ERROR,
    My_GROUP_SHOW_LOADER,
    ADD_GROUP_SHOW_LOADER,
    ACCEPT_GROUP_FAILED,
    ACCEPT_GROUP_REQUEST,
    ACCEPT_GROUP_SHOW_LOADER,
    ACCEPT_GROUP_SUCCESS,
    SET_ACCEPT_MY_GROUP_ERROR,
    REJECT_GROUP_FAILED,
    REJECT_GROUP_REQUEST,
    REJECT_GROUP_SHOW_LOADER,
    REJECT_GROUP_SUCCESS,
    SET_REJECT_GROUP_ERROR
} from '../actionsTypes/rankingActionTypes'
import {
    SHOW_LOADER,HIDE_LOADER
} from '../actionsTypes/authActionsTypes'

export const ranking = createAction(RANIKNG)

export const rankingRequest = createAction(RANIKNG_REQUESTED)

export const rankingSuccess = createAction(RANIKNG_SUCCESS)

export const rankingFailure = createAction(RANIKNG_FAILURE)

export const setRankingError = createAction(SET_RANIKNG_ERROR)

export const showLoader = createAction(SHOW_LOADER)

export const hideLoader = createAction(HIDE_LOADER)

export const ruleRegulationRequest = createAction(RULE_REGULATION_REQUEST)

export const ruleRegulationSuccess = createAction(RULE_REGULATION_SUCCESS)

export const ruleRegulationFailure = createAction(RULE_REGULATION_FAILED)

export const setRuleRegulationError = createAction(SET_RULE_REGULATION_ERROR)

export const addGroupRequest = createAction(ADD_GROUP_REQUEST)

export const addGroupSuccess = createAction(ADD_GROUP_SUCCESS)

export const addGroupFailure = createAction(ADD_GROUP_FAILED)
export const addGroupShowLoader = createAction(ADD_GROUP_SHOW_LOADER)

export const setAddGroupError = createAction(SET_ADD_GROUP_ERROR)

export const myGroupRequest = createAction(MY_GROUP_REQUEST)

export const myGroupSuccess = createAction(MY_GROUP_SUCCESS)

export const myGroupFailure = createAction(MY_GROUP_FAILED)

export const myGroupShowLoader = createAction(My_GROUP_SHOW_LOADER)

export const setMyGroupError = createAction(SET_MY_GROUP_ERROR)

export const acceptGroupRequest = createAction(ACCEPT_GROUP_REQUEST)

export const acceptGroupSuccess = createAction(ACCEPT_GROUP_SUCCESS)

export const acceptGroupFailure = createAction(ACCEPT_GROUP_FAILED)

export const acceptGroupShowLoader = createAction(ACCEPT_GROUP_SHOW_LOADER)

export const setAcceptGroupError = createAction(SET_ACCEPT_MY_GROUP_ERROR)

export const rejectGroupRequest = createAction(REJECT_GROUP_REQUEST)

export const rejectGroupSuccess = createAction(REJECT_GROUP_SUCCESS)

export const rejectGroupFailure = createAction(REJECT_GROUP_FAILED)

export const rejectGroupShowLoader = createAction(REJECT_GROUP_SHOW_LOADER)

export const setRejectGroupError = createAction(SET_REJECT_GROUP_ERROR)