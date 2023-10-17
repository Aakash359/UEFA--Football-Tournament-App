import { createAction } from 'redux-actions'
import {
    ADD_BANK,
    GET_BANKS,
    GET_BANK_SUCCESS,
    SET_ADD_BANK_ERROR,
    SET_ADD_BANK_LOADER,
    SET_GET_BANK_ERROR,
    SET_GET_BANK_LOADER,
    ADD_BANK_SUCCESS,
    ACCOUNT_VERIFY,
    WITHDRAW_AMOUNT_ERROR,
    WITHDRAW_AMOUNT_FAILED,
    WITHDRAW_AMOUNT_REQUEST,
    WITHDRAW_AMOUNT_SUCCESS,
    SET_WITHDRAW_AMOUNT_LOADER,
} from '../actionsTypes/bankActionsTypes'

export const getBanks = createAction(GET_BANKS)

export const setGetBankLoader = createAction(SET_GET_BANK_LOADER)

export const setGetBankError = createAction(SET_GET_BANK_ERROR)

export const getBankSuccess = createAction(GET_BANK_SUCCESS)

export const addBank = createAction(ADD_BANK)

export const setAddBankLoader = createAction(SET_ADD_BANK_LOADER)

export const setAddBankError = createAction(SET_ADD_BANK_ERROR)

export const addBankSuccess = createAction(ADD_BANK_SUCCESS)

export const accountVerify = createAction(ACCOUNT_VERIFY)

export const withDrawAmountRequest = createAction(WITHDRAW_AMOUNT_REQUEST)

export const withDrawAmountSuccess = createAction(WITHDRAW_AMOUNT_SUCCESS)

export const withDrawAmountFailure = createAction(WITHDRAW_AMOUNT_FAILED)

export const withDrawAmountError   = createAction(WITHDRAW_AMOUNT_ERROR)

export const setWithDrawAmountLoader   = createAction(SET_WITHDRAW_AMOUNT_LOADER)
