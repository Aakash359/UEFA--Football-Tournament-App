import AsyncStorage from '@react-native-community/async-storage'
import { logError } from '../logger'

const deviceID = '@deviceId'
const fcmToken = '@fcmToken'

export const setDeviceId = async (value = '') => {
    try {
        await AsyncStorage.setItem(deviceID, value)
    } catch (err) {
        logError(err, '[setDeviceId] AsyncStorage Error')
    }
}
export const getDeviceId = async () => {
    try {
        return await AsyncStorage.getItem(deviceID)
    } catch (err) {
        logError(err, '[getDeviceId] AsyncStorage Error')
        return null
    }
}

export const setFcmToken = async (value = '') => {
    try {
        await AsyncStorage.setItem(fcmToken, value)
    } catch (err) {
        logError(err, '[setFcmToken] AsyncStorage Error')
    }
}
export const getFcmToken = async () => {
    try {
        return (await AsyncStorage.getItem(fcmToken)) || 'no fcm token'
    } catch (err) {
        logError(err, '[getFcmToken] AsyncStorage Error')
        return null
    }
}
