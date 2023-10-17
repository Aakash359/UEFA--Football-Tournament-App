import {
    ADD_BANK_SUCCESS,
    GET_BANK_SUCCESS,
    SET_ADD_BANK_ERROR,
    SET_ADD_BANK_LOADER,
    SET_GET_BANK_ERROR,
    SET_GET_BANK_LOADER,
    SET_WITHDRAW_AMOUNT_LOADER,
    WITHDRAW_AMOUNT_ERROR,
    WITHDRAW_AMOUNT_SUCCESS
} from '../actionsTypes/bankActionsTypes'

const initialState = {
    accounts: [],
    getBankLoader: false,
    getBankError: '',
    addBankLoader: false,
    addBankError: '',
    withDrawAmountError:'',
    withDrawAmountResponse:null,
    withDrawAmountLoader:false,
    
}

export default function bank(state = initialState, { type, payload }) {
    switch (type) {
        case SET_GET_BANK_LOADER:
            return { ...state, getBankLoader: payload }
        case SET_GET_BANK_ERROR:
            return { ...state, getBankError: payload }
        case GET_BANK_SUCCESS:
            return { ...state, accounts: payload }
        case SET_ADD_BANK_LOADER:
            return { ...state, addBankLoader: payload }
        case SET_ADD_BANK_ERROR:
            return { ...state, addBankError: payload }
        case ADD_BANK_SUCCESS:
            return { ...state, accounts: [...state.accounts, payload] }
              
            case WITHDRAW_AMOUNT_SUCCESS:
                return { ...state, withDrawAmountResponse: payload,withDrawAmountError:'' };
        case WITHDRAW_AMOUNT_ERROR:
                return { ...state, withDrawAmountError: payload };
                case SET_WITHDRAW_AMOUNT_LOADER:
                    return { ...state, withDrawAmountLoader: payload } 
        default:
            return state
    }
}
