import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: Constants.BaseStyle.scale(10),
    },
    header: {
        position: 'relative',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editWrapper: {
        flexDirection: 'row',
    },
    editIcon: {
        marginLeft: 10,
        marginTop: 10,
    },
    groupName: {
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(18),
        color: Constants.Colors.WHITE,
        maxWidth: '90%',
    },
    memberCountText: {
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(13),
        color: Constants.Colors.WHITE,
    },
    addMemberText: {
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(13),
        color: Constants.Colors.PRIMARY,
    },
    removeBtn: {
        height: 30,
        width: 70,
        borderWidth: 1,
        borderColor: Constants.Colors.WHITE,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3,
        paddingHorizontal: 10,
    },
    removeBtnText: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_REGULAR,
        fontSize: 13,
    },
    rowCard: {
        backgroundColor: Constants.Colors.PRIMARY2,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    username: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        fontSize: 16,
        marginLeft: 15,
        width: 100,
    },
    rank: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        fontSize: 16,
        marginLeft: 15,
        minWidth: 30,
    },
    points: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        fontSize: 16,
        marginHorizontal: 15,
        minWidth: 30,
    },
    leaveGroupBtn: {
        backgroundColor: Constants.Colors.PRIMARY2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    leaveGroupText: {
        color: Constants.Colors.WHITE,
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: 18,
    },
})

export default styles
