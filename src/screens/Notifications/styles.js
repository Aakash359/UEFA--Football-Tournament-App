import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListHeader: {
        fontFamily: typography.FONT_FAMILY_REGULAR,
        fontSize: Constants.BaseStyle.scale(16),
        color: Constants.Colors.WHITE,
        marginLeft: Constants.BaseStyle.scale(20),
    },
})

export default styles
