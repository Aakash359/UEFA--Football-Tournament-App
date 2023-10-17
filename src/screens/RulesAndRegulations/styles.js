import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:Constants.BaseStyle.scale(10),
        
    },
    text:{
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(15),
        fontWeight: 'bold',
    },
    tx1:{
        color: Constants.Colors.WHITE,
        height: Constants.BaseStyle.scale(20),
        width: Constants.BaseStyle.scale(20),
        marginTop: Constants.BaseStyle.scale(12),
    },
    tx2:{
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(18),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        marginTop: 10,
    },
    modalView:{
        flex: 1,
        alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: Constants.Colors.PRIMARY2,
    }
})

export default styles
