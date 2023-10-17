import { createAction } from 'redux-actions'
import {
    LEAGUE_LIST_REQUEST,
    LEAGUE_LIST_SUCCESS,
    LEAGUE_LIST_ERROR,
    LEAGUE_LIST_FAILED,
    SET_LEAGUE_LIST_LOADER,
    MATCH_LIST_REQUEST,
    MATCH_LIST_SUCCESS,
    MATCH_LIST_ERROR,
    MATCH_LIST_FAILED,
    SET_MATCH_LIST_LOADER,
} from '../actionsTypes/homeActionsTypes'

// ================= LEAGUE_LIST_REQUEST =================
export const leagueListRequest = createAction(LEAGUE_LIST_REQUEST)

export const leagueListSuccess = createAction(LEAGUE_LIST_SUCCESS)

export const leagueListFailure = createAction(LEAGUE_LIST_FAILED)

export const leagueListError   = createAction(LEAGUE_LIST_ERROR)

export const setLeagueListLoader = createAction(SET_LEAGUE_LIST_LOADER)


// ================= MATCH_LIST_REQUEST =================
export const matchListRequest = createAction(MATCH_LIST_REQUEST)

export const matchListSuccess = createAction(MATCH_LIST_SUCCESS)

export const matchListFailure = createAction(MATCH_LIST_FAILED)

export const matchListError   = createAction(MATCH_LIST_ERROR)

export const setMatchListLoader = createAction(SET_MATCH_LIST_LOADER)