import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    Concontainer: {
        flex: 1,
        marginHorizontal: Constants.BaseStyle.scale(10),
        justifyContent: 'space-between',
    },
    editContainer: {
        flex: 1,
        marginHorizontal: Constants.BaseStyle.scale(10),
        justifyContent: 'space-between',
    },
    addBank: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(17),
        marginTop: Constants.BaseStyle.scale(20),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
    fgtView: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontWeight: 'bold',
        fontSize: 35,
    },
    saveView: {
        marginVertical: '100%',
    },
    formView: {},
    cnfText: {
        marginTop: Constants.BaseStyle.scale(5),
    },
    emailView: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(17),
        marginTop: Constants.BaseStyle.scale(10),
    },
    editbtn: {
        marginTop: Constants.BaseStyle.scale(100),
    },
    ctnView: {
        marginTop: Constants.BaseStyle.scale(20),
        alignSelf: 'center',
    },
    areaView: {
        marginTop: Constants.BaseStyle.scale(10),
    },
    icon: {
        alignSelf: 'center',
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    btn_view: {
        marginVertical: '105%',
    },
    m2: {
        margin: 10,
    },
    Ctn_btn: {
        marginVertical: '95%',
        marginHorizontal: Constants.BaseStyle.scale(11),
    },
    actText: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(22),
        marginTop: Constants.BaseStyle.scale(20),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
    textArea: {
        height: Constants.BaseStyle.scale(140),
        width: '100%',
        borderRadius: Constants.BaseStyle.scale(5),
        backgroundColor: Constants.Colors.PRIMARY2,
    },
    text: {
        marginTop: Constants.BaseStyle.scale(10),
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(17),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        marginLeft: Constants.BaseStyle.scale(30),
    },
    viewWrappper: {
        flexDirection: 'row',
        marginTop: Constants.BaseStyle.scale(10),
    },
    wrap: {
        marginTop: Constants.BaseStyle.scale(15),
    },
    editIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    ml4: {
        marginLeft: 20,
    },
    textWrap: {
        flexDirection: 'column',
        marginLeft: Constants.BaseStyle.scale(8),
        marginTop: Constants.BaseStyle.scale(5),
        width: '50%',
        marginHorizontal: Constants.BaseStyle.scale(35),
    },
    shaun: {
        marginLeft: Constants.BaseStyle.scale(10),
        fontSize: Constants.BaseStyle.scale(20),
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_BOLD,
    },
    yearText: {
        marginLeft: Constants.BaseStyle.scale(10),
        fontSize: Constants.BaseStyle.scale(18),
        color: Constants.Colors.SECONDARY,
        marginTop: Constants.BaseStyle.scale(10),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
    mail: {
        marginLeft: Constants.BaseStyle.scale(10),
        fontSize: Constants.BaseStyle.scale(15),
        color: Constants.Colors.WHITE,
        marginTop: Constants.BaseStyle.scale(10),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
    shaunPic: {
        resizeMode: 'cover',
        borderRadius: 100 / 2,
        height: Constants.BaseStyle.scale(80),
        width: Constants.BaseStyle.scale(80),
        marginLeft: Constants.BaseStyle.scale(10),
    },
    modal: {
        paddingHorizontal: Constants.BaseStyle.scale(15),
        padding: Constants.BaseStyle.scale(10),
        backgroundColor: Constants.Colors.PRIMARY2,
        borderRadius: Constants.BaseStyle.scale(5),
        width: 80,
        height: Constants.BaseStyle.scale(50),
        justifyContent: 'center',
        marginVertical: Constants.BaseStyle.scale(7),
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
    codeWrapper: {
        height: 52,
        backgroundColor: Constants.Colors.PRIMARY2,
        position: 'absolute',
        borderRadius: 5,
        marginVertical: 7,
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
