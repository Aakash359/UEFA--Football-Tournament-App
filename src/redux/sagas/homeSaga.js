import { all, call, put, takeLatest } from 'redux-saga/effects'

import httpClient from './http-client'
import {
    LEAGUE_LIST_REQUEST,
    MATCH_LIST_REQUEST,
} from '../actionsTypes/homeActionsTypes'
import {
    setLeagueListLoader,
    leagueListError,
    leagueListFailure,
    leagueListSuccess,
    setMatchListLoader,
    matchListError,
    matchListFailure,
    matchListSuccess,
    
} from '../actions/homeAction'

export function* leagueList(data) {
    yield put(setLeagueListLoader(true))
    yield put(leagueListError(''))

    try {
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/league_list',
            },
            false,
            true
        )

        if (error) {
            yield put(setLeagueListLoader(false))
            yield put(leagueListFailure(error))
        }

        if (result.code === 200) {
            yield put(setLeagueListLoader(false))
            yield put(leagueListSuccess(result.data))
        } else {
            yield put(setLeagueListLoader(false))
            yield put(leagueListFailure(error))
            yield put(leagueListError(result.message))
        }
    } catch (error) {
        yield put(setLeagueListLoader(false))
        yield put(
            leagueListError(`Something went wrong, Please try again later`)
        )
    }
}

export function* matchList(data) {
    yield put(setMatchListLoader(true))
    yield put(matchListError(''))

    try {
        const { date } = data.payload
        const matchData = { date }
        const { error, result } = yield call(
            httpClient,
            {
                data: data.payload,
                method: 'post',
                url: '/home_calendar_matches',
            },
            false,
            true
        )

        if (error) {
            yield put(setMatchListLoader(false))
            yield put(matchListFailure(error))
        }

        if (result.code === 200) {
            yield put(setMatchListLoader(false))
            yield put(matchListSuccess({ data: result.data, ...data.payload }))
        } else {
            yield put(setMatchListLoader(false))
            yield put(matchListFailure(error))
            yield put(matchListError(result.message))
        }
    } catch (error) {
        yield put(setMatchListLoader(false))
        yield put(
            matchListError(`Something went wrong, Please try again later`)
        )
    }
}

function* Home() {
    yield all([
        takeLatest(LEAGUE_LIST_REQUEST, leagueList),
        takeLatest(MATCH_LIST_REQUEST, matchList),
    ])
}

export default Home
