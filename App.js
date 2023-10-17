import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Navigation } from './src/navigation'
import configStore from './src/redux'
import SplashScreen from 'react-native-splash-screen'
import { getUniqueId } from 'react-native-device-info'
import { setDeviceId } from './src/utils/helpers/AppHelper'
import {
    backgroundMessages,
    forgroundMessages,
    getInitailNotification,
    getToken,
    onNavigationOpendApp,
    requestUserPermission,
} from './src/config/firebase'
import messaging from '@react-native-firebase/messaging'
import { notificationCount } from './src/redux/actions/settingsActions'

const { store, persistor } = configStore()

class App extends Component {
    async componentDidMount() {
        SplashScreen.hide()
        requestUserPermission()
        await setDeviceId(getUniqueId())

        getToken()
        forgroundMessages(() => store.dispatch(notificationCount()))
        backgroundMessages(() => store.dispatch(notificationCount()))
        onNavigationOpendApp(() => store.dispatch(notificationCount()))
        getInitailNotification(() => store.dispatch(notificationCount()))
    }

    render() {
        return (
            <>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <Navigation />
                    </PersistGate>
                </Provider>
            </>
        )
    }
}

export default App
