import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        margin: Constants.BaseStyle.scale(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(16),
        color: Constants.Colors.WHITE,
        marginLeft: Constants.BaseStyle.scale(15),
    },
    calenderStyle: {
        height: 100,
        width: '120%',
        alignSelf: 'center',
    },
    calenderHeaderStyle: {
        color: Constants.Colors.WHITE,
        alignSelf: 'flex-start',
        marginLeft: Constants.BaseStyle.scale(53),
        fontSize: Constants.BaseStyle.scale(25),
        fontFamily: typography.FONT_FAMILY_BOLD,
    },
    calenderDateStyle: {
        color: Constants.Colors.WHITE,
    },
    calenderHighlightDateContainer: {
        backgroundColor: Constants.Colors.PRIMARY,
        borderRadius: 5,
        width: 40,
    },
    tourWrapper: {
        padding: 10,
    },
    tourHeader: {
        backgroundColor: Constants.Colors.PRIMARY2,
        padding: 10,
        borderRadius: 3,
    },
    tourHeaderText: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_REGULAR,
        fontSize: Constants.BaseStyle.scale(14),
    },
    matchWrapper: {
        padding: 10,
    },
    matchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.6,
        borderBottomColor: Constants.Colors.SECONDARY,
        paddingVertical: 15,
        flex: 1,
    },
    matchCenter: {
        alignItems: 'center',
    },
    teamTitle: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_REGULAR,
        fontSize: Constants.BaseStyle.scale(14),
        marginHorizontal: Constants.BaseStyle.scale(5),
    },
    scoreBoard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    matchTime: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Constants.Colors.WHITE,
        padding: 8,
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
    },
    scoreContainer: {
        borderRadius: 5,
        backgroundColor: Constants.Colors.SUCCESS,
        width: 30,
        height: 30,
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
    extraPenulty: {
        color: Constants.Colors.SECONDARY,
        fontFamily: typography.FONT_FAMILY_REGULAR,
        marginTop: Constants.BaseStyle.scale(-10),
    },
})

export default styles
