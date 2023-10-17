import { StyleSheet } from 'react-native'
import Constants from '../contants'
import typography from '../contants/typography'

const main = StyleSheet.create({
    keyborderDissmiss: {
        width: '100%',
        height: '100%',
    },
    button: {
        backgroundColor: Constants.Colors.PRIMARY,
        height: Constants.BaseStyle.scale(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: Constants.BaseStyle.scale(10),
        borderRadius: Constants.BaseStyle.scale(5),
        width: '100%',
    },
    buttonText: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_BOLD,
        color: Constants.Colors.WHITE,
    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    editIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    iconSm: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
    },
    iconMd: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    profilePic: {
        width: 45,
        height: 45,
        resizeMode: 'cover',
        borderRadius: 45 / 2,
    },
    headerback: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },
    seprator: {
        height: 0.6,
        backgroundColor: Constants.Colors.WHITE,
    },
    error: {
        color: Constants.Colors.WARNING,
        fontSize: Constants.BaseStyle.scale(11),
        marginLeft: Constants.BaseStyle.scale(10),
        fontFamily: typography.FONT_FAMILY_REGULAR,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(18),
        marginLeft: Constants.BaseStyle.scale(15),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
    },
    titleSm: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
    },
    row: {
        flexDirection: 'row',
    },
    m1: {
        margin: 5,
    },
    m2: {
        margin: 10,
    },
    m3: {
        margin: 15,
    },
    m4: {
        margin: 20,
    },
    m5: {
        margin: 25,
    },
    m6: {
        margin: 30,
    },
    m7: {
        margin: 35,
    },
    m8: {
        margin: 40,
    },
    m9: {
        margin: 45,
    },
    m10: {
        margin: 50,
    },
    mr1: {
        marginRight: 5,
    },
    mr2: {
        marginRight: 10,
    },
    mr3: {
        marginRight: 15,
    },
    mr4: {
        marginRight: 20,
    },
    mr5: {
        marginRight: 25,
    },
    mr6: {
        marginRight: 30,
    },
    mr7: {
        marginRight: 35,
    },
    mr8: {
        marginRight: 40,
    },
    mr9: {
        marginRight: 45,
    },
    mr10: {
        marginRight: 50,
    },
    ml1: {
        marginLeft: 5,
    },
    ml2: {
        marginLeft: 10,
    },
    ml3: {
        marginLeft: 15,
    },
    ml4: {
        marginLeft: 20,
    },
    ml5: {
        marginLeft: 25,
    },
    ml6: {
        marginLeft: 30,
    },
    ml7: {
        marginLeft: 35,
    },
    ml8: {
        marginLeft: 40,
    },
    ml9: {
        marginLeft: 45,
    },
    ml10: {
        marginLeft: 50,
    },
    mt1: {
        marginTop: 5,
    },
    mt2: {
        marginTop: 10,
    },
    mt3: {
        marginTop: 15,
    },
    mt4: {
        marginTop: 20,
    },
    mt5: {
        marginTop: 25,
    },
    mt6: {
        marginTop: 30,
    },
    mt7: {
        marginTop: 35,
    },
    mt8: {
        marginTop: 40,
    },
    mt9: {
        marginTop: 45,
    },
    mt10: {
        marginTop: 50,
    },
    mb1: {
        marginBottom: 5,
    },
    mb2: {
        marginBottom: 10,
    },
    mb3: {
        marginBottom: 15,
    },
    mb4: {
        marginBottom: 20,
    },
    mb5: {
        marginBottom: 25,
    },
    mb6: {
        marginBottom: 30,
    },
    mb7: {
        marginBottom: 35,
    },
    mb8: {
        marginBottom: 40,
    },
    mb9: {
        marginBottom: 45,
    },
    mb10: {
        marginBottom: 50,
    },
    mx1: {
        marginHorizontal: 5,
    },
    mx2: {
        marginHorizontal: 10,
    },
    mx3: {
        marginHorizontal: 15,
    },
    mx4: {
        marginHorizontal: 20,
    },
    mx5: {
        marginHorizontal: 25,
    },
    mx6: {
        marginHorizontal: 30,
    },
    mx7: {
        marginHorizontal: 35,
    },
    mx8: {
        marginHorizontal: 40,
    },
    mx9: {
        marginHorizontal: 45,
    },
    mx10: {
        marginHorizontal: 50,
    },
    my1: {
        marginVertical: 5,
    },
    my2: {
        marginVertical: 10,
    },
    my3: {
        marginVertical: 15,
    },
    my4: {
        marginVertical: 20,
    },
    my5: {
        marginVertical: 25,
    },
    my6: {
        marginVertical: 30,
    },
    my7: {
        marginVertical: 35,
    },
    my8: {
        marginVertical: 40,
    },
    my9: {
        marginVertical: 45,
    },
    my10: {
        marginVertical: 50,
    },
    p1: {
        padding: 5,
    },
    p2: {
        padding: 10,
    },
    p3: {
        padding: 15,
    },
    p4: {
        padding: 20,
    },
    p5: {
        padding: 25,
    },
    p6: {
        padding: 30,
    },
    p7: {
        padding: 35,
    },
    p8: {
        padding: 40,
    },
    p9: {
        padding: 45,
    },
    p10: {
        padding: 50,
    },
    pr1: {
        paddingRight: 5,
    },
    pr2: {
        paddingRight: 10,
    },
    pr3: {
        paddingRight: 15,
    },
    pr4: {
        paddingRight: 20,
    },
    pr5: {
        paddingRight: 25,
    },
    pr6: {
        paddingRight: 30,
    },
    pr7: {
        paddingRight: 35,
    },
    pr8: {
        paddingRight: 40,
    },
    pr9: {
        paddingRight: 45,
    },
    pr10: {
        paddingRight: 50,
    },
    pl1: {
        paddingLeft: 5,
    },
    pl2: {
        paddingLeft: 10,
    },
    pl3: {
        paddingLeft: 15,
    },
    pl4: {
        paddingLeft: 20,
    },
    pl5: {
        paddingLeft: 25,
    },
    pl6: {
        paddingLeft: 30,
    },
    pl7: {
        paddingLeft: 35,
    },
    pl8: {
        paddingLeft: 40,
    },
    pl9: {
        paddingLeft: 45,
    },
    pl10: {
        paddingLeft: 50,
    },
    pt1: {
        paddingTop: 5,
    },
    pt2: {
        paddingTop: 10,
    },
    pt3: {
        paddingTop: 15,
    },
    pt4: {
        paddingTop: 20,
    },
    pt5: {
        paddingTop: 25,
    },
    pt6: {
        paddingTop: 30,
    },
    pt7: {
        paddingTop: 35,
    },
    pt8: {
        paddingTop: 40,
    },
    pt9: {
        paddingTop: 45,
    },
    pt10: {
        paddingTop: 50,
    },
    pb1: {
        paddingBottom: 5,
    },
    pb2: {
        paddingBottom: 10,
    },
    pb3: {
        paddingBottom: 15,
    },
    pb4: {
        paddingBottom: 20,
    },
    pb5: {
        paddingBottom: 25,
    },
    pb6: {
        paddingBottom: 30,
    },
    pb7: {
        paddingBottom: 35,
    },
    pb8: {
        paddingBottom: 40,
    },
    pb9: {
        paddingBottom: 45,
    },
    pb10: {
        paddingBottom: 50,
    },
    px1: {
        paddingHorizontal: 5,
    },
    px2: {
        paddingHorizontal: 10,
    },
    px3: {
        paddingHorizontal: 15,
    },
    px4: {
        paddingHorizontal: 20,
    },
    px5: {
        paddingHorizontal: 25,
    },
    px6: {
        paddingHorizontal: 30,
    },
    px7: {
        paddingHorizontal: 35,
    },
    px8: {
        paddingHorizontal: 40,
    },
    px9: {
        paddingHorizontal: 45,
    },
    px10: {
        paddingHorizontal: 50,
    },
    py1: {
        paddingVertical: 5,
    },
    py2: {
        paddingVertical: 10,
    },
    py3: {
        paddingVertical: 15,
    },
    py4: {
        paddingVertical: 20,
    },
    py5: {
        paddingVertical: 25,
    },
    py6: {
        paddingVertical: 30,
    },
    py7: {
        paddingVertical: 35,
    },
    py8: {
        paddingVertical: 40,
    },
    py9: {
        paddingVertical: 45,
    },
    py10: {
        paddingVertical: 50,
    },
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    flex3: {
        flex: 3,
    },
    flex4: {
        flex: 4,
    },
    flex5: {
        flex: 5,
    },
    flexStart: {
        alignItems: 'flex-start',
    },
    flexEnd: {
        alignItems: 'flex-end',
    },
    flexCenter: {
        alignItems: 'center',
    },
    justifyContentSpaceBetween: {
        justifyContent: 'space-between',
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    justifyContentSpaceAround: {
        justifyContent: 'space-around',
    },
    justifyContentFlexStart: {
        justifyContent: 'flex-start',
    },
    justifyContentFlexEnd: {
        justifyContent: 'flex-end',
    },
    deviceWidth: {
        width: Constants.BaseStyle.DEVICE_WIDTH,
    },
    deviceHeight: {
        height: Constants.BaseStyle.DRAWER_HEIGHT,
    },
})

export default main
