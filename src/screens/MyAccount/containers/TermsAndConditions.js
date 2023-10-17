import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import styles from './../styles'
import { termsConditionRequest } from '../../../redux/actions/settingsActions'
import { connect } from 'react-redux';
import Loader from '../../../components/Loader'
import MsgBox from '../../../components/MsgBox'
import { WebView } from 'react-native-webview';

class TermsAndConditions extends Component {

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
        let payload = { slug: 'term' }
        this.props.termsConditionRequest(payload)
    }

    renderWebView(){
        if(this.state.showWebView){
          return(
            <View style={{flex:1}}>
                
              <WebView
               source={{uri: `https://quytech.net/predictwin/terms-conditions`}}
              />
            </View>
            
          );
        }
      }

    render() {
         return (
            <View style={styles.container}>
               
                 {this.renderWebView()}
            </View>
        )
    }
}

// =============== REDUX CONNECT & RESPONSE ===============
const mapStateToProps = (res) => {
    return {
        settings: res.settings?.termsConditionResponse?.content,
        isLoading:res.settings.isLoading,        
    termsConditionError:res.settings.termsConditionError ,
    };
}
export default connect(mapStateToProps, { termsConditionRequest })(
    TermsAndConditions
)
