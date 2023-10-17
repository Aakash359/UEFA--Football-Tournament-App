import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: Constants.BaseStyle.scale(10),
        justifyContent: 'space-between',
    },
    saveView: {
        marginVertical: '100%',
    },
    formView: {},
    cnfText: {
        marginTop: Constants.BaseStyle.scale(5),
    },
    ctnView: {
        marginTop: Constants.BaseStyle.scale(20),
        alignSelf: 'center',
    },
    buttonContainer: {
        backgroundColor: Constants.Colors.PRIMARY2,
        paddingHorizontal: Constants.BaseStyle.scale(15),
        marginVertical: Constants.BaseStyle.scale(7),
        height: Constants.BaseStyle.scale(50),
        justifyContent: 'center',
        width: Constants.BaseStyle.DEVICE_WIDTH - 20,
        borderRadius: Constants.BaseStyle.scale(5),
    },
    buttonText: {
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_REGULAR,
        color: Constants.Colors.SECONDARY,
    },
    containerList: {
        backgroundColor: Constants.Colors.PRIMARY2,
        paddingHorizontal: Constants.BaseStyle.scale(15),
        marginVertical: Constants.BaseStyle.scale(10),
        paddingVertical: Constants.BaseStyle.scale(10),
        width: Constants.BaseStyle.DEVICE_WIDTH - 20,
        borderRadius: Constants.BaseStyle.scale(5),
    },
    rowContainer: { flexDirection: 'row' },
    profileImage: {
        backgroundColor: 'red',
        height: Constants.BaseStyle.scale(70),
        width: Constants.BaseStyle.scale(70),
        borderRadius: Constants.BaseStyle.scale(35),
        borderWidth: Constants.BaseStyle.scale(2),
        borderColor: Constants.Colors.PRIMARY,
        marginRight: Constants.BaseStyle.scale(10),
    },
    groupName: {
        fontSize: Constants.BaseStyle.scale(18),
        fontFamily: typography.FONT_FAMILY_BOLD,
        color: Constants.Colors.WHITE,
    },
    normalText: {
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_REGULAR,
        color: Constants.Colors.WHITE,
        marginTop: Constants.BaseStyle.scale(10),
    },
    invitedByText: {
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_REGULAR,
        color: Constants.Colors.WHITE,
        marginTop: Constants.BaseStyle.scale(10),
    },
    colorText: {
        color: Constants.Colors.SECONDARY,
    },
    memberImage: {
        height: Constants.BaseStyle.scale(30),
        width: Constants.BaseStyle.scale(30),
    },
    memberImageStyle: {
        height: Constants.BaseStyle.scale(30),
        width: Constants.BaseStyle.scale(30),
        marginLeft: Constants.BaseStyle.scale(-5),
    },
    headingContainer: { flexDirection: 'row', alignItems: 'center' },
    rejectButton: {
        paddingHorizontal: Constants.BaseStyle.scale(10),
        borderWidth: Constants.BaseStyle.scale(1),
        width: Constants.BaseStyle.scale(90),
        height: Constants.BaseStyle.scale(26),
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingVertical: Constants.BaseStyle.scale(2.5),
        borderRadius: Constants.BaseStyle.scale(13),
        fontSize: Constants.BaseStyle.scale(12),
        color: Constants.Colors.PINK,
        borderColor: Constants.Colors.PINK,
    },
    marginTopStyle: {
        marginTop: Constants.BaseStyle.scale(20),
        marginBottom: Constants.BaseStyle.scale(10),
    },
    addButtonStyle: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: Constants.BaseStyle.scale(0),
        backgroundColor: Constants.Colors.PRIMARY,
        borderRadius: Constants.BaseStyle.scale(45 / 2),
        height: Constants.BaseStyle.scale(45),
        width: Constants.BaseStyle.scale(45),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Constants.BaseStyle.scale(20),
        right: Constants.BaseStyle.scale(15),
    },
    marginStyle: {
        marginRight: 10,
        color: Constants.Colors.GREEN,
        borderColor: Constants.Colors.GREEN,
    },
    buttonHeading: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
        justifyContent: 'flex-end',
    },
})

export default styles
