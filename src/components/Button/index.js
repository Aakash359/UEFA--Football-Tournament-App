import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import main from '../../styles/main'
import Loader from '../Loader'

class Button extends Component {
    render() {
        const {
            title = 'Button',
            activeOpacity = 0.2,
            onPress = null,
            style = {},
            isLoading = false,
            disabled = false,
        } = this.props
        return (
            <TouchableOpacity
                activeOpacity={activeOpacity}
                onPress={onPress}
                style={{ ...main.button, ...style }}
                disabled={disabled || isLoading}
            >
                {isLoading ? (
                    <Loader isLoading={isLoading} size="small" />
                ) : (
                    <Text style={main.buttonText}>{title}</Text>
                )}
            </TouchableOpacity>
        )
    }
}

export default Button
