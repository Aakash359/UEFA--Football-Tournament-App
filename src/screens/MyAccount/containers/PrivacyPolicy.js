import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import styles from '../styles'
import Constants from '../../../contants'
import typography from '../../../contants/typography'
import {
    privacyPolicyRequest, termsConditionError
} from '../../../redux/actions/settingsActions'
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import main from '../../../styles/main'
import { WebView } from 'react-native-webview';

class PrivacyPolicy extends Component {
    constructor() {
        super()
        this.state = {
            loader: false,
            text: '',
            arText: '',
            showWebView: true,
        }
    }

    componentDidMount() {
        let payload = { slug: 'privacy-policy' }
        this.props.privacyPolicyRequest(payload)
    }

    renderWebView(){
        if(this.state.showWebView){
          return(
            <View style={{flex:1}}>
                
              <WebView
               source={{uri: `https://quytech.net/predictwin/privacy_policy`}}
              />
            </View>
            
          );
        }
      }

    render() {
      
        const {isLoading,privaryPolicyError} =this.props
        return (
            <View style={styles.container}>
             
            {this.renderWebView()}
           
               
            </View>
        )
    
    }
}

const htmlStyleSheet = StyleSheet.create({
    h4: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    p: {
        color: Constants.Colors.WHITE,
        fontSize: Constants.BaseStyle.scale(16),
        marginTop: Constants.BaseStyle.scale(20),
        marginHorizontal: Constants.BaseStyle.scale(20),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
    },
    strong: {
        color: Constants.Colors.WHITE,
    },
    span: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    p: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    ol: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
    ul: {
        fontSize: Constants.BaseStyle.scale(16),
        fontFamily: typography.FONT_FAMILY_SEMIBOLD,
        color: Constants.Colors.WHITE,
    },
})

// =============== REDUX CONNECT & RESPONSE ===============
const mapStateToProps = (res) => {
    return {
        settings: res.settings?.privaryPolicyResponse?.content,        
    privaryPolicyError:res.settings.privaryPolicyError,
    isLoading:res.settings.isLoading, 
    };
}
export default connect(mapStateToProps, { privacyPolicyRequest })(PrivacyPolicy)
