import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    v1: {
        
        borderRadius: Constants.BaseStyle.scale(5),
        backgroundColor: Constants.Colors.PRIMARY2,
        padding: Constants.BaseStyle.scale(25),
        marginVertical: Constants.BaseStyle.scale(10),
    },
    touch1: {
        marginTop: Constants.BaseStyle.scale(10),
    },
    saveBtn: {
            marginTop: Constants.BaseStyle.scale(50),
          width: '90%',
        },
    v2: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    flat: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingTop: Constants.BaseStyle.scale(20),
        alignSelf: 'center',      
    },
    v3: {
        flexDirection: 'column',
    },
    v4: {
        justifyContent: 'flex-start',
        position: 'absolute',
        bottom: '37%',
    },
    tx1: {
        color: Constants.Colors.SECONDARY,
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        fontSize: Constants.BaseStyle.scale(14),
    },
    tx2: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(18),
        marginTop: Constants.BaseStyle.scale(5),
    },
    text: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_REGULAR,
        fontSize: Constants.BaseStyle.scale(16),
        marginTop: Constants.BaseStyle.scale(5),
    },
    addBankBtn: {
        height:Constants.BaseStyle.scale(80),
        width: '90%',
        marginHorizontal: Constants.BaseStyle.scale(20),
    },
})

export default styles
