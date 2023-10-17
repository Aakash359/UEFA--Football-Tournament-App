import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import Constants from '../../contants'
import styles from './styles'
import PropTypes from 'prop-types'

class TouchView extends Component {
    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        const { title = 'title', onPress = null, route = null } = this.props

        return (
            <View style={{ width: '100%' }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={onPress}
                    style={styles.inputFieldWrapper}
                >
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{title}</Text>

                        <Image
                            source={Constants.Images.rightBack}
                            style={styles.icon}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default TouchView
