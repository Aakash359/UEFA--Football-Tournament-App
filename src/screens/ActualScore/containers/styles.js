import { StyleSheet } from 'react-native'
import Constants from '../../../contants'
import typography from '../../../contants/typography'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    v1:{
        flexDirection:'row' ,
        justifyContent:'space-between',
        marginLeft :Constants.BaseStyle.scale(30),
        alignSelf:'center',
        
    },
    lv2:{
        flexDirection:'row' ,
        alignSelf:'center',
        marginHorizontal:Constants.BaseStyle.scale(30),
        
    },
    v2:{
        height:'40%',
        width:'90%',
        marginTop:Constants.BaseStyle.scale(30),
        borderWidth:Constants.BaseStyle.scale(2),
        borderRadius:Constants.BaseStyle.scale(8),
        borderColor:Constants.Colors.SECONDARY,
        alignSelf:'center'
    },
    borderView:{
        height:'40%',
        width:'90%',
        borderWidth:Constants.BaseStyle.scale(2),
        borderColor:Constants.Colors.SECONDARY,
    },
    v3:{ 
        flexDirection:'row',
        marginLeft:Constants.BaseStyle.scale(10),
        marginTop:Constants.BaseStyle.scale(10),
        height:Constants.BaseStyle.scale(-50),
    },
    v4:{
        flexDirection:'row',
        marginLeft:Constants.BaseStyle.scale(45),
        alignItems:'center',
        marginTop:Constants.BaseStyle.scale(3)
    },
    list: {
        backgroundColor: Constants.Colors.PRIMARY2,width:Constants.BaseStyle.scale(100),
        borderTopLeftRadius:Constants.BaseStyle.scale(20),
        borderTopRightRadius:Constants.BaseStyle.scale(20),
        borderBottomLeftRadius:Constants.BaseStyle.scale(20),
        borderBottomRightRadius:Constants.BaseStyle.scale(20),
    },
    text:{
        color: Constants.Colors.WHITE, 
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(8),
        
      },
      text1:{
        color: Constants.Colors.SECONDARY, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(10),
       
      },
      lt1:{
        color: Constants.Colors.SECONDARY, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
       
        
      },
      tx1:{
        color: Constants.Colors.WHITE, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(0),
        width: Constants.BaseStyle.scale(80)
      },
      tx2:{
        color: Constants.Colors.WHITE, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(10),
      },
    text2:{
        color: Constants.Colors.SECONDARY, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(15),
      },
      lt2:{
        color: Constants.Colors.SECONDARY, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(40),
        
      },
      text3:{
        color: Constants.Colors.SECONDARY, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(15),
      },
      lt3:{
        color: Constants.Colors.SECONDARY, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(35),
      },
      text4:{
        color: Constants.Colors.SECONDARY, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(15),
      },
      lt4:{
        color: Constants.Colors.SECONDARY, 
        fontSize: Constants.BaseStyle.scale(14),
        fontFamily: typography.FONT_FAMILY_BOLD,
        marginLeft:Constants.BaseStyle.scale(40),
      },
    View1:{
       flexDirection:'row',
       marginTop:Constants.BaseStyle.scale(10),
       alignItems:'center'
    },
    l1:{
        flexDirection:'row',
        marginTop:Constants.BaseStyle.scale(10),
        alignItems:'center',
        width:Constants.BaseStyle.scale(80),
        paddingHorizontal:Constants.BaseStyle.scale(10),
        paddingVertical:Constants.BaseStyle.scale(10),
        
     },
    dropView:{
        marginTop:Constants.BaseStyle.scale(10),
        marginLeft:Constants.BaseStyle.scale(10)
    },
    dropContainer:{
        height: Constants.BaseStyle.scale(40)
    },
    txt1:{alignItems:'center',
    color: Constants.Colors.WHITE,
    fontSize: Constants.BaseStyle.scale(18),
    fontFamily: typography.FONT_FAMILY_BOLD, 
    },
    flatText:{color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(16),
        marginLeft:Constants.BaseStyle.scale(12),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD, 
    },
    flattext1:{
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(16), 
    }
})

export default styles
