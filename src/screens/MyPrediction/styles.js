import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    v1: {
        flexDirection: 'row',
        marginHorizontal: Constants.BaseStyle.scale(34),
    },
    lv2: {
        flexDirection: 'row',
        marginVertical: Constants.BaseStyle.scale(10),
    },
    v2: {
        width: '90%',
        marginTop: Constants.BaseStyle.scale(10),
        borderWidth: Constants.BaseStyle.scale(2),
        borderRadius: Constants.BaseStyle.scale(8),
        borderColor: Constants.Colors.SECONDARY,
        alignSelf: 'center',
        maxHeight: 250,
    },

    text: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(8),
        width: '16%',
    },
    tx1: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(8),
        width: '22%',
    },
    tx2: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(10),
    },
    text1: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(12),
        fontFamily: typography.FONT_FAMILY_BOLD,
        width: 70,
        textAlign: 'center',
    },
    text2: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(12),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(12),
    },
    text3: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(12),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(15),
    },
    text4: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(12),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(15),
    },
    text5: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(12),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(20),
    },
    text6: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(12),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(15),
    },
    text7: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(12),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(15),
        width: Constants.BaseStyle.scale(35),
    },
    text8: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(12),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(15),
    },

    lt1: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(20),
    },
    lt2: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(38),
    },

    lt3: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(35),
    },
    lt4: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(35),
    },
    lt5: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(35),
    },
    lt6: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(35),
    },
    lt7: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(39),
    },
    lt8: {
        color: Constants.Colors.SECONDARY,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft: Constants.BaseStyle.scale(40),
    },
    View1: {
        flexDirection: 'row',
        marginTop: Constants.BaseStyle.scale(10),
    },
    l1: {
        flexDirection: 'row',
        marginTop: Constants.BaseStyle.scale(10),
        alignItems: 'center',
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        margin: Constants.BaseStyle.scale(20),
        marginRight: Constants.BaseStyle.scale(20),
    },
    title: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_BOLD,
        maxWidth: Constants.BaseStyle.scale(250),
    },
    modal: {
        paddingHorizontal: Constants.BaseStyle.scale(15),
        padding: Constants.BaseStyle.scale(10),
        backgroundColor: Constants.Colors.PRIMARY2,
        borderRadius: Constants.BaseStyle.scale(20),
        maxWidth: 140,
    },
    modalText: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
    },
    modalDropDown: {
        backgroundColor: Constants.Colors.PRIMARY2,
        borderWidth: 2,
        borderColor: Constants.Colors.SECONDARY,
        borderRadius: Constants.BaseStyle.scale(10),
        overflow: 'hidden',
        marginTop: Constants.BaseStyle.scale(-30),
        marginRight: Constants.BaseStyle.scale(-15),
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
})

export default styles
