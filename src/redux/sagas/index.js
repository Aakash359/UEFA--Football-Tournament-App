import { all, fork } from 'redux-saga/effects'
import { networkSaga } from 'react-native-offline'
import Auth from './authSaga'
import Ranking from './rankingSaga'
import Setting from './settingsSaga'
import Profile from './profileSaga'
import Bank from './bankSaga'
import Home from './homeSaga'

const sagas = function* sagas() {
    yield all([
        fork(networkSaga, { pingInterval: 20000 }),
        Auth(),
        Ranking(),
        Setting(),
        Profile(),
        Bank(),
        Home(),
    ])
}

export default sagas
