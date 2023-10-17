import React, { Component } from 'react'
import {
    Keyboard,
    KeyboardAvoidingView as KBAV,
    Platform,
    TouchableOpacity,
} from 'react-native'
import main from '../../styles/main'

class KeyboardAvoidingView extends Component {
    render() {
        const { children } = this.props
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={main.keyborderDissmiss}
                onPress={Keyboard.dismiss}
            >
                <KBAV behavior={Platform.OS === 'ios' ? 'padding' : 'none'}>
                    {children}
                </KBAV>
            </TouchableOpacity>
        )
    }
}

export default KeyboardAvoidingView
