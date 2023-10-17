import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity,Image} from 'react-native'
import Constants from '../../contants'
import styles from './styles'
import PropTypes from 'prop-types';
import Button from '../Button'
import main from '../../styles/main'


class NotificationList extends Component {

    static propTypes = {
        title: PropTypes.string,
        
    }

   render() {
        const 
        {
            heading = 'title',
            onPress = null,
            route = null,
            message = 'message'
        } = this.props
        
      return (
            <View style={styles.V1}>
                <View
                    activeOpacity={1}
                    onPress={onPress}
                    style={styles.inputFieldWrapper}
                >  
                <Text style={styles.text}>{heading}</Text>
                  <View style={styles.border}></View>
                
                  <View style={styles.textWrapper2}>
                    <Text style={styles.tx1}>{message}</Text>
                    
                    </View>
                   
          
                
                 </View>
            </View>
        )
    }
}

export default NotificationList
