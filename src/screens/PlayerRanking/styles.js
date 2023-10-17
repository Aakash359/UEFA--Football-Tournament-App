import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rankWrapper: {
        padding: Constants.BaseStyle.scale(10),
        alignItems: 'center',
    },
    rankContainer: {
        padding: Constants.BaseStyle.scale(10),
        borderRadius: Constants.BaseStyle.scale(8),
        alignItems: 'center',
        flex: 1,
        backgroundColor: Constants.Colors.PRIMARY2,
        marginLeft: Constants.BaseStyle.scale(15),
    },

    saveView: {
        marginVertical: '100%',
        marginHorizontal: '5%',
    },
    buttonContainer: {
        marginHorizontal: Constants.BaseStyle.scale(10),
    },
    myRankContainer: {
        padding: Constants.BaseStyle.scale(10),
        borderRadius: Constants.BaseStyle.scale(8),
        alignItems: 'center',
        flex: 1,
        backgroundColor: Constants.Colors.PRIMARY,
        marginLeft: Constants.BaseStyle.scale(15),
    },
    rankUserContainer: {
        alignItems: 'center',
    },
    rankUserImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        resizeMode: 'cover',
        marginRight: 10,
    },
    rankUsername: {
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(16),
    },
    myRankWrapper: {
        // position: 'absolute',
        width: '100%',
        backgroundColor: Constants.Colors.PRIMARY,
        bottom: 0,
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
