import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { createNetworkMiddleware } from 'react-native-offline'
import rootReducer from './reducers'
import sagas from './sagas'
import logger from 'redux-logger'

const configStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const networkMiddleware = createNetworkMiddleware({
        queueReleaseThrottle: 200,
    })

    const composeEnhancers =
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true,
                traceLimit: 25,
            })) ||
        compose

    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(networkMiddleware, sagaMiddleware, logger)
        )
    )

    const persistor = persistStore(store)

    sagaMiddleware.run(sagas)

    return {
        persistor,
        store,
    }
}

export default configStore
