import { StyleSheet } from 'react-native'
import Constants from '../../contants'
import typography from '../../contants/typography'

const styles = StyleSheet.create({
    
v1:{
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constants.Colors.MODAL,
 },
 v2:{
  width: '80%',
  backgroundColor: Constants.Colors.PRIMARY2,
  borderRadius: Constants.BaseStyle.scale(10),
  borderWidth:Constants.BaseStyle.scale(2),
  borderColor:Constants.Colors.SECONDARY,
  paddingTop: Constants.BaseStyle.scale(20),
  alignItems: 'center',
  overflow: 'hidden',
  },
  v3:{
    height: Constants.BaseStyle.scale(45),
    width: '90%',
    flexDirection: 'row',
    marginTop: Constants.BaseStyle.scale(25),
    alignSelf: 'center',
    justifyContent : 'space-around',
    marginBottom : Constants.BaseStyle.scale(20)
  },
  title:{
    fontSize: Constants.BaseStyle.scale(18),
    fontFamily: typography.FONT_FAMILY_REGULAR,
    color: Constants.Colors.WHITE,
    backgroundColor:Constants.Colors.PRIMARY2,
    
    width: '100%',
    textAlign: 'center',

  },
  T1:{
    width: '45%',
    height: '100%',
    backgroundColor: Constants.Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius : Constants.BaseStyle.scale(7),
   
    
  },
  ryt_btn:{
    color: Constants.Colors.WHITE,
    fontSize: Constants.BaseStyle.scale(16),
    fontFamily: typography.FONT_FAMILY_REGULAR,
    
  },
  left_btn:{
    width: '45%',
    height: '100%',
    backgroundColor: Constants.Colors.PRIMARY2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:Constants.BaseStyle.scale(2),
    borderColor:Constants.Colors.SECONDARY,
    borderRadius : Constants.BaseStyle.scale(7)
  },
  btn:{
    color: Constants.Colors.WHITE,
    fontSize: Constants.BaseStyle.scale(16),
    fontFamily: typography.FONT_FAMILY_LIGHT,
  }
   
})

export default styles
