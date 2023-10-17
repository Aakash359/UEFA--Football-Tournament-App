import AsyncStorage from '@react-native-community/async-storage'
import { logError } from '../logger'

const tempBackDetails = '@tempBankDetails'

export const setBankDetails = async (value = '') => {
    try {
        await AsyncStorage.setItem(tempBackDetails, JSON.stringify(value))
    } catch (err) {
        logError(err, '[setBankDetails] AsyncStorage Error')
    }
}
export const getBankDetails = async () => {
    try {
        return JSON.parse((await AsyncStorage.getItem(tempBackDetails)) || '')
    } catch (err) {
        logError(err, '[getBankDetails] AsyncStorage Error')
        return null
    }
}
