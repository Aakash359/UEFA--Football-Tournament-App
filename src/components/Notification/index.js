import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Constants from '../../contants'
import styles from './styles'
import PropTypes from 'prop-types'

class Notification extends Component {
    static propTypes = {
        title: PropTypes.string,
      
    }

    render() {
        const {
            title = 'title',
            onPress = null,
            route = null,
            notification = false,
        } = this.props

      

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.inputFieldWrapper}
            >
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{title}</Text>

                    {
                        notification?<TouchableOpacity
                        onPress={onPress}>
                        <Image
                            source={Constants.Images.toggle}
                            style={styles.icon}
                        />
    
                        </TouchableOpacity>:
                        <TouchableOpacity
                        onPress={onPress}>
                        <Image
                            source={Constants.Images.toggle_off}
                            style={styles.icon}
                        />
    
                        </TouchableOpacity>
                    }
                    
                   
                </View>
            </TouchableOpacity>
        )
    }
}

export default Notification
