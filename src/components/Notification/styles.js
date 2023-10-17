import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    inputFieldWrapper: {
        backgroundColor: Constants.Colors.PRIMARY2,
        color: Constants.Colors.WHITE,
        height: Constants.BaseStyle.scale(60),
        width: '100%',
        borderRadius: Constants.BaseStyle.scale(5),
        marginVertical: Constants.BaseStyle.scale(10),
        justifyContent: 'center',
    },
    textWrapper: {
        flexDirection: 'row',
        marginLeft: Constants.BaseStyle.scale(20),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(19),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
    icon: {
        alignSelf: 'center',
        marginRight: Constants.BaseStyle.scale(10),
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
})

export default styles
