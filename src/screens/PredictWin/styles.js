import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    v1: {
        shadowOpacity: 3,
        height: Constants.BaseStyle.scale(150),
        width: '90%',
        marginVertical: Constants.BaseStyle.scale(15),
        alignSelf: 'center',
    },
    pic: {
        width: '100%',
        height: Constants.BaseStyle.scale(150),
        resizeMode: 'cover',
        overflow: 'hidden',
        borderRadius: 5,
    },
    v2: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    v3: {
        paddingBottom: Constants.BaseStyle.scale(10),
        alignItems: 'flex-start',
        paddingHorizontal: Constants.BaseStyle.scale(10),
    },
    v4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tx1: {
        fontFamily: typography.FONT_FAMILY_BOLD,
        fontSize: Constants.BaseStyle.scale(12),
        color: Constants.Colors.WHITE,
        marginLeft: Constants.BaseStyle.scale(7),
        paddingHorizontal: Constants.BaseStyle.scale(7),
        paddingVertical: Constants.BaseStyle.scale(7),
        borderRadius: Constants.BaseStyle.scale(7),
        backgroundColor: Constants.Colors.SUCCESS,
        overflow: 'hidden',
    },
    tx2: {
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        fontSize: Constants.BaseStyle.scale(18),
        color: Constants.Colors.WHITE,
        marginLeft: Constants.BaseStyle.scale(7),
        textAlign: 'right',
        textShadowColor: Constants.Colors.MODAL,
        textShadowOffset: { width: 0.1, height: 0.1 },
        textShadowRadius: 3,
    },
    tx3: {
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        fontSize: Constants.BaseStyle.scale(13),
        color: Constants.Colors.WHITE,
        marginLeft: Constants.BaseStyle.scale(7),
    },
})

export default styles
