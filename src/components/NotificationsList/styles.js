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
        paddingBottom: Constants.BaseStyle.scale(20),
    },
    
    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Constants.BaseStyle.scale(20),
    },
    textWrapper2: {
       
        
        marginTop: Constants.BaseStyle.scale(20),
    },
    text: {
        color: Constants.Colors.WHITE,
        marginTop: Constants.BaseStyle.scale(20),
        marginLeft: Constants.BaseStyle.scale(19),
        fontSize: Constants.BaseStyle.scale(15),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        
    },
    tx1: {
        color: Constants.Colors.WHITE,
        marginLeft: Constants.BaseStyle.scale(19),
        fontSize: Constants.BaseStyle.scale(15),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        
    },
   
    tx3: {
        color: Constants.Colors.WHITE,
        justifyContent: 'flex-end',
        fontSize: Constants.BaseStyle.scale(19),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        marginLeft: Constants.BaseStyle.scale(19),
        marginTop: Constants.BaseStyle.scale(10),
    },
    coloum: {
        flexDirection: 'column',
    },
    border: {
        borderWidth: 0.4,
        marginTop: Constants.BaseStyle.scale(19),
        borderColor: Constants.Colors.SECONDARY,
    },
    amount: {
        color: Constants.Colors.SUCCESS,
        justifyContent: 'flex-end',
        fontSize: Constants.BaseStyle.scale(18),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginRight: Constants.BaseStyle.scale(10),
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
