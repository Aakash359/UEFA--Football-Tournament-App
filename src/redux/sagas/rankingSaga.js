import { all, call, put, takeLatest, takeLeading } from 'redux-saga/effects'

import httpClient from './http-client'
import { Alert } from 'react-native'
import {
    rankingFailure,
    rankingRequest,
    rankingSuccess,
    hideLoader,
    showLoader,
    setRankingError,
    ruleRegulationFailure,
    ruleRegulationSuccess,
    setRuleRegulationError,
    addGroupFailure,
    addGroupSuccess,
    setAddGroupError,
    myGroupFailure,
    myGroupSuccess,
    setMyGroupError,
    addGroupShowLoader,
    acceptGroupFailure,
    acceptGroupShowLoader,
    acceptGroupSuccess,
    setAcceptGroupError,
    rejectGroupFailure,
    rejectGroupSuccess,
    rejectGroupShowLoader,
    setRejectGroupError,
    myGroupRequest,
    myGroupShowLoader,
} from '../actions/rankingActions'

import {
    RANIKNG,
    RULE_REGULATION_REQUEST,
    ADD_GROUP_REQUEST,
    MY_GROUP_REQUEST,
    ACCEPT_GROUP_REQUEST,
    REJECT_GROUP_REQUEST,
} from '../actionsTypes/rankingActionTypes'

export function* ranking(data) {
    yield put(showLoader())
    yield put(rankingRequest())
    yield put(setRankingError(''))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/player_ranking',
            },
            false,
            true
        )

        if (error) {
            yield put(rankingFailure(error))
            yield put(hideLoader())
        }

        if (result.code === 200) {
            yield put(rankingSuccess(result.data))
            yield put(hideLoader())
        } else {
            yield put(hideLoader())

            yield put(rankingFailure(error))
            yield put(setRankingError(result.message))
        }
    } catch (error) {
        yield put(hideLoader())
        yield put(
            setRankingError(`Something went wrong, Please try again later`)
        )
    }
}

export function* ruleRegulation(data) {
    yield put(showLoader())

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/league_rules',
            },
            false,
            true
        )

        if (error) {
            yield put(ruleRegulationFailure(error))
            yield put(hideLoader())
        }

        if (result.code === 200) {
            yield put(ruleRegulationSuccess(result.data))
            yield put(hideLoader())
        } else {
            yield put(hideLoader())

            yield put(ruleRegulationFailure(error))
            yield put(setRuleRegulationError(result.message))
        }
    } catch (error) {
        yield put(hideLoader())
        yield put(
            setRuleRegulationError(
                `Something went wrong, Please try again later`
            )
        )
    }
}
export function* addGroup(data) {
    yield put(addGroupShowLoader(true))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/create_group',
            },
            false,
            true
        )

        if (error) {
            yield put(addGroupFailure(error))
            yield put(addGroupShowLoader(false))
        }

        if (result.code === 200) {
            yield put(addGroupSuccess(result.data))
            yield put(addGroupShowLoader(false))
        } else {
            yield put(addGroupShowLoader(false))
            yield put(addGroupFailure(error))
            yield put(setAddGroupError(result.message))
        }
    } catch (error) {
        yield put(addGroupShowLoader(false))
        yield put(
            setAddGroupError(`Something went wrong, Please try again later`)
        )
    }
}

export function* myGroupList(data) {
    yield put(setMyGroupError(''))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/my_groups',
            },
            false,
            true
        )

        if (error) {
            yield put(myGroupFailure(error))
            yield put(myGroupShowLoader(false))
        }

        if (result.code === 200) {
            yield put(myGroupSuccess(result.data))
            yield put(myGroupShowLoader(false))
        } else {
            yield put(myGroupShowLoader(false))

            yield put(myGroupFailure(error))
            yield put(setMyGroupError(result.message))
        }
    } catch (error) {
        yield put(myGroupShowLoader(false))
        yield put(
            setMyGroupError(`Something went wrong, Please try again later`)
        )
    }
}

export function* acceptGroup(data) {
    yield put(acceptGroupShowLoader(true))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/accept_invite',
            },
            false,
            true
        )

        if (error) {
            yield put(acceptGroupFailure(error))
            yield put(acceptGroupShowLoader(false))
        }

        if (result.code === 200) {
            yield put(acceptGroupSuccess(result.data))
            yield put(myGroupRequest())
            yield put(acceptGroupShowLoader(false))
        } else {
            yield put(acceptGroupShowLoader(false))
            yield put(acceptGroupFailure(error))
            yield put(setAcceptGroupError(result.message))
        }
    } catch (error) {
        yield put(acceptGroupShowLoader(false))
        yield put(
            setAcceptGroupError(`Something went wrong, Please try again later`)
        )
    }
}

export function* rejectGroup(data) {
    yield put(rejectGroupShowLoader(true))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/reject_invite',
            },
            false,
            true
        )

        if (error) {
            yield put(rejectGroupFailure(error))
            yield put(rejectGroupShowLoader(false))
        }

        if (result.code === 200) {
            yield put(rejectGroupSuccess(result.data))
            yield put(myGroupRequest())
            yield put(rejectGroupShowLoader(false))
        } else {
            yield put(rejectGroupShowLoader(false))
            yield put(rejectGroupFailure(error))
            yield put(setRejectGroupError(result.message))
        }
    } catch (error) {
        yield put(rejectGroupShowLoader(false))
        yield put(
            setRejectGroupError(`Something went wrong, Please try again later`)
        )
    }
}

function* Ranking() {
    yield all([
        takeLatest(RANIKNG, ranking),
        takeLatest(RULE_REGULATION_REQUEST, ruleRegulation),
        takeLatest(ADD_GROUP_REQUEST, addGroup),
        takeLatest(MY_GROUP_REQUEST, myGroupList),
        takeLatest(ACCEPT_GROUP_REQUEST, acceptGroup),
        takeLatest(REJECT_GROUP_REQUEST, rejectGroup),
    ])
}

export default Ranking
