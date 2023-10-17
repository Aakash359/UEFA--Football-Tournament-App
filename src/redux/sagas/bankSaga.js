import { all, call, put, takeLatest} from 'redux-saga/effects'
import {
    addBankSuccess,
    getBankSuccess,
    setAddBankError,
    setAddBankLoader,
    setGetBankError,
    setGetBankLoader,
    addBank as addBankAction,
    setWithDrawAmountLoader,
    withDrawAmountError,
    withDrawAmountFailure,
    withDrawAmountSuccess,
} from '../actions/bankActions'
import {
    ADD_BANK,
    GET_BANKS,
    ACCOUNT_VERIFY,
    WITHDRAW_AMOUNT_REQUEST,
} from '../actionsTypes/bankActionsTypes'

import httpClient from './http-client'

export function* getBanks(data) {
    yield put(setGetBankLoader(true))
    yield put(setGetBankError(''))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'get',
                url: '/user_bank_list',
            },
            false,
            true
        )

        if (error) {
            yield put(setGetBankLoader(false))
            yield put(setGetBankError(error?.message))
        }

        if (result.code === 200) {
            yield put(setGetBankLoader(false))
            yield put(getBankSuccess(result.data))
        } else {
            yield put(setGetBankLoader(false))

            yield put(setGetBankError(result.message))
        }
    } catch (error) {
        yield put(setGetBankLoader(false))
        yield put(
            setGetBankError('Something went wrong, Please try again later')
        )
    }
}

export function* accountVerify(data) {
    yield put(setAddBankLoader(true))
    yield put(setAddBankError(''))

    try {
        const { password, ...addBankData } = data.payload
        const accountVerifyData = { password }
        const { error, result } = yield call(
            httpClient,
            {
                data: accountVerifyData,
                method: 'post',
                url: '/verify_password',
            },
            false,
            true
        )

        if (error) {
            yield put(setAddBankLoader(false))
            yield put(setAddBankError(error?.message))
        }

        if (result.code === 200) {
            yield put(addBankAction(addBankData))
        } else {
            yield put(setAddBankLoader(false))

            yield put(setAddBankError(result.message))
        }
    } catch (error) {
        yield put(setAddBankLoader(false))
        yield put(
            setAddBankError('Something went wrong, Please try again later')
        )
    }
}

export function* addBank(data) {
    yield put(setAddBankLoader(true))
    yield put(setAddBankError(''))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/add_new_bank_account',
            },
            false,
            true
        )

        if (error) {
            yield put(setAddBankLoader(false))
            yield put(setAddBankError(error?.message))
        }

        if (result.code === 200) {
            yield put(setAddBankLoader(false))
            yield put(addBankSuccess(result.data))
        } else {
            yield put(setAddBankLoader(false))

            yield put(setAddBankError(result.message))
        }
    } catch (error) {
        yield put(setAddBankLoader(false))
        yield put(
            setAddBankError('Something went wrong, Please try again later')
        )
    }
}
export function* withDrawAmount(data) {
    yield put(setWithDrawAmountLoader(true))
    yield put(withDrawAmountError(''))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/withdraw_money_bank',
            },
            false,
            true
        )

        if (error) {
            yield put(setWithDrawAmountLoader(false))
            yield put(withDrawAmountError(error?.message))
        }

        if (result.code === 200) {
            yield put(setWithDrawAmountLoader(false))
            yield put(withDrawAmountSuccess(result.data))
        } else {
            yield put(setWithDrawAmountLoader(false))

            yield put(withDrawAmountError(result.message))
        }
    } catch (error) {
        yield put(setWithDrawAmountLoader(false))
        yield put(
            withDrawAmountError('Something went wrong, Please try again later')
        )
    }
}

function* Bank() {
    yield all([
        takeLatest(ADD_BANK, addBank),
        takeLatest(GET_BANKS, getBanks),
        takeLatest(ACCOUNT_VERIFY, accountVerify),        
        takeLatest(WITHDRAW_AMOUNT_REQUEST, withDrawAmount),
    ])
}

export default Bank
