import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    inputFieldWrapper: {
        backgroundColor: Constants.Colors.PRIMARY2,
        color: Constants.Colors.WHITE,
        height: Constants.BaseStyle.scale(50),
        width: Constants.BaseStyle.DEVICE_WIDTH - 20,
        borderRadius: Constants.BaseStyle.scale(5),
        paddingHorizontal: Constants.BaseStyle.scale(15),
        marginVertical: Constants.BaseStyle.scale(7),
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_REGULAR,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputField: {
        color: Constants.Colors.WHITE,
        minWidth: 150,
    },
    error: {
        color: Constants.Colors.WARNING,
        fontSize: Constants.BaseStyle.scale(11),
        marginLeft: Constants.BaseStyle.scale(10),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
})

export default styles
