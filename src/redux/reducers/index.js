import AsyncStorage from '@react-native-community/async-storage'
import { persistCombineReducers } from 'redux-persist'
import auth from './authReducer'
import ranking from './rankingReducer'
import network from './networkReducer'
import settings from './settingsReducer'
import profile from './profileReducer'
import bank from './bankReducer'
import home from './homeReducer'

const config = {
    // blacklist: ['settings'],
    key: 'root',
    storage: AsyncStorage,
}

const reducers = persistCombineReducers(config, {
    auth,
    ranking,
    settings,
    profile,
    network,
    bank,
    home,
})

export default reducers
