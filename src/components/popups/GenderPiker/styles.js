import { StyleSheet } from 'react-native'
import Constants from '../../../contants'
import typography from '../../../contants/typography'

const styles = StyleSheet.create({
    container: {
        width: Constants.BaseStyle.DEVICE_WIDTH / 1.5,
        height: Constants.BaseStyle.DEVICE_HEIGHT / 3,
        backgroundColor: Constants.Colors.DARK,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: Constants.BaseStyle.scale(16),
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginBottom: 10,
    },
    genderWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30,
        width: '90%',
    },
    genderText: {
        fontSize: Constants.BaseStyle.scale(14),
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_BOLD,
    },
    seprator: {
        height: 0.6,
        backgroundColor: Constants.Colors.WHITE,
        width: '90%',
    },
})

export default styles
