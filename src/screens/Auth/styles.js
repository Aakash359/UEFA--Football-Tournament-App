import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: Constants.BaseStyle.scale(10),
        justifyContent: 'space-between',
    },
    fgtView: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(30),
        marginTop: Constants.BaseStyle.scale(25),
    },

    btn_view: {
        marginVertical: '112%',
        paddingHorizontal: Constants.BaseStyle.scale(7),
    },
    formView: {
        marginTop: Constants.BaseStyle.scale(20),
    },
    cnfText: {
        marginTop: Constants.BaseStyle.scale(5),
    },
    emailView: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
        marginTop: Constants.BaseStyle.scale(20),
        marginRight: Constants.BaseStyle.scale(60),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
    resendText: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
        marginTop: Constants.BaseStyle.scale(25),
    },
    timer: {
        color: Constants.Colors.PRIMARY,
    },
    login: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Constants.Colors.PRIMARY,
        borderRadius: Constants.BaseStyle.scale(6),
        height: Constants.BaseStyle.scale(50),
        justifyContent: 'center',
        marginTop: Constants.BaseStyle.scale(40),
        width: '100%',
    },
    create_Acct: {
        alignItems: 'center',
        backgroundColor: Constants.Colors.SECONDARY_COLOR,
        borderTopLeftRadius: Constants.BaseStyle.scale(20),
        borderTopRightRadius: Constants.BaseStyle.scale(20),
        bottom: 0,
        flexDirection: 'row',
        height: Constants.BaseStyle.scale(80),
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
    },
    forgot_pass: {
        color: Constants.Colors.WHITE,
        fontSize: 18,
        marginTop: Constants.BaseStyle.scale(10),
    },

    inputView: {
        alignSelf: 'center',
        height: Constants.BaseStyle.scale(60),
        marginTop: Constants.BaseStyle.scale(20),
        width: '100%',
        padding: Constants.BaseStyle.scale(-50),
    },
    input: {
        backgroundColor: Constants.Colors.PRIMARY2,
        borderRadius: Constants.BaseStyle.scale(5),
        borderWidth: 0,
        height: Constants.BaseStyle.scale(55),
        width: Constants.BaseStyle.scale(70),
    },
    loginText: {
        color: Constants.Colors.WHITE,
        marginBottom: Constants.BaseStyle.scale(4),
        marginHorizontal: Constants.BaseStyle.scale(10),
    },
    inputHighlight: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(16),
    },
    orContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: Constants.BaseStyle.scale(50),
    },
    socialIconsWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: Constants.BaseStyle.scale(20),
        marginVertical: Constants.BaseStyle.scale(30),
        paddingHorizontal: Constants.BaseStyle.scale(50),
    },
    socialIcon: {
        height: Constants.BaseStyle.scale(50),
        width: Constants.BaseStyle.scale(50),
    },
    signUpTitle: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(35),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginVertical: Constants.BaseStyle.scale(10),
    },
    saveBtn: {
        marginTop: Constants.BaseStyle.scale(50),
    },
    countryWrapper: {
        padding: Constants.BaseStyle.scale(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    countryName: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
    },
    modal: {
        paddingHorizontal: Constants.BaseStyle.scale(15),
        padding: Constants.BaseStyle.scale(10),
        backgroundColor: Constants.Colors.PRIMARY2,
        borderRadius: Constants.BaseStyle.scale(5),
        width: 80,
        height: Constants.BaseStyle.scale(50),
        justifyContent: 'center',
        transform: [{ scale: 0 }],
    },
    modalText: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
    },
    modalTextInActive: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(14),
    },
    modalDropDown: {
        backgroundColor: Constants.Colors.PRIMARY2,
        borderWidth: 2,
        borderColor: Constants.Colors.SECONDARY,
        borderRadius: Constants.BaseStyle.scale(10),
        overflow: 'hidden',
        marginTop: Constants.BaseStyle.scale(-20),
        marginRight: Constants.BaseStyle.scale(-15),
        minWidth: '80%',
        maxWidth: '80%',
    },
    modalDropDownText: {
        backgroundColor: Constants.Colors.PRIMARY2,
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
        paddingHorizontal: Constants.BaseStyle.scale(15),
    },
    modalDropDownHighlightedText: {
        color: Constants.Colors.PRIMARY,
    },
    phoneCombiner: {
        borderRadius: Constants.BaseStyle.scale(5),
        overflow: 'hidden',
        marginVertical: 7,
    },
    codeWrapper: {
        height: 52,
        backgroundColor: Constants.Colors.PRIMARY2,
        position: 'absolute',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        marginRight: 10,
    },
    code: {
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_REGULAR,
        color: Constants.Colors.WHITE,
    },
})

export default styles
