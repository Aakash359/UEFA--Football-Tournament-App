import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
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
    matchHeader: {
        backgroundColor: Constants.Colors.PRIMARY2,
        padding: Constants.BaseStyle.scale(10),
    },
    flatView: {
        marginBottom: Constants.BaseStyle.scale(20),
    },
    matchHeaderTitle: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
    matchWrapper: {
        padding: Constants.BaseStyle.scale(10),
        marginHorizontal: Constants.BaseStyle.scale(10),
        borderBottomWidth: 0.9,
        borderBottomColor: Constants.Colors.SECONDARY,
    },
    matchNoBBWrapper: {
        borderBottomWidth: 0,
    },
    matchTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    matchTopBox: {
        paddingHorizontal: Constants.BaseStyle.scale(10),
        paddingVertical: Constants.BaseStyle.scale(8),
        borderWidth: 0.6,
        borderColor: Constants.Colors.SECONDARY,
        borderRadius: Constants.BaseStyle.scale(16),
        color: Constants.Colors.SECONDARY,
        fontFamily: typography.FONT_FAMILY_REGULAR,
        fontSize: Constants.BaseStyle.scale(14),
    },
    matchPoints: {
        color: Constants.Colors.WHITE,
    },
    matchCenter: {
        alignItems: 'center',
    },
    teamTitle: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_REGULAR,
        fontSize: Constants.BaseStyle.scale(14),
    },
    scoreBoard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    matchTime: {
        borderRadius: 5,
        borderWidth: 1,
        fontFamily: typography.FONT_FAMILY_BOLD,
        borderColor: Constants.Colors.WHITE,
        padding: 8,
        color: Constants.Colors.WHITE,
    },
    scoreContainer: {
        borderRadius: 5,
        backgroundColor: Constants.Colors.SUCCESS,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    score: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(14),
    },
    scoreDivider: {
        marginHorizontal: 10,
    },
    matchTimePeriod: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_REGULAR,
        fontSize: Constants.BaseStyle.scale(14),
    },
    scoreInput: {
        color: Constants.Colors.WHITE,
        paddingVertical: 3,
        textAlign: 'center',
        width: '100%',
        height: '100%',
    },
    flatListStyle: {
        marginBottom: 150,
    },
    extraPenulty: {
        color: Constants.Colors.SECONDARY,
        fontFamily: typography.FONT_FAMILY_REGULAR,
        marginTop: Constants.BaseStyle.scale(-10),
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
