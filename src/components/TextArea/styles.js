import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'


const styles = StyleSheet.create({
    textAreaWrapper: {
        fontSize: Constants.BaseStyle.scale(13),
        fontFamily:typography.FONT_FAMILY_REGULAR,
        color: Constants.Colors.WHITE,
        width: "100%",
        marginLeft:Constants.BaseStyle.scale(5),
        padding: Constants.BaseStyle.scale(12),
        textAlignVertical: 'top',
        height: '100%'
    },
    
})

export default styles