import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import Constants from '../../contants'

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Constants.Colors.MODAL,
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCross: {
        alignItems: 'flex-end',
    },
    modalCrossWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Constants.Colors.SECONDARY,
        marginTop: 50,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCrossText: {
        fontSize: 30,
        color: Constants.Colors.WHITE,
        transform: [{ rotate: '40deg' }],
        alignSelf: 'center',
    },
})

export default styles
