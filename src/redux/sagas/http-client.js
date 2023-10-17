import { call, select, put, delay } from 'redux-saga/effects'
import AxiosInstance from '../../utils/axiosInstance'
import {
    hideLoader,
    logout,
    setLoginError,
    showLoader,
} from '../actions/authActions'

function* HttpClient(payload, isLoader = false, authorization = false) {
    const networkStatus = yield select(
        ({ network: { isConnected } }) => isConnected
    )

    if (!networkStatus) {
        alert("Please make sure you're connected with internet.")

        return {
            error: true,
            result: null,
        }
    }

    if (isLoader) {
        yield put(showLoader())
        yield delay(250)
    }
    const data = { ...payload }

    if (authorization) {
        const authToken = yield select(({ auth: { token } }) => token)
        const tempUser = yield select(({ auth: { tempUser } }) => tempUser)

        const token = authToken || tempUser?.authToken || null

        if (token) {
            data.headers = {
                'x-authorization': token,
                Authorization: token,
            }
        } else {
            yield put(hideLoader())

            return {
                error: true,
                result: null,
            }
        }
    }

    try {
        const { data: result } = yield call(AxiosInstance, data)

        if (result?.code === 240) {
            yield put(setLoginError(res?.data?.message))
            yield put(logout())
        }

        return {
            error: null,
            result,
        }
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            const message =
                "Please make sure you're connected with internet or our servers are not responding."
        } else if (error.code === 401) {
            yield delay(250)
        } else {
        }

        return {
            error,
            result: null,
        }
    }
}

export default HttpClient
