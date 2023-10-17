import {
    SET_LEAGUE_LIST_LOADER,
    LEAGUE_LIST_SUCCESS,
    LEAGUE_LIST_ERROR,
    SET_MATCH_LIST_LOADER,
    MATCH_LIST_SUCCESS,
    MATCH_LIST_ERROR,
} from '../actionsTypes/homeActionsTypes'

const initialState = {
    leagueListLoder: false,
    leagueListError: '',
    leagueListStatus: false,
    matchListLoader: false,
    matchListError: '',
    matchListStatus: false,
    matchList: [],
}

export default function home(state = initialState, action) {
    switch (action.type) {
        case LEAGUE_LIST_SUCCESS:
            return {
                ...state,
                leagueListStatus: false,
                leagueListResponse: action.payload,
            }
        case LEAGUE_LIST_ERROR:
            return { ...state, leagueListError: action.payload }
        case SET_LEAGUE_LIST_LOADER:
            return { ...state, leagueListLoder: action.payload }
        case MATCH_LIST_SUCCESS:
            return {
                ...state,
                matchListStatus: false,
                matchList:
                    action.payload.offset > 0
                        ? [...state.matchList, ...action?.payload?.data]
                        : action?.payload?.data,
            }
        case MATCH_LIST_ERROR:
            return { ...state, matchListError: action.payload }
        case SET_MATCH_LIST_LOADER:
            return { ...state, matchListLoader: action.payload }
        default:
            return state
    }
}
