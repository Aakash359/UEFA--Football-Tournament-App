import { IS_CONNECTED } from '../actionsTypes/networjActionsTypes'

const initalState = {
    isConnected: true,
}

export default function network(state = initalState, action) {
    switch (action.type) {
        case IS_CONNECTED:
            return { ...state, isConnected: action.payload }
        default:
            return state
    }
}
