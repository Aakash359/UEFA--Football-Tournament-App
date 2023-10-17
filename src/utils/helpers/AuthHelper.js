import AsyncStorage from '@react-native-community/async-storage'
import { logError } from '../logger'

const TOKEN_KEY = '@auth_token'
const LOGINUSER_ID = '@loginuserid_key'
const USER_ID = '@userid_key'
const USER_CREAD_KEY = '@user_cread_key'
const SELECTED_COUNTRY_KEY = '@selected_country_key'
const GENDER_KEY = '@gender_key'
const COUNTRY_CODE_KEY = '@country_code_key'

export const setAuthToken = async (value = '') => {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, value)
    } catch (err) {
        logError(err, '[setAuthToken] AsyncStorage Error')
    }
}
export const getAuthToken = async () => {
    try {
        return await AsyncStorage.getItem(TOKEN_KEY)
    } catch (err) {
        logError(err, '[getAuthToken] AsyncStorage Error')
        return null
    }
}

export const setLoginUserId = async (value = '') => {
    try {
        await AsyncStorage.setItem(LOGINUSER_ID, value)
    } catch (err) {
        logError(err, '[setUser_Id] AsyncStorage Error')
    }
}
export const getLoginUserId = async () => {
    try {
        return await AsyncStorage.getItem(LOGINUSER_ID)
    } catch (err) {
        logError(err, '[getUser_Id] AsyncStorage Error')
        return null
    }
}

export const setUserId = async (value = '') => {
    try {
        await AsyncStorage.setItem(USER_ID, value)
    } catch (err) {
        logError(err, '[setUserId] AsyncStorage Error')
    }
}

export const getUserId = async () => {
    try {
        return await AsyncStorage.getItem(USER_ID)
    } catch (err) {
        logError(err, '[getUserId] AsyncStorage Error')
        return null
    }
}

export const setUserCred = async (data) => {
    const { email, password, isRemember } = data
    if (isRemember) {
        try {
            await AsyncStorage.setItem(
                USER_CREAD_KEY,
                JSON.stringify({ email, password })
            )
        } catch (error) {
            logError(error, '[setUserCread] AsyncStorge Error')
        }
    }
}

export const setSelectedCountry = async (value = '') => {
    try {
        await AsyncStorage.setItem(SELECTED_COUNTRY_KEY, JSON.stringify(value))
    } catch (err) {
        logError(err, '[setSelectedCountry] AsyncStorage Error')
    }
}

export const getSelectedCountry = async () => {
    try {
        return JSON.parse(
            (await AsyncStorage.getItem(SELECTED_COUNTRY_KEY)) || ''
        )
    } catch (err) {
        logError(err, '[getSelectedCountry] AsyncStorage Error')
        return null
    }
}

export const setGender = async (value = '') => {
    try {
        await AsyncStorage.setItem(GENDER_KEY, value)
    } catch (err) {
        logError(err, '[setGender] AsyncStorage Error')
    }
}

export const getGender = async () => {
    try {
        return await AsyncStorage.getItem(GENDER_KEY)
    } catch (err) {
        logError(err, '[getGender] AsyncStorage Error')
        return null
    }
}

export const setCountryCode = async (value = '') => {
    try {
        await AsyncStorage.setItem(COUNTRY_CODE_KEY, value)
    } catch (err) {
        logError(err, '[setCountryCode] AsyncStorage Error')
    }
}

export const getCountryCode = async () => {
    try {
        return await AsyncStorage.getItem(COUNTRY_CODE_KEY)
    } catch (err) {
        logError(err, '[getCountryCode] AsyncStorage Error')
        return null
    }
}
