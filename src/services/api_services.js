import Axios from 'axios'
import { log } from 'react-native-reanimated'
import { getAuthToken } from '../utils/helpers/AuthHelper'
import configStore from '../redux'
import { logout, setLoginError } from '../redux/actions/authActions'

const { store } = configStore()

export const getAuthorization = async (url, defaultConfig = null) => {
    let token = await getAuthToken()
    let config = {
        ...defaultConfig,
        headers: {
            ...defaultConfig?.headers,
            Authorization: defaultConfig?.headers?.Authorization || `${token}`,
        },
    }
    const data = Axios.get(url, config)
    data.then((res) => {
        if (res?.data?.code === 240) {
            store.dispatch(setLoginError(res?.data?.message))
            store.dispatch(logout())
        }
    })
    return data
}

export const getAuthorizationRapid = async (url, defaultConfig = null) => {
    let token = await getAuthToken()
    let config = {
        ...defaultConfig,
        headers: {
            ...defaultConfig?.headers,
            Authorization: defaultConfig?.headers?.Authorization || `${token}`,
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key':
                'f22640f614msh40892d5d17fc495p1c6362jsn04f438e4fa41',
        },
    }
    return Axios.get(url, config)
}

export const postAuthorization = async (
    url,
    data = {},
    defaultConfig = null
) => {
    let token = await getAuthToken()
    let config = {
        ...defaultConfig,
        headers: {
            ...defaultConfig?.headers,
            Authorization: defaultConfig?.headers?.Authorization || `${token}`,
        },
    }
    const result = Axios.post(url, data, config)
    result.then((res) => {
        if (res?.data?.code === 240) {
            store.dispatch(setLoginError(res?.data?.message))
            store.dispatch(logout())
        }
    })
    return result
}

export const putAuthorization = async (
    url,
    data = {},
    defaultConfig = null
) => {
    let token = await getAuthToken()
    let config = {
        ...defaultConfig,
        headers: {
            ...defaultConfig?.headers,
            Authorization: defaultConfig?.headers?.Authorization || `${token}`,
        },
    }
    return Axios.put(url, data, config)
}

export const deleteAuthorization = async (url, defaultConfig = null) => {
    let token = await getAuthToken()
    let config = {
        ...defaultConfig,
        headers: {
            ...defaultConfig?.headers,
            Authorization: defaultConfig?.headers?.Authorization || `${token}`,
        },
    }
    return Axios.delete(url, config)
}
