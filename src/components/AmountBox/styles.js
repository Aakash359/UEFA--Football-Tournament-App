import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    inputFieldWrapper: {
        backgroundColor: Constants.Colors.PRIMARY2,
        color: Constants.Colors.WHITE,
        width: Constants.BaseStyle.DEVICE_WIDTH - 40,
        borderRadius: Constants.BaseStyle.scale(5),
        marginVertical: Constants.BaseStyle.scale(10),
        marginLeft: Constants.BaseStyle.scale(20),
        paddingBottom: Constants.BaseStyle.scale(35),
    },
    V1: {},
    textWrapper: {
        flexDirection: 'row',
        marginLeft: Constants.BaseStyle.scale(20),
        marginTop: Constants.BaseStyle.scale(20),
    },
    text: {
        color: Constants.Colors.SECONDARY,
        marginLeft: Constants.BaseStyle.scale(19),
        fontSize: Constants.BaseStyle.scale(15),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
    },
    amountStyle:{
        height:Constants.BaseStyle.scale(60),
        justifyContent:'center',
        marginTop: Constants.BaseStyle.scale(-5),
    },
    amount: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(16),
        textAlign:'center',
         textAlignVertical:'center',
        fontFamily: typography.FONT_FAMILY_BOLD,
      },
    btnView: {
        marginHorizontal: Constants.BaseStyle.scale(15),
        marginVertical: Constants.BaseStyle.scale(-20),
    },
    wrap: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: Constants.BaseStyle.scale(8),
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: Constants.BaseStyle.scale(8),
    },
})

export default styles
