import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    headerWrapper: {
        margin: Constants.BaseStyle.scale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(16),
        color: Constants.Colors.WHITE,
        marginLeft: Constants.BaseStyle.scale(15),
    },
    myAccount: {
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(18),
        color: Constants.Colors.WHITE,
        marginLeft: Constants.BaseStyle.scale(15),
    },
})

export default styles
